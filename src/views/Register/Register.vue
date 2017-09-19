<template>
    <div id="login" :style="bg">
        <div class="loginTop">
            <div class="logoBg">
                <img :src="logo" alt="">
            </div>
        </div>

        <div style="width: 100%">
            <div class="loginInput">
                <div class="icon iconfont icon-username"></div>
                <div><input type="text" v-model="name" placeholder="Username"></div>
            </div>
            <div class="loginInput" style="justify-content: space-between">
                <div class="flex">
                    <div class="icon iconfont icon-mobile"></div>
                    <input type="number" v-model="phone" placeholder="Mobile">
                </div>
                <div class="regCode">GetCode</div>
            </div>
            <div class="loginInput">
                <div class="icon iconfont icon-pwd"></div>
                <div><input type="password" v-model="pwd" placeholder="Password"></div>
            </div>
        </div>

        <div style="width: 100%;margin-top: 1.48rem">
            <div class="loginBtn">
                Continue
            </div>
            <div @click="handleLogin" class="signBtn">
                Login
            </div>
        </div>

    </div>
</template>

<script>
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
                name:'',
                phone:'',
                pwd:''
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
            //去登录
            handleLogin(){
                this.$router.push('/Login')
            }
        },
        mounted(){
            this.handleHeight();
        }
    }
</script>

<style>

</style>
