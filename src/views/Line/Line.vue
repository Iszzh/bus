<template>
    <div id="line">
        <div class="lineTop">
            <div>
                <b class="iconfont icon-left"></b>
                <span>Rangoon Bus</span>
            </div>
            <div>
                <i class="iconfont icon-iconfontsearch"></i>
            </div>
        </div>

        <div class="lineCenter">
            <!--线路展示循环-->
            <div class="line" v-for="(item,index) in line">
                <div class="lineStart">
                    {{ item.start }}
                    <i class="iconfont icon-right"></i>
                    {{ item.end }}
                </div>
                <div class="flexB lineDis">
                    <div>Bus Line {{ item.num }}</div>
                    <span>{{ item.distance }}M</span>
                </div>
                <div class="flexB lineNext">
                    <div class="flexB">
                        <i class="iconfont icon-right3" style="margin-right: 0.2rem;color: #d3d3d3"></i>
                        next {{ item.next }}
                    </div>
                    <div>next distance</div>
                </div>
            </div>
        </div>

        <!--底部导航-->
        <div id="navs">
            <div @click="handleUpdate" class="flexD bottomNav" style="color:#ff68d2 ">
                <i class="iconfont icon-update"></i>
                <div>Update</div>
            </div>
            <div class="flexD bottomNav">
                <i class="iconfont icon-map1" style="font-size: 25px"></i>
                <div>Map</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { GetSiteByLine } from '../../api/api.js'
    export default {
        name: '',
        data() {
            return {
                line:[{
                    start:'The industrial park',
                    end:'Software park',
                    num:'66',
                    distance:'123',
                    next:'Service park'
                },{
                    start:'Cargyi Gate',
                    end:'Sule',
                    num:'7',
                    distance:'349',
                    next:'Service park'
                },{
                    start:'Cargyi Gate',
                    end:'Sule',
                    num:'7',
                    distance:'349',
                    next:'Service park'
                }]
            }
        },
        methods:{
            handleUpdate(){

            },
            getData(){
                let id=this.$route.params.id;
                let params={
                    LineId:id
                };
                GetSiteByLine(params).then(res=>{
                    console.log(res)
                })
            }
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style>

</style>
