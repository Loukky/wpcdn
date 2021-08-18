jQuery(document).ready(function($){
    function vfhkyipquery(){
        $(".vfhkyipquery").each(function(){
            var c=$.trim($(this).attr("data-ip")),t=$(this),i="";
            $.getScript("https://ip.zxinc.org/api.php?type=js&ip="+c,function(){
                if(returnIpData.code==0){
                    var h=returnIpData.data.location;
                    i+=h;
                   
                }
                else{
                    i="未知归属地";
                }
                t.replaceWith('<span class="ipinfo" style="font-family:noto serif sc,noto sans sc,roboto,serif">'+i+"</span>");
            })
        })
    }
    $(function(){vfhkyipquery()})
});
