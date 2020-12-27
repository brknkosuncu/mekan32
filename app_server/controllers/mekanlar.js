
const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste',

  {
    'baslik': 'Anasayfa',
    'sayfaBaslik':{
    	'siteAd':'Mekan32',
    	'aciklama':'Isparta civarındaki mekanları keşfedin'
    },
    'footer':'Berkan Koşuncu 2020',
        
        'mekanlar':[
    {
      'ad':'Starbucks',
      'adres':'Centrum Garden AVM',
      'puan':3,
      'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
      'mesafe':'10km'
    },
      {
      'ad':'Gloria Jeans',
      'adres':'SDÜ Doğu Kampüsü',
      'puan':2,
      'imkanlar':['Kahve','Çay','Pasta'],
      'mesafe':'1km'
    },
      {
      'ad':'Çay ve Ötesi',
      'adres':'Kafeler Caddesi',
      'puan':4,
      'imkanlar':['Çay','Dünya Kahveleri','Pasta'],
      'mesafe':'6km'
    },
          {
      'ad':'Özsüt',
      'adres':'İyaş AVM',
      'puan':3,
      'imkanlar':['Kahve','Pasta','Kek'],
      'mesafe':'4km'
    },
          {
      'ad':'Yemen Kahvesi',
      'adres':'Kafeler Caddesi',
      'puan':2,
      'imkanlar':['Çay','Kek','Pasta'],
      'mesafe':'6km'
    },
    ]
  }
    )

  ;
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekan-detay',
   { 
   'baslik': 'Mekan Bilgisi',
   'sayfaBaslik':'Starbucks',
   'footer':'Berkan Koşuncu 2020',
   'mekanBilgisi':{
   	 'ad':'Starbucks',
   	 'adres':'Centrum Garden AVM',
   	 'puan':3,
   	 'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   	 'koordinatlar':{
   	 	 'enlem':'37.781885',
   	 	 'boylam':'30.566034'
   	 },  	 
   	 'saatler':[
   	   {
   	   	 'gunler':'Pazartesi-Cuma',
   	   	 'acilis':'7:00',
   	   	 'kapanis':'23:00',
   	   	 'kapali':false
   	   },
   	   {
   	   	 'gunler':'Cumartesi',
   	   	 'acilis':'9:00',
   	   	 'kapanis':'22:00',
   	   	 'kapali':false
   	   },
   	   {
   	   	 'gunler':'Pazar',
   	   	 'kapali':true
   	   }
   	 ],

   	 'yorumlar':[
   	   {
   	   	 'yorumYapan':'Ali',
   	   	 'puan':4,
   	   	 'tarih':'27.11.2020',
   	   	 'yorumMetni':'Kahveleri güzel.'
   	   },
   	   {
   	   	 'yorumYapan':'Veli',
   	   	 'puan':2,
   	   	 'tarih':'21.10.2020',
   	   	 'yorumMetni':'Kahveleri kötü.'
   	   }
   	 ]

   }
  });
}

const yorumEkle = function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
	anaSayfa,
	mekanBilgisi,
	yorumEkle
}
