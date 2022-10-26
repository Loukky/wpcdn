$(document).ready(function(){
$.get("/cdn-cgi/trace",function(data){
//sip = data.match(/(ip=+)(\S*)/)[2];  
str = data.match(/(colo=?)(\S*)/)[2];  
//$("#result").append("您的IP:"+sip);
$("#result").append(str);
});
});
