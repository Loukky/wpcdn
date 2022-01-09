jQuery(document).ready(function($) {
  $.get("https://geoip.loukky.com/myip.php",
function(text){
      var ip = (text);
$.ajax({
    url: 'https://ipwhois.app/json/'+ ip +'?objects=country,city,isp,ip,region&lang=zh-CN',
    async: true,
    type: "GET",
    success: function(data, status, xhr ,json) {
        $('#userip-c').html(data.ip);
        $('#userlocation-c').html(`${data.country} , ${data.region} , ${data.isp}`);
        if(data.city) $('#userlocation-c').html(`${data.country} , ${data.region} , ${data.city} , ${data.isp}`);
        else $("#userip").css("display", "none");
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
