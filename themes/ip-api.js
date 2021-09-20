jQuery(document).ready(function($) {

$.ajax({
    url: "https://ipwhois.app/json/",
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userip-c').html(ip);
        $('#userlocation-c').html(`${region} , ${country} , ${isp}`);
        
        if(data.location.city) $('#userlocation-c').html(`${city} , ${region} , ${country} , ${isp}`);
        else $('#userlocation-c').html(`${region} , ${country} , ${isp}`);
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
});
