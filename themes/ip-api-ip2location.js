jQuery(document).ready(function($) {
  $.get("https://loukky.com/files/ip/",
function(text){
      var ip = (text);
$.ajax({
    url: 'https://geoip.loukky.com/ip2location/?ip='+ip,
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userip-c').html(data.ip);
        $('#userlocation-c').html(`${data.city} , ${data.country}`);
        if(data.province) $('#userlocation-c').html(`${data.city} , ${data.province} , ${data.country}`);
        else 
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
