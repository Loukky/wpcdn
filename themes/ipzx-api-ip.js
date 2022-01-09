jQuery(document).ready(function($) {
  $.get("https://geoip.loukky.com/myip.php",
function(text){
      var ip = (text);
$.ajax({
    url: 'https://ip.zxinc.org/api.php?type=json&ip='+ip,
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userip-c').html(data.data.myip);
        $('#userlocation-c').html(`${data.data.location}`);
        if(data.data.myip); //$('#userlocation-c').html(`${data.country} , ${data.region} , ${data.city} , ${data.isp}`);
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
