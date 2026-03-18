#!/usr/bin/env python3
"""
E-Dergi - Sayı Silme Aracı (GUI)
"""
import os
import sys
import tkinter as tk
from tkinter import simpledialog, messagebox

# delete_issue.py'nin main modülünü import et
sys.path.insert(0, os.path.dirname(__file__))
from delete_issue import delete_issue

def main():
    root = tk.Tk()
    root.withdraw()  # Ana pencereyi gizle

    root.title("E-Dergi - Sayı Silme")

    # Klasör adı sor
    folder_name = simpledialog.askstring(
        "Silinecek Sayı",
        "Silinecek klasör adını girin:\n(örn: bulten1, sayi1)",
        parent=root
    )

    if not folder_name:
        messagebox.showinfo("İptal", "İşlem iptal edildi.")
        return

    # Onay sor
    response = messagebox.askyesno(
        "Onay",
        f"⚠️  UYARI!\n\n"
        f"'{folder_name}' klasörü SİLİNECEK!\n\n"
        f"Bu işlem geri alınamaz.\n"
        f"Devam etmek istediğinize emin misiniz?"
    )

    if not response:
        messagebox.showinfo("İptal", "İşlem iptal edildi.")
        return

    # İşlemi başlat
    base_dir = os.path.dirname(os.path.abspath(__file__))
    print(f"\n{'='*50}")
    print(f"Sayı siliniyor: {folder_name}")
    print(f"{'='*50}")

    try:
        success = delete_issue(base_dir, folder_name)
        if success:
            messagebox.showinfo(
                "Başarı",
                f"✓ Sayı başarıyla silindi!\n\n"
                f"Silinen klasör: {folder_name}"
            )
        else:
            messagebox.showerror("Hata", "Sayı silinemedi.")
    except Exception as e:
        messagebox.showerror("Hata", f"İşlem başarısız:\n{str(e)}")

    root.destroy()

if __name__ == "__main__":
    main()
