jQuery(document).ready(function($) {

$.ajax({
    url: "http://ip-api.com/json/",
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userip-c').html(query);
        $('#userlocation-c').html(`${regionName} , ${country} , ${isp}`);
        
        if(data.location.city) $('#userlocation-c').html(`${city} , ${regionName} , ${country} , ${isp}`);
        else $('#userlocation-c').html(`${regionName} , ${country} , ${isp}`);
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
