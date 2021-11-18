jQuery(document).ready(function($) {
  //$.get("https://api.myip.la/?callback=?",  
  //$.get("https://geoip.loukky.com/myip.php",
	$.get("https://cfip.ly123loukky.workers.dev/",
function(text){
      var ip = (text);
$.ajax({
    url: 'https://ipwhois.app/json/'+ ip +'?objects=country,city,isp,ip,region',
    //url: 'https://ipapi.co/' + ip + '/json/',
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userip-c').html(data.ip);
        $('#userlocation-c').html(`${data.region} , ${data.country} , ${data.isp}`);
        
        if(data.city) $('#userlocation-c').html(`${data.city} , ${data.region} , ${data.country} , ${data.isp}`);
        else $('#userlocation-c').html(`${data.region} , ${data.country} , ${data.isp}`);
        $('#loading-tab2').css("display", "none");
        $('#tab2-s').css("display", "inline-block");
    },
    error: function(xhr, status, error) {
        $("#userip").css("display", "none");
        $('#userlocation').css("display", "none");
        $('#userisp').css("display", "none");
        $('#loading-tab2').css("display", "none");
        $('#tab2-s').css("display", "inline-block");
    }
});
      }
	   );
});
