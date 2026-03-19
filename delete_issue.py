#!/usr/bin/env python3
import os
import sys
import shutil
import re
import argparse

SAFE_NAME_RE = re.compile(r'^[A-Za-z0-9_\-]+$')

def delete_issue(base_dir, issue_dir_name):
    """Sayı klasörünü ve ana sayfadaki referanslarını sil"""

    # Girdi doğrulama
    if not issue_dir_name or not SAFE_NAME_RE.match(issue_dir_name) or '..' in issue_dir_name:
        print(f"HATA: Geçersiz klasör adı: '{issue_dir_name}'. Sadece harf, rakam, _ ve - kullanılabilir.")
        return False

    issue_path = os.path.join(base_dir, issue_dir_name)

    # Path traversal koruması
    if not os.path.realpath(issue_path).startswith(os.path.realpath(base_dir)):
        print("HATA: Hedef klasör proje dizini dışında olamaz.")
        return False
    index_path = os.path.join(base_dir, "index.html")

    # Klasör varlığını kontrol et
    if not os.path.exists(issue_path):
        print(f"HATA: '{issue_dir_name}' klasörü bulunamadı.")
        return False

    if not os.path.isdir(issue_path):
        print(f"HATA: '{issue_path}' bir klasör değil.")
        return False

    # Onay iste
    print(f"\n⚠️  UYARI: '{issue_dir_name}' klasörü SİLİNECEK!")
    print(f"   Boyut: {get_dir_size(issue_path)}")
    response = input("Devam etmek istediğinize emin misiniz? (evet/hayır): ").strip().lower()

    if response not in ['evet', 'yes', 'e', 'y']:
        print("İptal edildi.")
        return False

    # Klasörü sil
    print(f"\n'{issue_dir_name}' klasörü siliniyor...")
    try:
        shutil.rmtree(issue_path)
        print(f"✓ Klasör silindi: {issue_path}")
    except Exception as e:
        print(f"HATA: Klasör silinemedi: {e}")
        return False

    # index.html'den referansları sil
    if os.path.exists(index_path):
        print("Ana sayfa (index.html) güncelleniyor...")
        try:
            with open(index_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Featured bölümünden sil (eğer bu sayı featured ise)
            old_content = content
            content = re.sub(
                r'<!-- FEATURED_START -->.*?<!-- FEATURED_END -->',
                '<!-- FEATURED_START -->\n      <!-- FEATURED_END -->',
                content,
                flags=re.DOTALL,
                count=1
            )

            # Grid'den sil (sayının kartını sil)
            safe_name = re.escape(issue_dir_name)
            content = re.sub(
                rf'<!-- {safe_name}.*?-->\s*<a href="{safe_name}/mobile/index\.html".*?</a>',
                '',
                content,
                flags=re.DOTALL
            )

            # Alternatif olarak direct link sil
            if content == old_content:
                content = re.sub(
                    rf'<a href="{safe_name}/mobile/index\.html"[^>]*>.*?</a>',
                    '',
                    content,
                    flags=re.DOTALL
                )

            with open(index_path, "w", encoding="utf-8") as f:
                f.write(content)
            print("✓ index.html güncellendi")
        except Exception as e:
            print(f"UYARI: index.html güncellenirken hata: {e}")

    print(f"\n✓ İŞLEM TAMAMLANDI!")
    print(f"Silinen sayı: {issue_dir_name}")
    return True

def get_dir_size(path):
    """Klasör boyutunu hesapla (human readable format)"""
    total = 0
    for dirpath, dirnames, filenames in os.walk(path):
        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            if os.path.exists(filepath):
                total += os.path.getsize(filepath)

    for unit in ['B', 'KB', 'MB', 'GB']:
        if total < 1024:
            return f"{total:.1f}{unit}"
        total /= 1024
    return f"{total:.1f}TB"

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="E-Dergi sayısını siler.")
    parser.add_argument("dir", help="Silinecek klasör adı (örn: bulten1)")

    args = parser.parse_args()
    base_dir = os.path.dirname(os.path.abspath(__file__))

    success = delete_issue(base_dir, args.dir)
    sys.exit(0 if success else 1)
