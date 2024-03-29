// 选择按钮
// $(document).ready(function(){
// 	//获取默认上传方式
// 	storage = $('#storage input[name="storage"]:checked ').val();
// 	$("#upurl").text(storage);
// 	//用户自行选择上传方式
// 	$("#storage").click(function(){
// 		storage = $('#storage input[name="storage"]:checked ').val();
// 		$("#upurl").text(storage);
// 	});
// });
// 这个东西没值，你拿不到
layui.use(['upload','form','element','layer','flow'], function(){
		var upload = layui.upload;
        var form = layui.form;
        var element = layui.element;
        var layer   = layui.layer;
        var storage = $('#storage input[name="storage"]:checked ').val();
		//图片懒加载
		var flow = layui.flow;
		flow.lazyimg({
            elem:'#found img ,#random img'
        });
        //图片查看器
        layer.photos({
            photos: '#found'
            ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
			,closeBtn:2
        });
        layer.photos({
            photos: '#lightgallery'
            ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
			,closeBtn:1
        });
        
		//执行实例
		var uploadInst = upload.render({
            elem: '#upimg' //绑定元素
            //选择的时候触发
			,choose: function(obj){ //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                //uploadListIns.config.data.storage  = storage;
                storage = $('#storage input[name="storage"]:checked').val();
                this.url = '/upload/' + storage;
                $(".progress").hide();
                //console.log(this.url);
            }
            ,accept:'file'
            ,acceptMime:'image/webp,image/jpeg,image/pjpeg,image/bmp,image/png,image/x-png,image/gif'
            ,exts: 'jpg|jpeg|png|gif|bmp|webp'
            ,size:20480
            ,before: function(obj){ //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                layer.load(); //上传loading
            }
            ,url: '/upload/' + storage //上传接口
			,done: function(res){
                //console.log(res);
                //上传完毕回调
                //如果上传失败
                if(res.code == 0){
                    layer.open({
                        title: '温馨提示'
                        ,content: res.msg
                    });  
                    layer.closeAll('loading');  
                }
                else if(res.code == 200){
                    layer.closeAll('loading'); 
                    $("#img-thumb a").attr('href','/img/' + res.imgid);
                    $("#img-thumb img").attr('src',res.thumbnail_url);
                    $("#siteurl").val("https://imgur.loukky.com/img/"+res.imgid);
                    $("#url").val(res.url);
                    $("#html").val("<img src = '" + res.url + "' />");
                    $("#markdown").val("!["+res.client_name+"](" + res.url + ")");
                    $("#bbcode").val("[img]" + res.url + "[/img]");
                    $("#dlink").val(res.delete);
					 $("#token").val(res.token);
                    $("#imgshow").show();
                    //对图片进行鉴黄识别
                    //先获取鉴黄开关
                    porn_switch = $("#porn_switch").val();
                    if( porn_switch == 'on' ) {
                        identify(res.id);
                    }
                }
			}
			,error: function(){
                //请求异常回调
                layer.closeAll('loading');
			}
        });
        //单文件上传END
        //多文件上传开始
        upload.render({
            elem: '#multiple'
            ,choose: function(obj){ //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                //uploadListIns.config.data.storage  = storage;
                storage = $('#storage input[name="storage"]:checked').val();
                this.url = '/upload/' + storage;
                //隐藏进度条
                $(".progress").hide();
                //console.log(this.url);
            }
            ,url: '/upload/' + storage
            ,accept:'file'
            ,acceptMime:'image/webp,image/jpeg,image/pjpeg,image/bmp,image/png,image/x-png,image/gif'
            ,exts: 'jpg|jpeg|png|gif|bmp|webp'
            ,multiple:true
            ,size:20480
            ,number:10     //可同时上传数量
            ,before: function(obj){ //上传之前的回调
                //清空显示区域
                $("#re-siteurl pre").empty();
                $("#re-url pre").empty();
                $("#re-html pre").empty();
                $("#re-md pre").empty();
                $("#re-bbc pre").empty();
                $("#re-dlink pre").empty();
				$("#re-token pre").empty();
                layer.load(); //上传loading
                n = 0;
            }
            ,allDone: function(obj){ //当文件全部被提交后，才触发
                //显示上传结果
                $("#multiple-re").show();
                //得到文件总数
                layer.closeAll('loading'); //关闭loading
            }
            ,done: function(res, index, upload){ //上传后的回调
                //n = n + 1;
            
                if(res.code == 200){
                    //得到百分比
                    //var col = (n / total) * 100;
                    multiple(res.url,res.delete,res.token,res.imgid,res.client_name);
                    //对图片进行鉴黄识别
                    //先获取鉴黄开关
                    porn_switch = $("#porn_switch").val();
                    if( porn_switch == 'on' ) {
                        identify(res.id);
                    }
                    //element.progress('up-status', col + '%');
                }
                else if(res.code == 0){
                    layer.msg(res.msg);
                    return false;
                }
            } 
            ,error: function(index, upload){
                layer.closeAll('loading'); //关闭loading
            }
        })
        //多文件上传END
});

