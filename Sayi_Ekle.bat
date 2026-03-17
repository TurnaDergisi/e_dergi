@echo off
setlocal
chcp 65001 > nul

echo ========================================
echo       TURNA DERGİSİ - YENİ SAYI EKLE
echo ========================================
echo.

set /p pdf_file="1. PDF Dosyasının Adı (uzantısıyla, örn: bulten1.pdf): "
if not exist "%pdf_file%" (
    echo HATA: %pdf_file% bulunamadı!
    pause
    exit /b
)

set /p folder_name="2. Oluşturulacak Klasör Adı (örn: bulten1): "
set /p issue_title="3. Dergi Başlığı (örn: Bülten 1): "

echo.
echo İşlem başlatılıyor... Lütfen bekleyin...
echo.

python create_issue.py "%pdf_file%" "%folder_name%" --title "%issue_title%"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   BAŞARILI: Yeni sayı sisteme eklendi!
    echo ========================================
) else (
    echo.
    echo HATA: İşlem sırasında bir sorun oluştu.
)

echo.
pause
