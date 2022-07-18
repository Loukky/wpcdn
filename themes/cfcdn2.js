jQuery(document).ready(function($) {

$.ajax({
    url: "/cdn-cgi/trace",
    success: function(data, status) {
         let areas = {"TNR":"Antananarivo, Madagascar","CPT":"Cape Town, South Africa","CMN":"Casablanca, Morocco","DKR":"Dakar, Senegal","DAR":"Dar Es Salaam, Tanzania","JIB":"Djibouti City, Djibouti","DUR":"Durban, South Africa","JNB":"Johannesburg, South Africa","KGL":"Kigali, Rwanda","LOS":"Lagos, Nigeria","LAD":"Luanda, Angola","MPM":"Maputo, MZ","MBA":"Mombasa, Kenya","ROB":"Monrovia, Liberia","NBO":"Nairobi, Kenya","MRU":"Port Louis, Mauritius","RUN":"Réunion, France","BLR":"Bangalore, India","BKK":"Bangkok, Thailand","BWN":"Bandar Seri Begawan, Brunei","CEB":"Cebu, Philippines","CTU":"Chengdu, China","MAA":"Chennai, India","CGP":"Chittagong, Bangladesh","CKG":"Chongqing, China","CMB":"Colombo, Sri Lanka","DAC":"Dhaka, Bangladesh","SZX":"Dongguan, China","FUO":"Foshan, China","FOC":"Fuzhou, China","CAN":"Guangzhou, China","HGH":"Jinhua, China","HAN":"Hanoi, Vietnam","HNY":"Hengyang, China","SGN":"Ho Chi Minh City, Vietnam","HKG":"Hong Kong, China","HYD":"Hyderabad, India","ISB":"Islamabad, Pakistan","CGK":"Jakarta, Indonesia","TNA":"Jinan, China","JHB":"Johor Bahru, Malaysia","KHI":"Karachi, Pakistan","KTM":"Kathmandu, Nepal","CCU":"Kolkata, India","KUL":"Kuala Lumpur, Malaysia","LHE":"Lahore, Pakistan","NAY":"Langfang, China","LYA":"Luoyang, China","MFM":"Macau","MLE":"Malé, Maldives","MNL":"Manila, Philippines","BOM":"Mumbai, India","NAG":"Nagpur, India","NNG":"Nanning, China","DEL":"New Delhi, India","NBG":"Ningbo, China","KIX":"Osaka, Japan","PNH":"Phnom Penh, Cambodia","TAO":"Qingdao, China","ICN":"Seoul, South Korea","SHA":"Shanghai, China","SHE":"Shenyang, China","SJW":"Hengshui, China","SIN":"Singapore, Singapore","SZV":"Suzhou, China","TPE":"Taipei","PBH":"Thimphu, Bhutan","TSN":"Tianjin, China","NRT":"Tokyo, Japan","ULN":"Ulaanbaatar, Mongolia","VTE":"Vientiane, Laos","WUH":"Wuhan, China","WUX":"Wuxi, China","XIY":"Baoji, China","RGN":"Yangon, Myanmar","EVN":"Yerevan, Armenia","CGO":"Zhengzhou, China","CSX":"Changsha, China","AMS":"Amsterdam, Netherlands","ATH":"Athens, Greece","BCN":"Barcelona, Spain","BEG":"Belgrade, Serbia","TXL":"Berlin, Germany","BRU":"Brussels, Belgium","OTP":"Bucharest, Romania","BUD":"Budapest, Hungary","KIV":"Chișinău, Moldova","CPH":"Copenhagen, Denmark","ORK":"Cork, Ireland","DUB":"Dublin, Ireland","DUS":"Düsseldorf, Germany","EDI":"Edinburgh, United Kingdom","FRA":"Frankfurt, Germany","GVA":"Geneva, Switzerland","GOT":"Gothenburg, Sweden","HAM":"Hamburg, Germany","HEL":"Helsinki, Finland","IST":"Istanbul, Turkey","KBP":"Kyiv, Ukraine","LIS":"Lisbon, Portugal","LHR":"London, United Kingdom","LUX":"Luxembourg City, Luxembourg","MAD":"Madrid, Spain","MAN":"Manchester, United Kingdom","MRS":"Marseille, France","MXP":"Milan, Italy","DME":"Moscow, Russia","MUC":"Munich, Germany","LCA":"Nicosia, Cyprus","OSL":"Oslo, Norway","CDG":"Paris, France","PRG":"Prague, Czech Republic","KEF":"Reykjavík, Iceland","RIX":"Riga, Latvia","FCO":"Rome, Italy","LED":"Saint Petersburg, Russia","SOF":"Sofia, Bulgaria","ARN":"Stockholm, Sweden","TLL":"Tallinn, Estonia","TBS":"Tbilisi, Georgia","SKG":"Thessaloniki, Greece","VIE":"Vienna, Austria","VNO":"Vilnius, Lithuania","WAW":"Warsaw, Poland","ZAG":"Zagreb, Croatia","ZRH":"Zürich, Switzerland","ARI":"Arica, Chile","ASU":"Asunción, Paraguay","BOG":"Bogotá, Colombia","EZE":"Buenos Aires, Argentina","CWB":"Curitiba, Brazil","FOR":"Fortaleza, Brazil","GUA":"Guatemala City, Guatemala","LIM":"Lima, Peru","MDE":"Medellín, Colombia","PTY":"Panama City, Panama","PBM":"Paramaribo, Suriname","POA":"Porto Alegre, Brazil","UIO":"Quito, Ecuador","GIG":"Rio de Janeiro, Brazil","SSA":"Salvador, Brazil","GRU":"São Paulo, Brazil","SJO":"San José, Costa Rica","SCL":"Santiago, Chile","CUR":"Willemstad, Curaçao","VCP":"Campinas, Brazil","GND":"St. George's, Grenada","TGU":"Tegucigalpa, Honduras","AMM":"Amman, Jordan","BGW":"Baghdad, Iraq","GYD":"Baku, Azerbaijan","BEY":"Beirut, Lebanon","DOH":"Doha, Qatar","DXB":"Dubai, United Arab Emirates","KWI":"Kuwait City, Kuwait","BAH":"Manama, Bahrain","MCT":"Muscat, Oman","ZDM":"Ramallah","RUH":"Riyadh, Saudi Arabia","TLV":"Tel Aviv, Israel","IAD":"Ashburn, VA, United States","ATL":"Atlanta, GA, United States","BOS":"Boston, MA, United States","BUF":"Buffalo, NY, United States","YYC":"Calgary, AB, Canada","CLT":"Charlotte, NC, United States","ORD":"Chicago, IL, United States","CMH":"Columbus, OH, United States","DFW":"Dallas, TX, United States","DEN":"Denver, CO, United States","DTW":"Detroit, MI, United States","HNL":"Honolulu, HI, United States","IAH":"Houston, TX, United States","IND":"Indianapolis, IN, United States","JAX":"Jacksonville, FL, United States","MCI":"Kansas City, MO, United States","LAS":"Las Vegas, NV, United States","LAX":"Los Angeles, CA, United States","MFE":"McAllen, TX, United States","MEM":"Memphis, TN, United States","MEX":"Mexico City, Mexico","MIA":"Miami, FL, United States","MSP":"Minneapolis, MN, United States","MGM":"Montgomery, AL, United States","YUL":"Montréal, QC, Canada","BNA":"Nashville, TN, United States","EWR":"Newark, NJ, United States","ORF":"Norfolk, VA, United States","OMA":"Omaha, NE, United States","PHL":"Philadelphia, United States","PHX":"Phoenix, AZ, United States","PIT":"Pittsburgh, PA, United States","PAP":"Port-Au-Prince, Haiti","PDX":"Portland, OR, United States","QRO":"Queretaro, MX, Mexico","RIC":"Richmond, Virginia","SMF":"Sacramento, CA, United States","SLC":"Salt Lake City, UT, United States","SAN":"San Diego, CA, United States","SJC":"San Jose, CA, United States","YXE":"Saskatoon, SK, Canada","SEA":"Seattle, WA, United States","STL":"St. Louis, MO, United States","TPA":"Tampa, FL, United States","YYZ":"Toronto, ON, Canada","YVR":"Vancouver, BC, Canada","TLH":"Tallahassee, FL, United States","YWG":"Winnipeg, MB, Canada","ADL":"Adelaide, SA, Australia","AKL":"Auckland, New Zealand","BNE":"Brisbane, QLD, Australia","MEL":"Melbourne, VIC, Australia","NOU":"Noumea, New caledonia","PER":"Perth, WA, Australia","SYD":"Sydney, NSW, Australia","JSR":"Jashore, Bangladesh","TUN":"Tunis, Tunisia","PMO":"Palermo, Italy","CNF":"Belo Horizonte, Brazil","BSB":"Brasilia, Brazil","CFC":"Caçador, Brazil","FLN":"Florianopolis, Brazil","GYE":"Guayaquil, Ecuador","RAO":"Ribeirao Preto, Brazil","CBR":"Canberra, ACT, Australia","URT":"Surat Thani, Thailand","DMM":"Dammam, Saudi Arabia","QWJ":"Americana, Brazil","BEL":"Belém, Brazil","BNU":"Blumenau, Brazil","GYN":"Goiânia, Brazil","ITJ":"Itajaí, Brazil","SJP":"São José do Rio Preto, Brazil","SOD":"Sorocaba, Brazil","SVX":"Yekaterinburg, Russia","ALA":"Almaty, Kazakhstan","KJA":"Krasnoyarsk, Russia","ALG":"Algiers, Algeria","HRE":"Harare, Zimbabwe","MAO":"Manaus, Brazil","MSQ":"Minsk, Belarus","PAT":"Patna, India","EBL":"Erbil, Iraq","JDO":"Juazeiro do Norte, Brazil","AQG":"Anqing, China","CGD":"Changde, China","CZX":"Changzhou, China","DLC":"Dalian, China","KWE":"Guiyang, China","HAK":"Haikou, China","HET":"Hohhot, China","HFE":"Huainan, China","PKX":"Langfang, China","LHW":"Lanzhou, China","BPE":"Qinhuangdao, China","JJN":"Quanzhou, China","JUZ":"Quzhou, China","WDS":"Shiyan, China","NKG":"Suqian, China","HYN":"Taizhou, China","XNN":"Xining, China","KHN":"Xinyu, China","YIH":"Yichang, China","HFA":"Haifa, Israel","JOI":"Joinville, Brazil","UDI":"Uberlândia, Brazil","ACC":"Accra, Ghana","TAS":"Tashkent, Uzbekistan","CNX":"Chiang Mai, Thailand","LLK":"Astara, Azerbaijan","BBI":"Bhubaneswar, India","KNU":"Kanpur, India","KHV":"Khabarovsk, Russia","NQN":"Neuquén, Argentina","AMD":"Ahmedabad, India","YOW":"Ottawa, Canada","IXC":"Chandigarh, India","JOG":"Yogyakarta, Indonesia","GUM":"Hagatna, Guam","BSR":"Basra, Iraq","NJF":"Najaf, Iraq","XNH":"Nasiriyah, Iraq","COR":"Córdoba, Argentina","GEO":"Georgetown, Guyana","GBE":"Gaborone, Botswana","HBA":"Hobart, Australia","JED":"Jeddah, Saudi Arabia","CGB":"Cuiabá, Brazil","MDL":"Mandalay, Myanmar"};
        let area  = data.split("colo=")[1].split("\n")[0];
        //endTime = new Date().getTime();
        $('#ftinfo').prepend(`<code>${areas[area]}</code>`);
    },
    error: function(){
        //endTime = new Date().getTime();
        $('#ftinfo').append(`  `); 
    }
});  
});
