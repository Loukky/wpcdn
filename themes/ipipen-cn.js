jQuery(document).ready(function($) {

$.ajax({
    url: "https://api.myip.la/cn?json",
    async: true,
    type: "GET",
    success: function(data, status, xhr) {
        $('#userip-c').html(data.ip);
        $('#userlocation-c').html(`${data.location.country_name} , ${data.location.province}`);
        if(data.location.city) $('#userlocation-c').html(`${data.location.country_name} , ${data.location.province} , ${data.location.city}`);
        else $('#userlocation-c').html(`${data.location.country_name} , ${data.location.province}`);
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
