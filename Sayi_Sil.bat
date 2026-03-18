@echo off
setlocal enabledelayedexpansion

echo.
echo ================================
echo  E-Dergi Sayi Silme Araci
echo ================================
echo.

set /p FOLDER="Silinecek klasor adini girin (orn: bulten1): "

if "%FOLDER%"=="" (
    echo Hata: Klasor adi bos olamaz!
    pause
    exit /b 1
)

python delete_issue.py "%FOLDER%"

pause
