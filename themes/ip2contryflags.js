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
                t.replaceWith('<span class="country-flag"><img calss="lazy" data-src="https://cdn.jsdelivr.net/gh/Loukky/wpcdn/themes/show-useragent/flags/'+i+'.png" title="'+m+'" alt="'+m+'"></span>' );
            })
        })
    }
    $(function(){vfhkyconlocquery()})
});
