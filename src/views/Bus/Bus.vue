<template>
    <div id="bus">
        <div class="busTop">
            <b class="iconfont icon-left"></b>
            <span>Mobile Payment</span>
        </div>
        <div class="busCenter">
            <div class="busInfo">
                <div class="flexB infoTit">
                    <div>
                        {{ start }}
                        <i class="iconfont icon-right"></i>
                        {{ end }}
                    </div>
                    <span>
                        {{ price }}
                    </span>
                </div>
                <div class="busTime">
                    <span>First: {{ first }}</span>
                    <span>Last: {{ last }}</span>
                </div>
            </div>
            <div class="busStation" :class="{flexB:b,flexC:c}">
                <div>
                    <div>200m</div>
                    <div>next{{  }}</div>
                </div>
            </div>
            <div class="busLine">

            </div>

        </div>

        <!--底部导航-->
        <div id="navs">
            <div @click="handleUpdate" class="flexD bottomNav" style="color:#ff68d2 ">
                <i class="iconfont icon-update"></i>
                <div>Update</div>
            </div>
            <div @click="handleSwitch" class="flexD bottomNav">
                <i class="iconfont icon-switch" style="font-size: 25px"></i>
                <div>Switch</div>
            </div>
            <div class="flexD bottomNav">
                <i class="iconfont icon-map1" style="font-size: 25px"></i>
                <div>Map</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                start:'BeiJing',
                end:'ChengDu',
                price:'2',
                first:'06:30',
                last:'22:45',
                b:false,            //2个以上公交车到站情况
                c:true,             //0个或者1个公交到站
            }
        },
        methods:{
            handleUpdate(){

            },
            handleSwitch(){

            }
        }
    }
</script>

<style>

</style>
