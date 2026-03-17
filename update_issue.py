#!/usr/bin/env python3
import os
import sys
import re
import json
import time
import argparse

def update_issue(pdf_path, issue_dir, title):
    try:
        import fitz
    except ImportError:
        print("HATA: PyMuPDF (fitz) kütüphanesi yüklü değil. 'pip install pymupdf' çalıştırın.")
        return

    if not os.path.exists(pdf_path):
        print(f"HATA: PDF dosyası bulunamadı: {pdf_path}")
        return
    
    if not os.path.isdir(issue_dir):
        print(f"HATA: Hedef klasör bulunamadı: {issue_dir}")
        return

    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"PDF Açıldı: {pdf_path} ({total_pages} sayfa)")

    # 1. Görselleri Çıkart
    mobile_dir = os.path.join(issue_dir, "files", "mobile")
    thumb_dir = os.path.join(issue_dir, "files", "thumb")
    os.makedirs(mobile_dir, exist_ok=True)
    os.makedirs(thumb_dir, exist_ok=True)

    print("Görseller çıkartılıyor...")
    for i in range(total_pages):
        page = doc[i]
        
        # Mobil (Büyük) Görsel
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        pix.save(os.path.join(mobile_dir, f"{i+1}.jpg"), jpg_quality=80)
        
        # Thumbnail (Küçük) Görsel
        mat_t = fitz.Matrix(0.2, 0.2)
        pix_t = page.get_pixmap(matrix=mat_t, alpha=False)
        pix_t.save(os.path.join(thumb_dir, f"{i+1}.jpg"), jpg_quality=60)
        
        if (i+1) % 10 == 0 or (i+1) == total_pages:
            print(f"İlerleme: {i+1}/{total_pages}")

    doc.close()

    # 2. Config.js Güncelle
    config_path = os.path.join(issue_dir, "mobile", "javascript", "config.js")
    if os.path.exists(config_path):
        print(f"Yapılandırma güncelleniyor: {config_path}")
        with open(config_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Sayfa sayısı ve Başlık
        content = re.sub(r'bookConfig\.totalPageCount=\d+;', f'bookConfig.totalPageCount={total_pages};', content)
        content = re.sub(r'bookConfig\.bookTitle="[^"]*";', f'bookConfig.bookTitle="{title}";', content)
        
        # pages_information dizisi
        pages_info_list = ['{pageColor:"16777215",pageIsStrech:"no"}'] * total_pages
        pages_info_str = "var pages_information =[" + ",".join(pages_info_list) + "];"
        content = re.sub(r'var pages_information\s*=\s*\[.*?\]\s*;', pages_info_str, content)
        
        # Zaman damgası (YYMMDDHHMMSS)
        timestamp = time.strftime("%y%m%d%H%M%S")
        content = re.sub(r'bookConfig\.CreatedTime\s*=\s*"[^"]*";', f'bookConfig.CreatedTime ="{timestamp}";', content)

        with open(config_path, "w", encoding="utf-8") as f:
            f.write(content)

    # 3. HTML Dosyalarını Güncelle
    html_files = [
        os.path.join(issue_dir, "index.html"),
        os.path.join(issue_dir, "mobile", "index.html")
    ]
    
    for html_path in html_files:
        if os.path.exists(html_path):
            print(f"HTML güncelleniyor: {html_path}")
            with open(html_path, "r", encoding="utf-8") as f:
                h_content = f.read()
            
            h_content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', h_content)
            h_content = re.sub(r'<meta name="Description" content=".*?" />', f'<meta name="Description" content="{title}" />', h_content)
            h_content = re.sub(r'<meta property="og:title" content=".*?"/>', f'<meta property="og:title" content="{title}"/>', h_content)
            h_content = re.sub(r'<meta property="og:description" content=".*?" />', f'<meta property="og:description" content="{title}" />', h_content)
            
            with open(html_path, "w", encoding="utf-8") as f:
                f.write(h_content)

    print("\nİşlem Başarıyla Tamamlandı!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="PDF'i E-Dergi klasörüne uygular.")
    parser.add_argument("pdf", help="Kaynak PDF dosyası yolu")
    parser.add_argument("dir", help="Hedef sayı klasörü (örn: bulten1)")
    parser.add_argument("--title", default="Yeni Sayı", help="Dergi başlığı")
    
    args = parser.parse_args()
    update_issue(args.pdf, args.dir, args.title)
