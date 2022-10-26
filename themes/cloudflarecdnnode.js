    jQuery(document).ready(function($) {
$.ajax({
    url: "/cdn-cgi/trace",
    success: function(data, status) {
        str = data.match(/(colo=?)(\S*)/)[2];  
        $('#cdnresult').append(str);
    },
    error: function(){
        str = "unknow";
        $('#cdnresult').append(str); 
    }
});  
});
