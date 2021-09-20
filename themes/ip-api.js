jQuery(document).ready(function($) {

$.ajax({
    url: "https://ipwhois.app/json/",
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
});
