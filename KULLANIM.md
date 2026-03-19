# E-Dergi - Kullanım Rehberi

## Sayı Ekleme

### Grafik Arayüz (Kolay)
1. **`add_issue.pyw`** dosyasını **çift-tıkla**
2. PDF dosyasını seç
3. Klasör adını gir (ör: `Turna_s7`, `bulten3`)
4. Dergi başlığını gir (ör: `Turna Dergisi / Sayı 7`)
5. Bitti!

### Komut Satırı
```bash
python create_issue.py dosya.pdf klasor_adi --title "Dergi Başlığı"
```

**Örnek:**
```bash
python create_issue.py turna7.pdf Turna_s7 --title "Turna Dergisi / Sayı 7"
```

---

## Sayı Silme

### Grafik Arayüz (Kolay)
1. **`delete_issue.pyw`** dosyasını **çift-tıkla**
2. Silinecek klasör adını gir (ör: `Turna_s7`)
3. Onay ver
4. Silindi!

### Komut Satırı
```bash
python delete_issue.py Turna_s7
```

---

## Sistem Gereksinimleri

- **Python 3.7+** (yüklü olmalı)
- **PyMuPDF**: `pip install pymupdf`

---

## Dosya Yapısı

```
e_dergi/
├── assets/                 # Paylaşılan JS/CSS (tüm sayılar kullanır)
├── _template/              # Yeni sayılar için şablon
├── Turna_s6/               # Yayımlanmış sayı (örnek)
├── index.html              # Ana arşiv sayfası
├── add_issue.pyw           # Sayı ekleme aracı (GUI)
├── delete_issue.pyw        # Sayı silme aracı (GUI)
├── create_issue.py         # Sayı ekleme (CLI)
└── delete_issue.py         # Sayı silme (CLI)
```

---

## Kısayollar

| İşlem | Kısayol |
|---|---|
| Sayı ekle | `add_issue.pyw` çift-tıkla |
| Sayı sil | `delete_issue.pyw` çift-tıkla |
| Terminal'de sayı ekle | `python create_issue.py file.pdf dir --title "Title"` |
| Terminal'de sayı sil | `python delete_issue.py dir` |

---

## Sorun Giderme

**`add_issue.pyw` açılmıyor:**
- Komut satırından çalıştır: `python add_issue.pyw`
- Veya: `python create_issue.py ...`

**PDF işlemi başarısız:**
- PyMuPDF kurulu mu? → `pip install pymupdf`

**Sayı silinmiyor:**
- Klasör adı doğru mu? (örn: `Turna_s6` değil `Turna s6`)
- Admin izinleri gerekli mi?

---

## İpuçları

- **Yeni sayı adlandırması:** `Turna_s7`, `Turna_s8` vb.
- **Sayı başlığı:** Derginin adını ve sayı numarasını ekle (ör: `Turna Dergisi / Sayı 7`)
- **PDF dosyası:** İyi kaliteli sayfa görsellerine sahip olmalı
- **Backup:** Silmeden önce klasörü yedekle!
