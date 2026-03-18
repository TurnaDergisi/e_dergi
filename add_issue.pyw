#!/usr/bin/env python3
"""
E-Dergi - Sayı Ekleme Aracı (GUI)
"""
import os
import sys
import tkinter as tk
from tkinter import simpledialog, filedialog, messagebox

# create_issue.py'nin main modülünü import et
sys.path.insert(0, os.path.dirname(__file__))
from create_issue import create_issue

def main():
    root = tk.Tk()
    root.withdraw()  # Ana pencereyi gizle

    root.title("E-Dergi - Sayı Ekleme")

    # PDF dosyası seç
    pdf_path = filedialog.askopenfilename(
        title="PDF Dosyasını Seç",
        filetypes=[("PDF files", "*.pdf"), ("All files", "*.*")]
    )

    if not pdf_path:
        messagebox.showinfo("İptal", "İşlem iptal edildi.")
        return

    # Klasör adı
    folder_name = simpledialog.askstring(
        "Klasör Adı",
        "Oluşturulacak klasör adını girin:\n(örn: sayi1, bulten2)",
        parent=root
    )

    if not folder_name:
        messagebox.showinfo("İptal", "İşlem iptal edildi.")
        return

    # Dergi başlığı
    title = simpledialog.askstring(
        "Dergi Başlığı",
        "Dergi başlığını girin:\n(örn: Mart 2026 / Sayı 6)",
        parent=root
    )

    if not title:
        messagebox.showinfo("İptal", "İşlem iptal edildi.")
        return

    # İşlemi başlat
    base_dir = os.path.dirname(os.path.abspath(__file__))
    print(f"\n{'='*50}")
    print("Sayı ekleniyor...")
    print(f"{'='*50}")

    try:
        create_issue(pdf_path, folder_name, title)
        messagebox.showinfo(
            "Başarı",
            f"✓ Sayı başarıyla oluşturuldu!\n\n"
            f"Klasör: {folder_name}\n"
            f"Başlık: {title}\n\n"
            f"URL: {folder_name}/mobile/index.html"
        )
    except Exception as e:
        messagebox.showerror("Hata", f"İşlem başarısız:\n{str(e)}")

    root.destroy()

if __name__ == "__main__":
    main()
