// Turna6 Flipbook - v8 Clean Build
// PDF dosyasının Google Drive ID'si - Buraya kendi PDF dosyanızın ID'sini girin
var PDF_DOSYA_ID = '1KSsIMeXKKH4zMuwFDthvdtC9ia0AgIWg';

// Müzik dosyasının Google Drive ID'si - MP3 dosyanızın ID'sini girin (opsiyonel)
var MUSIC_FILE_ID = '12FeOxyc6Q_yg1vm-Mt7k18Uz3IBe5xDd'; // Örnek: '1ABC...XYZ'

/**
 * Web uygulamasını başlatır
 */
function doGet(e) {
  try {
    return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('PDF Flipbook')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (error) {
    return HtmlService.createHtmlOutput('<h1>Uygulama Hatası</h1><p>' + error.message + '</p>');
  }
}

/**
 * HTML dosyasına CSS ve diğer dosyaları dahil etmek için yardımcı fonksiyon
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Google Drive'dan PDF dosyasını alır ve base64 formatında döndürür
 */
function getPdfAsBase64() {
  try {
    // PDF dosyasını Drive'dan al
    var file = DriveApp.getFileById(PDF_DOSYA_ID);

    // Dosyayı blob olarak al
    var blob = file.getBlob();

    // Base64'e çevir
    var base64 = Utilities.base64Encode(blob.getBytes());

    return base64;
  } catch (error) {
    throw new Error('PDF dosyası yüklenirken hata oluştu: ' + error.message);
  }
}

/**
 * Müzik dosyasını base64 olarak döndürür
 */
function getMusicAsBase64() {
  try {
    if (MUSIC_FILE_ID === '' || MUSIC_FILE_ID === null) {
      return '';
    }

    // Müzik dosyasını Drive'dan al
    var file = DriveApp.getFileById(MUSIC_FILE_ID);

    // Dosyayı blob olarak al
    var blob = file.getBlob();

    // Base64'e çevir
    var base64 = Utilities.base64Encode(blob.getBytes());

    // MIME type'ı belirle
    var mimeType = blob.getContentType();

    // Data URI formatında döndür
    return 'data:' + mimeType + ';base64,' + base64;
  } catch (error) {
    Logger.log('Müzik dosyası alınırken hata: ' + error.message);
    return '';
  }
}
