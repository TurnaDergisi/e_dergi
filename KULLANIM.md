# E-Dergi - Kullanım Rehberi

## Sayı Ekleme

### Grafik Arayüz (Kolay)
1. **`add_issue.pyw`** dosyasını **çift-tıkla**
2. PDF dosyasını seç
3. Klasör adını gir (ör: `sayi2`, `bulten3`)
4. Dergi başlığını gir (ör: `Mart 2026 / Sayı 6`)
5. Bitti!

### Komut Satırı
```bash
python create_issue.py dosya.pdf klasor_adi --title "Dergi Başlığı"
```

**Örnek:**
```bash
python create_issue.py mart2026.pdf sayi2 --title "Mart 2026 / Sayı 6"
```

---

## Sayı Silme

### Grafik Arayüz (Kolay)
1. **`delete_issue.pyw`** dosyasını **çift-tıkla**
2. Silinecek klasör adını gir (ör: `sayi2`, `bulten1`)
3. Onay ver
4. Silindi!

### Komut Satırı
```bash
python delete_issue.py sayi2
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
├── bulten1/                # Yayımlanmış sayı 1
├── sayi2/                  # Yayımlanmış sayı 2 (varsa)
├── index.html              # Ana arşiv sayfası
├── add_issue.pyw           # Sayı ekleme aracı (GUI)
├── delete_issue.pyw        # Sayı silme aracı (GUI)
├── create_issue.py         # Sayı ekleme (CLI)
├── delete_issue.py         # Sayı silme (CLI)
└── bulten1.pdf             # Kaynak PDF
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
- Klasör adı doğru mu? (örn: `bulten1` değil `bulten 1`)
- Admin izinleri gerekli mi?

---

## İpuçları

- **Yeni sayı adlandırması:** `sayi1`, `sayi2`, `mart2026` vb.
- **Sayı başlığı:** Tarihi ve sayı numarasını ekle (ör: `Mart 2026 / Sayı 6`)
- **PDF dosyası:** İyi kaliteli sayfa görsellerine sahip olmalı
- **Backup:** Silmeden önce klasörü yedekle!

---

## Gelişmiş Kullanım

### Özel Template Kullanma
```bash
python create_issue.py dosya.pdf klasor --title "Başlık" --template _template
```

### Batch Processing (Terminal)
```bash
# Birden fazla PDF'i işleme
for file in *.pdf; do
    dirname="${file%.pdf}"
    python create_issue.py "$file" "$dirname" --title "$dirname"
done
```
