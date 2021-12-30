jQuery(document).ready(function($){
    function userremotoip(){
        $(".userremotoip").each(function(){
            var c=$.trim(atob($(this).attr("remoto-ip"))),t=$(this),i="",m="";
            $.getScript("https://ip.zxinc.org/api.php?type=js&ip="+c,function(){
                if(returnIpData.code===0){
                    var i=returnIpData.data.location;
					var m=returnIpData.data.myip;
                //  i+=h;
				//	m+=n;
                   
                }
                else{
                    i="未知归属地";
					m="未知IP";
                }
                t.replaceWith('<span>回源IP：<code>'+m+'</code> 归属于<code>'+i+'</code></span>');
            })
        })
    }
    $(function(){userremotoip()})
});
