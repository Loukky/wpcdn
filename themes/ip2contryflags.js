jQuery(document).ready(function($){
    function vfhkyconlocquery(){
        $(".vfhkyconlocquery").each(function(){
            var c=$.trim(atob($(this).attr("loc-ip"))),t=$(this),i="",m="";
            $.ajaxSetup({cache:true});
            $.getScript("https://geoip.loukky.com/?js=1&ip="+c,function(){
                if(returnIpData.code==0){
                    var h=returnIpData.data.code2;
                    var n=returnIpData.data.name;
                    i+=h;
                    m+=n;
                   
                }
                else{
                    i="zz";
                    m="unknow";
                }
                // t.replaceWith('<span class="ipinfo" style="font-family:roboto,sans-serif,serif">'+i+"</span>");
                t.replaceWith('<span class="country-flag"><img src="data:image/svg+xml,%3Csvg%20xmlns=&apos;http://www.w3.org/2000/svg&apos;%20viewBox=&apos;0%200%2048%2048&apos;%3E%3C/svg%3E" class="avatar avatar-48 photo" height="48" width="48" data-lazy-src="https://cdn.jsdelivr.net/gh/Loukky/wpcdn/themes/show-useragent/flags/'+i+'.png" title="'+m+'" alt="'+m+'"></span>' );
            })
        })
    }
    $(function(){vfhkyconlocquery()})
});
