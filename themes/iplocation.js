jQuery(document).ready(function($){
    function vfhkyipquery(){
        $(".vfhkyipquery").each(function(){
            var c=$.trim($(this).attr("data-ip")),t=$(this),i="";
            $.getScript("https://ip.zxinc.org/api.php?type=js&ip="+c,function(){
                if(remote_ip_info.ret==1){
                    var h=remote_ip_info.data.ip.location;
                    i+=h;
                   
                }
                else{
                    i="未知IP地址";
                }
                t.replaceWith('<span class="ipinfo">'+i+"</span>");
            })
        })
    }
    $(function(){vfhkyipquery()})
});
