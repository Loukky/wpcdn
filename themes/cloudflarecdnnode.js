jQuery(document).ready(function(){
$.get("/cdn-cgi/trace",function(data){
//sip = data.match(/(ip=+)(\S*)/)[2];  
str = data.match(/(colo=?)(\S*)/)[2];  
//$("#cdnresult").append("您的IP:"+sip);
$("#cdnresult").append(str);
});
});
