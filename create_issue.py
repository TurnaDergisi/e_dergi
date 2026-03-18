#!/usr/bin/env python3
import os
import sys
import shutil
import re
import time
import argparse

def update_shelf(base_dir, issue_dir, title, pdf_name):
    index_path = os.path.join(base_dir, "index.html")
    if not os.path.exists(index_path):
        print("Uyarı: Kök index.html bulunamadı, raf güncellenemedi.")
        return

    print("Ana sayfa (index.html) güncelleniyor...")
    with open(index_path, "r", encoding="utf-8") as f:
        content = f.read()

    description = f"Turna Dergisi'nin yeni sayısı '{title}' yayında! En güncel içeriklere erişmek için hemen okumaya başlayın."
    
    # 1. Öne Çıkan Sayı (Featured) Güncelleme
    new_featured_html = f"""
      <div class="featured-issue">
        <div class="featured-img">
          <img src="{issue_dir}/files/mobile/1.jpg" alt="{title} Kapak">
        </div>
        <div class="featured-content">
          <span class="tag">Yeni Yayın</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <div class="btn-group">
            <a href="{issue_dir}/mobile/index.html" class="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Şimdi Oku
            </a>
            <a href="{pdf_name}" class="btn btn-secondary" download>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              PDF İndir
            </a>
          </div>
        </div>
      </div>"""
    
    content = re.sub(r'<!-- FEATURED_START -->.*?<!-- FEATURED_END -->', 
                     f'<!-- FEATURED_START -->{new_featured_html}\n      <!-- FEATURED_END -->', 
                     content, flags=re.DOTALL)

    # 2. Arşiv Gridine Ekleme (Markers arasındaysa ekleme)
    grid_area_match = re.search(r'<!-- GRID_START -->(.*?)<!-- GRID_END -->', content, flags=re.DOTALL)
    if grid_area_match:
        grid_content = grid_area_match.group(1)
        if f'href="{issue_dir}/mobile/index.html"' not in grid_content:
            new_card = f"""
      <!-- {title} Card -->
      <a href="{issue_dir}/mobile/index.html" class="issue-card">
        <div class="card-img">
          <img src="{issue_dir}/files/mobile/1.jpg" alt="{title}">
        </div>
        <div class="card-content">
          <h3>{title}</h3>
          <p>Arşiv</p>
        </div>
      </a>"""
            content = content.replace('<!-- GRID_START -->', f'<!-- GRID_START -->{new_card}')

    with open(index_path, "w", encoding="utf-8") as f:
        f.write(content)

def create_issue(pdf_path, issue_dir_name, title, template_dir="_template"):
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
        print(f"HATA: Şablon klasörü bulunamadı: {template_path}.")
        return

    if os.path.exists(target_path):
        print(f"Uyarı: {target_path} zaten var. Üzerine yazılıyor...")
        shutil.rmtree(target_path)
    
    print(f"Şablon kopyalanıyor: {template_dir} -> {issue_dir_name}")
    shutil.copytree(template_path, target_path)

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
    
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"PDF İşleniyor: {total_pages} sayfa")

    # İlk sayfanın 2x render boyutunu hesapla (config.js için)
    first_page = doc[0]
    mat_measure = fitz.Matrix(2.0, 2.0)
    pix_measure = first_page.get_pixmap(matrix=mat_measure, alpha=False)
    page_width = pix_measure.width
    page_height = pix_measure.height
    print(f"Sayfa boyutu: {page_width}x{page_height}")

    mobile_dir = os.path.join(target_path, "files", "mobile")
    thumb_dir = os.path.join(target_path, "files", "thumb")
    files_dir = os.path.join(target_path, "files")

    for i in range(total_pages):
        page = doc[i]
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        pix.save(os.path.join(mobile_dir, f"{i+1}.jpg"), jpg_quality=85)

        mat_t = fitz.Matrix(0.3, 0.3)
        pix_t = page.get_pixmap(matrix=mat_t, alpha=False)
        pix_t.save(os.path.join(thumb_dir, f"{i+1}.jpg"), jpg_quality=70)

        # İlk sayfadan shot.png oluştur (sosyal medya önizlemesi için)
        if i == 0:
            mat_s = fitz.Matrix(0.6, 0.6)
            pix_s = page.get_pixmap(matrix=mat_s, alpha=False)
            pix_s.save(os.path.join(files_dir, "shot.png"), jpg_quality=85)
            print("shot.png (sosyal medya önizlemesi) oluşturuldu")

        if (i+1) % 10 == 0 or (i+1) == total_pages:
            print(f"Görsel İlerleme: {i+1}/{total_pages}")

    doc.close()

    config_path = os.path.join(target_path, "mobile", "javascript", "config.js")
    if os.path.exists(config_path):
        with open(config_path, "r", encoding="utf-8") as f:
            content = f.read()

        content = re.sub(r'totalPageCount\s*:\s*\d+', f'totalPageCount : {total_pages}', content)
        content = re.sub(r'bookConfig\.totalPageCount\s*=\s*\d+;', f'bookConfig.totalPageCount={total_pages};', content)
        content = re.sub(r'bookConfig\.largePageWidth\s*=\s*\d+;', f'bookConfig.largePageWidth={page_width};', content)
        content = re.sub(r'bookConfig\.largePageHeight\s*=\s*\d+;', f'bookConfig.largePageHeight={page_height};', content)
        content = re.sub(r'bookTitle\s*:\s*".*?"', f'bookTitle:"{title}"', content)
        content = re.sub(r'bookConfig\.bookTitle\s*=\s*".*?";', f'bookConfig.bookTitle="{title}";', content)

        pages_info_list = ['{pageColor:"16777215",pageIsStrech:"no"}'] * total_pages
        pages_info_str = "var pages_information =[" + ",".join(pages_info_list) + "];"
        content = re.sub(r'var pages_information\s*=\s*\[.*?\]\s*;', pages_info_str, content)

        timestamp = time.strftime("%y%m%d%H%M%S")
        content = re.sub(r'bookConfig\.CreatedTime\s*=\s*".*?";', f'bookConfig.CreatedTime ="{timestamp}";', content)

        with open(config_path, "w", encoding="utf-8") as f:
            f.write(content)

    html_targets = [
        os.path.join(target_path, "index.html"),
        os.path.join(target_path, "mobile", "index.html")
    ]
    for h_path in html_targets:
        if os.path.exists(h_path):
            with open(h_path, "r", encoding="utf-8") as f:
                h_content = f.read()
            h_content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', h_content)
            with open(h_path, "w", encoding="utf-8") as f:
                f.write(h_content)

    update_shelf(base_dir, issue_dir_name, title, os.path.basename(pdf_path))

    print(f"\nİŞLEM TAMAMLANDI!")
    print(f"Yeni dergi hazır: {issue_dir_name}")
    print(f"URL: {issue_dir_name}/mobile/index.html")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="E-Dergi Şablonu üzerinden yeni sayı oluşturur.")
    parser.add_argument("pdf", help="Kaynak PDF dosyası yolu")
    parser.add_argument("dir", help="Hedef klasör ismi (örn: bulten1)")
    parser.add_argument("--title", required=True, help="Dergi başlığı")
    parser.add_argument("--template", default="_template", help="Kullanılacak şablon klasörü (varsayılan: _template)")
    
    args = parser.parse_args()
    create_issue(args.pdf, args.dir, args.title, args.template)
