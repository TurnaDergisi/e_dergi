	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 44,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"Turna Dergisi / Sayı 6",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="neat";bookConfig.loadingCaption="Yükleniyor";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#FF0080";bookConfig.loadingBackground="#232B30";bookConfig.loadingPicture="../files/mobile-ext/loadingPicture.png";bookConfig.loadingPictureHeight="500";bookConfig.showLoadingGif="No";bookConfig.loadingDisplayTime="1";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#110e0f";bookConfig.iconColor="#E5E5E5";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#b7b7b7";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="No";bookConfig.showBookInstructionOnStart="false";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Show";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="large";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="3";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";;bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Show";bookConfig.bgBeginColor="#6b5e53";bookConfig.bgEndColor="#6b5e53";bookConfig.bgMRotation="-90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="double";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="no";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="Yes";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.updateURLForPage="No";bookConfig.passwordTips="";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.googleAnalyticsID="G-MYSZGP3E57";bookConfig.MidBgColor="#712816";bookConfig.useTheAliCloudChart ="no";bookConfig.UIBaseURL="../../assets/";bookConfig.totalPageCount=44;bookConfig.largePageWidth=1296;bookConfig.largePageHeight=1728;;bookConfig.securityType="1";bookConfig.CreatedTime ="260318035529";bookConfig.bookTitle="Turna Dergisi / Sayı 6";bookConfig.bookmarkCR="7ca253a78909428cd08a398d75de538b3b3027e1";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";var language = [{ language : "turkce",btnFirstPage:"İlk",btnNextPage:"Sonraki sayfa",btnLastPage:"Son",btnPrePage:"Önceki Sayfa",btnDownload:"İndir",btnPrint:"Yazdır",btnSearch:"Ara",btnClearSearch:"Temizle",frmSearchPrompt:"Temizle",btnBookMark:"İçindekiler",btnHelp:"Yardım",btnHome:"Anasayfa",btnFullScreen:"Tam Ekranı Etkinleştir",btnDisableFullScreen:"Tam Ekranı Devre Dışı Bırak",btnSoundOn:"Ses açık",btnSoundOff:"Ses Kapalı",btnShareEmail:"Paylaş",btnSocialShare:"Sosyal Paylaşım",btnZoomIn:"Yakınlaştır",btnZoomOut:"Uzaklaştır",btnDragToMove:"Fareyi sürükleyerek hareket ettirin",btnAutoFlip:"Otomatik Çevirme",btnStopAutoFlip:"Otomatik Çevirmeyi Durdur",btnGoToHome:"Başa dön",frmHelpCaption:"Yardım",frmHelpTip1:"Yakınlaştırmak veya uzaklaştırmak için çift tıklayın",frmHelpTip2:"Görüntülemek için sayfa köşesini sürükleyin",frmPrintCaption:"Yazdır",frmPrintBtnCaption:"Yazdır",frmPrintPrintAll:"Tüm Sayfaları Yazdır",frmPrintPrintCurrentPage:"Geçerli sayfayı yazdır",frmPrintPrintRange:"Baskı Aralığı",frmPrintExampleCaption:"Örnek: 2,5,8-26",frmPrintPreparePage:"Sayfa Hazırlanıyor:",frmPrintPrintFailed:"Yazdırma Başarısız:",pnlSearchInputInvalid:"(Minimum istek uzunluğu 3 semboldür)",loginCaption:"Giriş yapmak",loginInvalidPassword:"Geçerli bir şifre değil!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Vazgeç",btnThumb:"Küçük resimler",lblPages:"Küçük resimler",lblPagesFound:"Sayfalar:",lblPageIndex:"Sayfa",btnAbout:"Hakkında",frnAboutCaption:"Hakkında & İletişim",btnSinglePage:"Tek sayfa",btnDoublePage:"Çift Sayfa",btnSwicthLanguage:"Dil Değiştir",tipChangeLanguage:"Lütfen aşağıdan bir dil seçin...",btnMoreOptionsLeft:"Daha fazla seçenek",btnMoreOptionsRight:"Daha fazla seçenek",btnFit:"Pencereyi Sığdır",smallModeCaption:"Tam ekran görüntülemek için tıklayın",btnAddAnnotation:"Açıklama Ekle",btnAnnotation:"Ek açıklamalar",FlipPageEditor_SaveAndExit:"Kaydet ve çık",FlipPageEditor_Exit:"Çıkış",DrawToolWindow_Redo:"Yinele",DrawToolWindow_Undo:"Geri al",DrawToolWindow_Clear:"Temizle",DrawToolWindow_Brush:"Fırça",DrawToolWindow_Width:"Genişlik",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Renk",DrawToolWindow_Eraser:"Silgi",DrawToolWindow_Rectangular:"Dikdörtgen",DrawToolWindow_Ellipse:"Elips",TStuff_BorderWidth:"Sınır Genişliği",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Yer imleri",lastpagebtnHelp:"Son Sayfa",firstpagebtnHelp:"İlk sayfa",homebtnHelp:"Ana sayfaya dön",aboubtnHelp:"Hakkında",screenbtnHelp:"Bu uygulamayı tam ekran modunda aç",helpbtnHelp:"Yardımı göster",searchbtnHelp:"Sayfalardan ara",pagesbtnHelp:"Bu broşürün küçük resmine bir göz atın",bookmarkbtnHelp:"Yer imlerini aç",AnnotmarkbtnHelp:"İçindekileri aç",printbtnHelp:"Broşürü yazdır",soundbtnHelp:"Sesi aç veya kapat",sharebtnHelp:"Email gönder",socialSharebtnHelp:"sosyal paylaşım",zoominbtnHelp:"Yakınlaştır",downloadbtnHelp:"Bu broşürü indirin",pagemodlebtnHelp:"Tek ve çift sayfa modunu değiştir",languagebtnHelp:"Dili Değiştir",annotationbtnHelp:"Açıklama Ekle",addbookmarkbtnHelp:"İmi eklemek",removebookmarkbtnHelp:"Yer imini kaldır",updatebookmarkbtnHelp:"Yer İşaretini Güncelle",btnShoppingCart:"Alışveriş Sepeti",Help_ShoppingCartbtn:"Alışveriş Sepeti",Help_btnNextPage:"Sonraki Sayfa",Help_btnPrePage:"Önceki sayfa",Help_btnAutoFlip:"Otomatik çevirme",Help_StopAutoFlip:"Otomatik çevirmeyi durdur",btnaddbookmark:"Ekle",btndeletebookmark:"Sil",btnupdatebookmark:"Güncelle",frmyourbookmarks:"Yer imleriniz",frmitems:"Öğeler",DownloadFullPublication:"Tam Yayın",DownloadCurrentPage:"Geçerli sayfa",DownloadAttachedFiles:"Ekli dosyalar",lblLink:"Link",btnCopy:"Kopyala Düğmesi",infCopyToClipboard:"Tarayıcınız panoyu desteklemiyor.",restorePage:"Önceki oturumu geri yüklemek ister misiniz?",tmpl_Backgoundsoundon:"Arka Plan Sesi Açık",tmpl_Backgoundsoundoff:"Arka Plan Sesi Kapalı",tmpl_Flipsoundon:"Sesi Aç",tmpl_Flipsoundoff:"Sesi Kapat",Help_PageIndex:"Geçerli sayfa numarası",tmpl_PrintPageRanges:"SAYFA ARALIKLARI",tmpl_PrintPreview:"ÖNİZLEME",btnSelection:"Metin seç",loginNameLabel:"İsim:",btnGotoPage:"	Git",btnSettings:"Ayarlar",soundSettingTitle:"Ses Ayarı",closeFlipSound:"Kapatma Sesi",closeBackgroundSound:"Arka Plan Sesini Kapat",frmShareCaption:"Paylaş",frmShareLinkLabel:"Bağlantı:",frmShareBtnCopy:"kopyala",frmShareItemsGroupCaption:"Sosyal Paylaşım",frmPanelTitle:"Paylaş",frmShareQRcode:"QR kod",TAnnoActionPropertyStuff_GotoPage:"Sayfaya git",btnPageBack:"Geriye",btnPageForward:"İleri",SelectTextCopy:"Seçili Metni Kopyala",selectCopyButton:"Kopyala",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Kapat",ShappingCart_CheckOut:"Ödeme",ShappingCart_Item:"Öğe",ShappingCart_Total:"Toplam",ShappingCart_AddCart:"Sepete ekle",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Çift Sayfa",btnBookStatus:"Book View",checkBoxInsert:"Insert Current Page",lblLast:"Bu son sayfa.",lblFirst:"Bu ilk sayfa.",lblFullscreen:"Tam ekran görüntülemek için tıklayın",lblName:"İsim",lblPassword:"Parola",lblLogin:"Giriş",lblCancel:"Vazgeç",lblNoName:"Kullanıcı adı boş bırakılamaz.",lblNoPassword:"Şifre boş olamaz.",lblNoCorrectLogin:"Lütfen doğru kullanıcı adı ve şifreyi giriniz.",btnVideo:"Video Galerisi",btnSlideShow:"Slayt Gösterisi",pnlSearchInputInvalid:"(Minimum istek uzunluğu 3 semboldür)",btnDragToMove:"Fareyi sürükleyerek hareket ettirin",btnPositionToMove:"Fare konumuna göre hareket ettir",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Kopyala",lblAddToPage:"sayfa ekle",lblPage:"Sayfa",lblTitle:"Başlık",lblEdit:"Düzelt",lblDelete:"Sil",lblRemoveAll:"Hepsini kaldır",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Yakınlaştırmak için çift tıklayın.",frmShareCaption:"Paylaş",frmShareLabel:"Paylaş",frmShareInfo:"Bu yayını sosyal ağlarda kolayca paylaşabilirsiniz. Aşağıdaki uygun butona tıklamanız yeterlidir.",frminsertLabel:"Siteye Ekle",frminsertInfo:"Bu yayını web sitenize yerleştirmek için aşağıdaki kodu kullanın.",btnQRCode:"QR kodunu taramak için tıklayın",btnRotateLeft:"Sola dön",btnRotateRight:"Sağa Döndür",lblSelectMode:"Görünüm modunu seçin lütfen.",frmDownloadPreview:"Ön izleme",frmDownload:"İndir",frmHowToUse:"Nasıl kullanılır",lblHelpPage1:"Kitap sayfasını çevirmek için parmağınızı hareket ettirin.",lblHelpPage2:"Hareketi kullanarak yakınlaştırın veya sayfaya çift tıklayın.",lblHelpPage3:"Firmanın resmi web sitesine ulaşmak için logoya tıklayınız.",lblHelpPage4:"Yer imleri ekleyin, arama işlevini kullanın ve kitabı otomatik olarak çevirin.",lblHelpPage5:"Mobil cihazlarda yatay ve dikey görünümü değiştirin.",TTActionQuiz_PlayAgain:"Tekrar oynamak ister misin",TTActionQuiz_Ration:"Oranınız",frmTelephone:"Telefon listesi",btnDialing:"Dialing",lblSelectMessage:"Lütfen metin kutusundaki metin içeriğini kopyalayın",btnSelectText:"Metin seç",btnNote:"Ek açıklama",btnPhoneNumber:"Telefon",btnWeCharShare:"WeChat Paylaşımı",btnMagnifierIn:"Büyüteç",btnMagnifierOut:"Büyüteç Küçültme",frmShareSmallProgram:"küçükProgram",btnMagnifier:"Büyüteç",frmPrintPrintLimitFailed:"Maalesef sayfaları yazdıramazsınız.",infNotSupportHtml5:"HTML5, mevcut web tarayıcınız tarafından desteklenmiyor, lütfen kitabı en son sürüm web tarayıcısı ile okuyun. Burada Chrome ile okumanızı öneririz.",btnReport:"Bildiri",btnDoubleSinglePage:"Sayfa değiştirme",btnDownloadPosterPrompt:"Posteri indirmek için tıklayın",infLongPressToSavePoster:"Posteri kaydetmek için mobil terminali basılı tutun",infLongPressToIndentify:"QR kodunu tanımlamak için uzun basın",infScanCodeToView:"Okumak için kodu tarayın",frmaboutcaption:"İletişim",frmaboutDESCRIPTION:"Açıklama",frmaboutAUTHOR:"Yazar",frmaboutADDRESS:"Adres",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobil",infDeleteNote:"Notu silmek istiyor musunuz?",proFullScreenWarn:"Mevcut tarayıcı tam ekranı desteklemiyor, lütfen en iyi sonuçlar için Chrome'u kullanın",btnBack:"Sırt",frmVideoListTitle:"Video list",frmVideoTitle:"Video",lblConfirm:"Onay"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}