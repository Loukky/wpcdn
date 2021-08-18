jQuery(document).ready(function($){
    function vfhkyipquery(){
        $(".vfhkyipquery").each(function(){
            var c=$.trim($(this).attr("data-ip")),t=$(this),i="";
            $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip="+c,function(){
                if(remote_ip_info.ret==1){
                    var h=remote_ip_info.country,f=remote_ip_info.province,e=remote_ip_info.city,g=" "+remote_ip_info.isp;
                    i+=h;
                    i+=f==e?e:f+e;
                    i+=g;
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
