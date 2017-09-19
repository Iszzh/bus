<template>
    <div id="login" :style="bg">
        <div class="loginTop">
            <div class="logoBg">
                <img :src="logo" alt="">
            </div>
        </div>

        <div style="width: 100%">
            <div class="loginInput">
                <div class="icon iconfont icon-mobile"></div>
                <input type="number" v-model.number="phone" placeholder="Mobile">
            </div>
            <div class="loginInput">
                <div class="icon iconfont icon-pwd"></div>
                <input type="password" v-model="pwd" placeholder="Password">
            </div>
            <div class="forgetPwd">
                Forget Password
            </div>
        </div>

        <div style="width: 100%;margin-top: 1.48rem">
            <div @click="handleLogin" class="loginBtn">
                Continue
            </div>
            <div @click="handleRegister" class="signBtn">
                SIGN UP
            </div>
        </div>

    </div>
</template>

<script>
    import { Login } from '../../api/api.js'
    import { Indicator, Toast } from 'mint-ui';
    export default {
        name: '',
        data() {
            return {
                logo:require('../../assets/logo.png'),
                bg: {
                    backgroundImage: "url(" + require("../../assets/bg.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                },
                phone:'',            // 手机号
                pwd:'',               // 密码
            }
        },
        methods:{
            //获取屏幕高度
            handleHeight(){
                let h=window.screen.height;
                //添加高度到id为Login的标签上
                let id=document.getElementById('login');
                id.style.height=h+'px';
            },
            //登录
            handleLogin(){
                let params={
                    Password:this.pwd,
                    Phone:this.phone
                };
                Indicator.open();
                Login(params).then(res=>{
                    console.log(res)
                    if(res.code===1){
                        //下面保存登录信息后再返回

                        window.history.back();
                    }
                    Indicator.close();
                    Toast(res.message)
                })
            },
            //跳转注册
            handleRegister(){
                this.$router.push('/Register');
            }
        },
        mounted(){
            this.handleHeight();
        }
    }
</script>

<style>

</style>
