jQuery(document).ready(function($){
    function vfhkyconlocquery(){
        $(".vfhkyconlocquery").each(function(){
            var c=$.trim(atob($(this).attr("loc-ip"))),t=$(this),i="",m="";
           // $.ajaxSetup({cache:true});
            $.getScript("https://geoip.loukky.com/ip2location/?js=1&ip="+c,function(){
                if(returnIpData.code==0){
                    var h=returnIpData.data.code2;
                    var n=returnIpData.data.country;
                    i+=h;
                    m+=n;
                   
                }
                else{
                    i="zz";
                    m="unknow";
                }
                // t.replaceWith('<span class="ipinfo" style="font-family:roboto,sans-serif,serif">'+i+"</span>");
                t.replaceWith('<span class="country-flag"><img src="data:image/svg+xml,%3Csvg width=&apos;20&apos; height=&apos;20&apos; xmlns=&apos;http://www.w3.org/2000/svg&apos;%3E%3C/svg%3E" data-lazy-src="https://fastly.jsdelivr.net/gh/Loukky/wpcdn/themes/show-useragent/flags/'+i+'.png" title="'+m+'" alt="'+m+'"></span>' );
            })
        })
    }
    $(function(){vfhkyconlocquery()})
});
