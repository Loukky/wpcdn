jQuery(document).ready(function($){
    function vfhkyipquery(){
        $(".vfhkyipquery").each(function(){
            var c=$.trim(atob($(this).attr("data-ip"))),t=$(this),i="";
            $.getScript("https://ip.zxinc.org/api.php?type=js&ip="+c,function(){
                if(returnIpData.code==0){
                    var h=returnIpData.data.location;
                    i+=h;
                   
                }
                else{
                    i="未知归属地";
                }
                t.replaceWith('<span class="ipinfo" style="font-family:system-ui,roboto,sans-serif,serif">'+i+"</span>");
            })
        })
    }
    $(function(){vfhkyipquery()})
});
