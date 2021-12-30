jQuery(document).ready(function($) {
	  var ip = "<?php echo $prip;?>";
$.ajax({
    url: 'https://ip.zxinc.org/api.php?type=json&ip='+ip,
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userremotoip-c').html(data.myip);
        $('#userremotolocation-c').html(`${data.data.location}`);
        //if(data.city) $('#userlocation-c').html(`${data.city} , ${data.region} , ${data.country} , ${data.isp}`);
        //else $("#userremotoip").css("display", "none");
        $('#loading-tab3').css("display", "none");
        $('#tab3-s').css("display", "inline-block");
    },
    error: function(xhr, status, error) {
        $("#userremotoip").css("display", "none");
        $('#userremotolocation').css("display", "none");
        $('#userremotoisp').css("display", "none");
        $('#loading-tab3').css("display", "none");
        $('#tab3-s').css("display", "inline-block");
    }
});
  }
 );
