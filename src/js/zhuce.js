jQuery(function($){
            $('.input_reg').on('click',function(){


                var reg = /^1[34578]\d{9}$/g;
                if(!reg.test($('#username').val())){
                     alert('账号必须为电话号码');
                    $('#username').focus();
                    return false;
                }
                if(!$('#password').val()){
                    $('#password').focus();
                    alert('请输入密码');
                    return false;
                }
                if(!/^[a-z0-9\-]{5,16}$/.test($('#password').val())){
                    alert('请输入6-16位密码'); 
                    return false;
                }
                $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'success'){
                            location.href = '../index.html';
                        }else{
                            alert('此电话号码以被注册')
                        }
                    }
                })
                
            })
        })