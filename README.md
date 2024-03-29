# Mekan32
Mekan32 projesi MEAN yığını kullanarak geliştirilen bir projedir. Uygulama, Isparta bazlı çalışacak olup, kullanıcının konumuna belirlenen uzaklıktaki restorant, kafe vb. yerleri listeler.

## Kullanılan Teknolojiler:
* Orta katman: ExpressJS
* Sunucu platformu: NodeJS
* Veritabanı: MongoDB
* Bulut Veritabanı: MongoDB Cloud
* HTML Şablon Motoru: Pug
* CSS Çatısı: Bootstrap
* Programlama Dili: Javascript
* Sürüm Kontrolü: Git
* Bulut Uygulama Platformu: Heroku
* Haberleşme: REST API
* Arayüz Çatısı: Angular
* API Testi: Postman

## Uygulamada Yer Alan Özellikler:
* Anasayfada konum civarındaki mekanların listelenmesi.
* Herhangi bir mekanın üzerine tıklandığında mekan ile ilgili detay sayfasının gösterilmesi. Bu sayfada mekanın puanı, adresi, çalışma saatleri, sunduğu imkanlar, harita üzerindeki yeri, kullanıcı yorumları gösterilecek.
* Kullanıcılar mekana yorum yapabilecek ve puan verebilecek.
* İlerleyen aşamalarda yönetici sayfası eklenebilir. Mekan ekleme, silme, güncelleme, kullanıcı girişi, kayıt olma özellikleri dahil edilebilir.
* Tasarım deseni olarak MVC benimsenecek.
* Altyapıda haberleşme REST API ile olacak. REST API'yi kendimiz yazacağız.

## Şu Ana Kadar Yapılanlar:
* mekan32-1 dallanmasında View katmanı hazırlandı. Arayüz tasarlandı. Arayüze statik veriler eklenerek sayfalar şekillendirildi.
* meakn32-2 dallanmasında veriler arayüzden ayrıştırıldı, dinamik bir yapı elde edildi. Veriler Controller katmanına aktarıldı. Arayüzdeki bilgiler değişkenler aracılığı ile gösterildi.
* mekan-32-3 dallanmasında model katmanı eklendi, mongodb veritabanı bağlantısı için gerekli kodlar yazıldı, mongoose şemaları tanımlandı.
* mekan-32-4 dallanmasında REST API'ye giriş yapıldı ve get metotları eklendi. API uygulamadan ayrı bir klasör içinde gerçekleştirilecek. Model katmanı API klasörüne taşındı.

