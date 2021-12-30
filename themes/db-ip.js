jQuery(document).ready(function($) {
  $.get("https://geoip.loukky.com/myip.php",
function(text){
      var ip = (text);
$.ajax({
    url: 'https://api.db-ip.com/v2/free/'+ip,
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userip-c').html(data.ipAddress);
        $('#userlocation-c').html(`${data.countryName} , ${data.stateProv} , ${data.isp}`);
        if(data.city) $('#userlocation-c').html(`${data.countryName} , ${data.stateProv} , ${data.city} , ${data.isp}`);
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
