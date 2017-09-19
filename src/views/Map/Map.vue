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
            <!--地图定位-->

            <div id="allmap"></div>
            <baidu-map class="bm-view" :center='center' @ready="handler" :zoom="16" :scroll-wheel-zoom="true">
                <!--个人定位信息-->
                <bm-marker :position="center" :dragging="true" animation="" :icon="myIcon">
                    <bm-label content="" :labelStyle="{color: 'red', fontSize : '16px'}" :offset="{width: -35, height: 30}"/>
                </bm-marker>
                <!--站点信息-->
                <bm-marker @click="handleBus(index)" :position="item" :dragging="false" animation="" :icon="busIcon" v-for="(item,index) in bus" :key="index">
                    <bm-label @click="handleGo(item)" v-if="num===index" :content="item.SiteName" :labelStyle="busLableStyle" :offset="{width: -35, height: 30}"/>
                </bm-marker>
                <bm-circle :center="center"
                           fillColor="#999"
                           :fillOpacity="0.3"
                           :radius="radius"
                           stroke-color="#2d99e4" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" :editing="true"></bm-circle>
                <bm-copyright
                        anchor="BMAP_ANCHOR_TOP_RIGHT"
                        :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>翰乐思科技有限公司</a>'}]">
                </bm-copyright>
            </baidu-map>
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
    import { GetSitByDistance } from '../../api/api.js'
    export default {
        name: 'app',
        data () {
            return {
                center: {lng: 106.499709, lat: 29.619097},
                radius:500,
                city:'北京',
                bus:[
                    {lng:106.5316,lat:29.5446},
                    {lng:106.5316,lat:29.5456},
                    {lng:106.5306,lat:29.5456},
                    {lng:106.5306,lat:29.5455}
                ],
                myIcon:{
                    url:require('../../assets/myMap.png'),
                    size:{width:30,height:30}
                },
                busIcon:{
                    url:require('../../assets/buss.png'),
                    size:{width: 30, height: 30}
                },
                busLableStyle:{
                    color:'#2d99e4',
                    fontSize:'16px',
                    boxShadow: '0px 1px 3px 2px #999999',
                    border:'none',
                    padding: '5px 10px',
                    borderRadius:'5px'
                },
                num:0           //默认显示第一条数据的车站信息，点击后切换
            }
        },
        methods: {
            handleUpdate(){

            },
            handler ({BMap, map}) {
                console.log(BMap, map)
                //this.center.lng = 116.404
                //this.center.lat = 39.915

            },
            updateCirclePath (e) {
                this.center = e.target.getCenter()
                this.radius = e.target.getRadius()
            },
            //获取自己的位置
            getMyl(){
                // 改变this指向
                var _this=this;
                // 百度地图API功能
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(116.331398,39.897445);
                map.centerAndZoom(point,12);

                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        //alert('您的位置：'+r.point.lng+','+r.point.lat);
                        //绑定到data上
                        //_this.center.lng=r.point.lng;
                        //_this.center.lat=r.point.lat;
                        _this.getData();

                    }
                    else {
                        alert('failed'+this.getStatus());
                    }
                },{enableHighAccuracy: true})
            },
            getData(){
                let params={
                    Distance:this.radius/1000,
                    Latitude:this.center.lat,
                    Longitude:this.center.lng
                };
                GetSitByDistance(params).then(res=>{
                    console.log(res);
                    this.bus=res.rows;
                    this.bus.map(m=>m.lat=m.Latitude);
                    this.bus.map(m=>m.lng=m.Longitude);
                })
            },
            handleBus(i){
                this.num=i;
            },
            handleGo(item){
                this.$router.push('/Line/'+item.LineID)
            }
        },
        mounted(){
            this.getMyl();
        }
    }
</script>

<style>
    .bm-view {
        width: 100%;
        height: 600px;
    }
    .anchorBL{display:none;}
    img{
        width: 30px;
        height: 30px;
    }
</style>
