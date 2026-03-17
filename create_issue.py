#!/usr/bin/env python3
import os
import sys
import shutil
import re
import time
import argparse

def create_issue(pdf_path, issue_dir_name, title, template_dir="eylul"):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    template_path = os.path.join(base_dir, template_dir)
    target_path = os.path.join(base_dir, issue_dir_name)

    try:
        import fitz
    except ImportError:
        print("HATA: PyMuPDF (fitz) kütüphanesi yüklü değil. 'pip install pymupdf' çalıştırın.")
        return

    if not os.path.exists(pdf_path):
        print(f"HATA: PDF dosyası bulunamadı: {pdf_path}")
        return
    
    if not os.path.isdir(template_path):
        print(f"HATA: Şablon klasörü bulunamadı: {template_path}")
        return

    # 1. Klasörü Klonla
    if os.path.exists(target_path):
        print(f"Uyarı: {target_path} zaten var. Üzerine yazılıyor...")
        shutil.rmtree(target_path)
    
    print(f"Şablon kopyalanıyor: {template_dir} -> {issue_dir_name}")
    shutil.copytree(template_path, target_path)

    # 2. Eski Assetleri Temizle
    dirs_to_clean = [
        os.path.join(target_path, "files", "mobile"),
        os.path.join(target_path, "files", "thumb"),
        os.path.join(target_path, "files", "page"),
        os.path.join(target_path, "files", "search")
    ]
    for d in dirs_to_clean:
        if os.path.exists(d):
            shutil.rmtree(d)
        os.makedirs(d, exist_ok=True)
    
    # 3. PDF'den Görselleri Çıkart
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"PDF İşleniyor: {total_pages} sayfa")

    mobile_dir = os.path.join(target_path, "files", "mobile")
    thumb_dir = os.path.join(target_path, "files", "thumb")

    for i in range(total_pages):
        page = doc[i]
        
        # Mobil Görsel (Yüksek Kalite)
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        pix.save(os.path.join(mobile_dir, f"{i+1}.jpg"), jpg_quality=85)
        
        # Thumbnail
        mat_t = fitz.Matrix(0.3, 0.3)
        pix_t = page.get_pixmap(matrix=mat_t, alpha=False)
        pix_t.save(os.path.join(thumb_dir, f"{i+1}.jpg"), jpg_quality=70)
        
        if (i+1) % 10 == 0 or (i+1) == total_pages:
            print(f"Görsel İlerleme: {i+1}/{total_pages}")

    doc.close()

    # 4. config.js Güncelle
    config_path = os.path.join(target_path, "mobile", "javascript", "config.js")
    if os.path.exists(config_path):
        print("Yapılandırma dosyası (config.js) güncelleniyor...")
        with open(config_path, "r", encoding="utf-8") as f:
            content = f.read()

        # totalPageCount
        content = re.sub(r'totalPageCount\s*:\s*\d+', f'totalPageCount : {total_pages}', content)
        content = re.sub(r'bookConfig\.totalPageCount\s*=\s*\d+;', f'bookConfig.totalPageCount={total_pages};', content)

        # bookTitle
        content = re.sub(r'bookTitle\s*:\s*".*?"', f'bookTitle:"{title}"', content)
        content = re.sub(r'bookConfig\.bookTitle\s*=\s*".*?";', f'bookConfig.bookTitle="{title}";', content)

        # pages_information dizisi
        pages_info_list = ['{pageColor:"16777215",pageIsStrech:"no"}'] * total_pages
        pages_info_str = "var pages_information =[" + ",".join(pages_info_list) + "];"
        content = re.sub(r'var pages_information\s*=\s*\[.*?\]\s*;', pages_info_str, content)

        # CreatedTime
        timestamp = time.strftime("%y%m%d%H%M%S")
        content = re.sub(r'bookConfig\.CreatedTime\s*=\s*".*?";', f'bookConfig.CreatedTime ="{timestamp}";', content)

        with open(config_path, "w", encoding="utf-8") as f:
            f.write(content)

    # 5. HTML Dosyalarını Güncelle
    html_targets = [
        os.path.join(target_path, "index.html"),
        os.path.join(target_path, "mobile", "index.html")
    ]
    for h_path in html_targets:
        if os.path.exists(h_path):
            print(f"HTML güncelleniyor: {h_path}")
            with open(h_path, "r", encoding="utf-8") as f:
                h_content = f.read()
            
            h_content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', h_content)
            h_content = re.sub(r'content="Eylül 2022"', f'content="{title}"', h_content)
            h_content = re.sub(r'og:title" content=".*?"', f'og:title" content="{title}"', h_content)
            h_content = re.sub(r'og:description" content=".*?"', f'og:description" content="{title}"', h_content)
            
            with open(h_path, "w", encoding="utf-8") as f:
                f.write(h_content)

    print(f"\nİŞLEM TAMAMLANDI!")
    print(f"Yeni dergi hazır: {issue_dir_name}")
    print(f"URL: {issue_dir_name}/mobile/index.html")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="E-Dergi Şablonu üzerinden yeni sayı oluşturur.")
    parser.add_argument("pdf", help="Kaynak PDF dosyası yolu")
    parser.add_argument("dir", help="Hedef klasör ismi (örn: bulten1)")
    parser.add_argument("--title", required=True, help="Dergi başlığı")
    parser.add_argument("--template", default="eylul", help="Kullanılacak şablon klasörü (varsayılan: eylul)")
    
    args = parser.parse_args()
    create_issue(args.pdf, args.dir, args.title, args.template)