//显示多图上传结果
function multiple(url,dlink,token,imgid,client_name){
    $("#re-siteurl pre").append("https://imgur.loukky.com/img/"+imgid + "<br>");
    $("#re-url pre").append(url + "<br>");
    $("#re-html pre").append("&lt;img src = '" + url + "' /&gt;" + "<br>");
    $("#re-md pre").append("!["+client_name+"](" + url + ")" + "<br>");
    //$("#re-md pre").append("!["+imgid+"](" + url + ")" + "<br>");
    $("#re-bbc pre").append("[img]" + url + "[/img]" + "<br>");
    $("#re-dlink pre").append(dlink + "<br>");
	$("#re-token pre").append(token + "<br>");
	
}

//复制链接
//复制链接
function copyurl(info){
    var copy = new clipBoard(document.getElementById('links'), {
        beforeCopy: function() {
            info = $("#" + info).val();
        },
        copy: function() {
            return info;
        },
        afterCopy: function() {

        }
    });
    layui.use('layer', function(){
          var layer = layui.layer;
      
          layer.msg('链接已复制！', {time: 2000,icon:1})
    }); 
}

//多图上传复制
function copy_more(id){
    var copy = new clipBoard($("#" + id), {
        beforeCopy: function() {
            info = $("#" + id + " pre").html();
        },
        copy: function() {
            console.log(info);
            //info = info.replace(/<br>/g, "\n");
            info = info.replace(/<br>/g, "\n");
            console.log(info);
            // info = info.replace(/<br>/g, "\r\n");
            
            return info;
        },
        afterCopy: function() {

        }
    });
    layui.use('layer', function(){
          var layer = layui.layer;

          layer.msg('链接已复制！', {time: 2000,icon:1})
    }); 
}

//复制页面链接
function copy_page_link(){
    var url = window.location.href;
    var copy = new clipBoard(document.getElementById('links'), {
        beforeCopy: function() {
            
        },
        copy: function() {
            return url;
        },
        afterCopy: function() {

        }
    });
    layui.use('layer', function(){
          var layer = layui.layer;
      
          layer.msg('当前页面链接已复制！', {time: 2000,icon:1})
    }); 
}

//用户登录
function login(){
    // 获取用户提交的信息
    var user = $("#user").val();
    var password = $("#password").val();

    if((user == '') || (password == '')){
	    layer.msg('用户名或密码不能为空！');
	    return false;
    }

    $.post("/user/verify",{user:user,password:password},function(data,status){
        var re = JSON.parse(data);
        if(re.code == 200){
            window.location.href = "/admin/";
        }
        else{
            layer.msg(re.msg,{time:2000});
        }
        //layer.msg(data,{time:2000});
    });
}

//显示图片操作按钮
function show_imgcon(id){
    $("#imgcon" + id).show();
}
//隐藏图片操作按钮
function hide_imgcon(id){
    $("#imgcon" + id).hide();
}
//查看图片信息
function imginfo(imgid,title){
        layer.open({
            type:2,
            title:title,
           //area:["580px","420px"],
			//maxWidth:'600',
		    //maxHeight:'360',
		    area: 'auto',
	        offset:'auto',
            content:"/manage/imginfo/"+imgid})}
