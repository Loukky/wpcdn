jQuery(document).ready(function($) {

$.ajax({
    url: "https://api.myip.la/en?json",
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userip-c').html(data.ip);
        $('#userlocation-c').html(`${data.location.province} , ${data.location.country_name}`);
        
        if(data.location.city) $('#userlocation-c').html(`${data.location.city} , ${data.location.province} , ${data.location.country_name}`);
        else $('#userlocation-c').css("display", "none");
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
