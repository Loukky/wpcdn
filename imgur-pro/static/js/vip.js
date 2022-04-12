layui.use(['form','layer','element'], function(){
    var form = layui.form;
    var layer = layui.layer;
    var element = layui.element;

    //获取hash来切换选项卡，假设当前地址的hash为lay-id对应的值
  var layid = location.hash.replace(/^#user=/, '');
  element.tabChange('user', layid);
  
  //监听Tab切换，以改变地址hash值
  element.on('tab(user)', function(){
    location.hash = 'user='+ this.getAttribute('lay-id');
  });
    
   
    //自定义验证规则
    form.verify({
      title: function(value){
        if(value.length < 5){
          return '标题至少得5个字符啊';
        }
      }
      ,pass: [
        /^[\S]{8,16}$/
        ,'密码必须8到16位，且不能出现空格'
      ]
      ,content: function(value){
        layedit.sync(editIndex);
      }
    });
    
    //发送验证码
    form.on('submit(send_mail)', function(data){
        myfield = data.field;
        //(myfield.password);
        var index = layer.load();
        //如果两次密码不一致
        if( !v_password(myfield.password,myfield.password2) ) {
            layer.close(index);
            layer.msg('两次输入的密码不一致！', {icon: 5});
        }
        else{
            //请求邮件发送接口
            $.post("/vip/user/send_mail_code",myfield,function(data,status){
              //加载load
              
              //console.log(data.msg);
                code = data.code;
                if(code != 200) {
                  //关闭加载
                  layer.close(index);
                  layer.msg(data.msg,{icon: 5});
                  // var countdown = 120;
                  // count_down();
                }
                else{
                  //关闭加载
                  layer.close(index);
                  layer.msg(data.msg, {icon: 1});
                }
            });
            //layer.close(index);
        }

      // layer.alert(JSON.stringify(data.field), {
      //   title: '最终的提交信息'
      // })
      //console.log(data.field);
      return false;
    });

    //用户点击注册按钮
    form.on('submit(register)',function(data){
      //获取所有表单字段
      myfield = data.field;
      //console.log(myfield.mailcode.length);
      //如果验证码长度是6，直接请求后台注册接口
      if ( myfield.mailcode.length === 6 ) {
        $.post("/vip/user/reg",myfield,function(data,status){
          //如果注册成功
          if( data.code == 200 ) {
            layer.msg(data.msg,{icon: 1});
          }
          else{
            layer.msg(data.msg,{icon: 5});
          }
        });
      }
      else if(myfield.mailcode.length !== 6) {
        layer.msg('邮箱验证码长度不正确！',{icon: 5});
      }
      else {
        layer.msg('未知错误，请联系管理员！',{icon: 5});
      }
      //console.log(data.field);
      return false;
    });

    //用户点击忘记密码按钮
    //用户点击注册按钮
    form.on('submit(forget_password)',function(data){
      //获取所有表单字段
      myfield = data.field;
      //console.log(myfield.mailcode.length);
      //如果验证码长度是6，直接请求后台注册接口
      if ( myfield.mailcode.length === 6 ) {
        $.post("/vip/user/forget_password",myfield,function(data,status){
          //如果注册成功
          if( data.code == 200 ) {
            layer.msg(data.msg,{icon: 1});
          }
          else{
            layer.msg(data.msg,{icon: 5});
          }
        });
      }
      else if(myfield.mailcode.length !== 6) {
        layer.msg('邮箱验证码长度不正确！',{icon: 5});
      }
      else {
        layer.msg('未知错误，请联系管理员！',{icon: 5});
      }
      //console.log(data.field);
      return false;
    });

    //用户点击登录按钮
    form.on('submit(login)',function(data){
      //获取所有表单字段
      myfield = data.field;
      //console.log(myfield.mailcode.length);
      //如果验证码长度是4，直接请求后台注册接口
      if ( myfield.captcha.length === 4 ) {
        $.post("/vip/user/login",myfield,function(data,status){
          //如果登录成功
          if( data.code == 200 ) {
            window.location.href = data.data;
          }
          else{
            layer.msg(data.msg,{icon: 5});
          }
        });
      }
      else if(myfield.captcha.length !== 4) {
        layer.msg('验证码长度不正确！',{icon: 5});
      }
      else {
        layer.msg('未知错误，请联系管理员！',{icon: 5});
      }
      //console.log(data.field);
      return false;
    });

    //用户点生成token按钮
    form.on('submit(create_token)',function(data){
      $.get("/vip/set/create_token",function(data,status){
        //如果注册成功
        if( data.code == 200 ) {
          $("#token").val(data.data.token);
          layer.msg(data.msg,{icon: 1});
        }
        else{
          layer.msg(data.msg,{icon: 5});
        }
      });
      //阻止表单提交
      return false;
    });

    //用户点更换token按钮
    form.on('submit(change_token)',function(data){
      $.get("/vip/set/change_token",function(data,status){
        //如果注册成功
        if( data.code == 200 ) {
          $("#token").val(data.data.token);
          layer.msg(data.msg,{icon: 1});
        }
        else{
          layer.msg(data.msg,{icon: 5});
        }
      });
      //阻止表单提交
      return false;
    });
   
   
    
    //表单取值
    layui.$('#LAY-component-form-getval').on('click', function(){
      var data = form.val('example');
      alert(JSON.stringify(data));
    });
    
  });

//更换验证码函数
function change_captcha(name){
    $.get("/vip/user/get_v_code",function(data,status) {
        if ( data.code == 0 ) {
            $("#captcha_" + name).html(data.captcha);
        }
    });
}
//验证两次密码是否一致
function v_password($pass1,$pass2) {
    if( $pass1 !== $pass2 ) {
        //layer.msg('两次输入的密码不一致！', {icon: 5});
        return false;
    }
    else{
        return true;
    }
}
//验证码按钮倒计时

//切换到忘记密码
function switch_forget_password(){
  var element = layui.element;
  //console.log(element);
  var layid = location.hash.replace(/^#user=/, '');
  element.tabChange('user', layid);
  //监听Tab切换，以改变地址hash值
  element.on('tab(user)', function(){
    location.hash = 'user='+ this.getAttribute('lay-id');
  });
}

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