//显示图片链接
function showlink(url,thumburl,imgid,client_name){
    layer.open({
        type: 1,
        title: false,
        content: $('#imglink'),
        //area: ['680px', '500px']
		maxWidth:'600',
	  offset:'auto'
    });
    $("#img-thumb a").attr('href', thumburl);
    $("#img-thumb img").attr('src',thumburl);
    $("#url").val(url);
    $("#html").val("<img src = '" + url + "' />");
    $("#markdown").val("!["+"](" + url + ")");
    $("#bbcode").val("[img]" + url + "[/img]");
    $("#siteurl").val("https://imgur.loukky.com/img/"+imgid);
    $("#imglink").show();
}

//对图片进行鉴黄识别
function identify(id){
    //获取鉴黄接口
    porn_interface = $("#porn_interface").val();
    switch (porn_interface) {
        case 'nsfw':
            api_url = '/deal/nsfwjs_identify_one/' + id;
            $.get(api_url,function(data,status){
                if( (data.code == 200) && ( parseFloat(data.data.score) >= 0.9 ) ){
                    layer.open({
                        title: '警告！'
                        ,content: '您的IP已被记录，请不要上传违规图片！'
                    }); 
                }
            });
            break;
        case 'moderate':
            api_url = '/deal/identify/' + id;
            //对图片进行鉴黄识别
            $.get(api_url,function(data,status){
                //状态码为400，说明该图片存在异常
                if(data.code == 400){
                    layer.open({
                        title: '警告！'
                        ,content: '您的IP已被记录，请不要上传违规图片！'
                    }); 
                }
                else{
                    console.log(data.code);
                }
            });
            break;
        default:
            api_url = '/deal/' + identify + '/' + id;
            //对图片进行鉴黄识别
            $.get(api_url,function(data,status){
                var re = JSON.parse(data);
                //状态码为400，说明该图片存在异常
                if(data.code == 400){
                    layer.open({
                        title: '警告！'
                        ,content: '您的IP已被记录，请不要上传违规图片！'
                    }); 
                }
                else{
                    console.log(data.code);
                }
            });
            break;
    }
}
//重置密码
function resetpass(){
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();

    if(password1 != password2){
        layer.msg("两次密码不一致！");
    }
    else if(password1 == password2){
        $.post("/deal/resetpass",{password1:password1,password2:password2},function(data,status){
            var re = JSON.parse(data);
            layer.msg(re.msg);
        });
    }
}
//删除单张图片
function del_img(id,imgid,path,thumbnail_path){
	layer.confirm('确认删除这张图片？', {icon: 3, title:'温馨提示！'}, function(index){
        $.post("/set/del_img",{imgid:imgid,path:path,thumbnail_path:thumbnail_path},function(data,status){
			var re = JSON.parse(data);
            if(re.code == 200) {
                $("#img"+id).remove();
                console.log("#img"+id);
            }
            else{
                layer.msg(data);
            }
        });
    
    layer.close(index);
    });
}
/**
 * 创建并下载文件
 * @param  {String} fileName 文件名
 * @param  {String} content  文件内容
 */
function createAndDownloadFile(fileName, content) {
    var aTag = document.createElement('a');
    var blob = new Blob([content]);
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
}

//根据ID删除单张图片
function del_id(id){
	layer.confirm('确认删除这张图片？', {icon: 3, title:'温馨提示！'}, function(index){
        $.get("/del/id/" + id,function(data,status){
			var re = JSON.parse(data);
            if(re.code == 200) {
                $("#img"+id).remove();
                console.log("#img"+id);
            }
            else{
                layer.msg(data);
            }
        });
    
    layer.close(index);
    });
}
//改用jquery异步加载背景图
// $(document).ready(function(){
// 	$("body").css("background-image","url('/static/images/bg.jpg')");
// });
//获取cookie函数
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
//举报函数宽度设置
function report_width() {
    var width = document.documentElement.clientWidth;
    if ( width <= 380 ) {
        return '100%';
    }
    else if( width > 500 ) {
        return '580px';
    }
    else{
        return '380px';
    }
}
//举报函数
function report(form_url,email) {
    //获取当前页面URL地址
    var url = window.location.href;
    //获取用户邮箱
    
    //表单地址
    var form_url = form_url + '?email=' + email + '&url=' + url;
    layer.open({
        title:'违规举报',
        type: 2, 
        area:[report_width(),'520px'],
        content: form_url
    }); 
}
