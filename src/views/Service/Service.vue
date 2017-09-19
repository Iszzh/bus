<template>
    <div id="service">
        <div class="serTop">
            <b class="iconfont icon-left"></b>
            <span>Convenience Service</span>
        </div>
        <div class="serCenter">
            <mt-swipe :auto="4000" class="serSwi">
                <mt-swipe-item v-for="(item,index) in serImg" :key="index">
                    <img @click="handleImg(item)" v-lazy="item.img" alt="" class="serSwi">
                </mt-swipe-item>
            </mt-swipe>
            <div class="sersNav">
                <div class="floatL" :class="item.serSty" style="margin-bottom: 0.4rem;" v-for="(item,index) in nav" :key="index">
                    <div class="navRang" :class="item.className">
                        <i class="iconfont" :class="item.icon"></i>
                    </div>
                    <div class="navFont">
                        <div>{{ item.tit }}</div>
                        <div v-html="item.txt"></div>
                    </div>
                </div>
                <div style="clear: both"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                serImg:[{
                    img:require('../../assets/ser1.jpg')
                },{
                    img:require('../../assets/ser1.jpg')
                },{
                    img:require('../../assets/ser1.jpg')
                }],
                nav:[{
                    className:'Lottery',
                    icon:'icon-caipiao',
                    tit:'Lottery',
                    txt:'&nbsp;',
                    serSty:'',
                },{
                    className:'Movies',
                    icon:'icon-movie',
                    tit:'Movies',
                    txt:'Tickets',
                    serSty:'serSty'
                },{
                    className:'Tourist',
                    icon:'icon-travel',
                    tit:'Tourist',
                    txt:'Attractions',
                    serSty:'serSty'
                },{
                    className:'Shopping',
                    icon:'icon-shopping',
                    tit:'Shopping',
                    txt:'&nbsp;',
                    serSty:'serSty'
                },{
                    className:'Car',
                    icon:'icon-car',
                    tit:'Car',
                    txt:'Hailling',
                    serSty:''
                },{
                    className:'More',
                    icon:'icon-box',
                    tit:'More',
                    txt:'&nbsp;',
                    serSty:'serSty'
                }]
            }
        }
    }
</script>

<style>

</style>
