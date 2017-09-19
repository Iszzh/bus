<template>
    <div id="home">
        <div>
            <div class="topLeft">Yangon^</div>
            <i class="iconfont icon-iconfontsearch topRight"></i>
            <mt-swipe :auto="4000" class="swipes">
                <mt-swipe-item v-for="(item,index) in swImg" :key="index">
                    <img @click="handleImg(item)" v-lazy="url+item.ImgUrl" alt="" class="swipes">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <home-nav></home-nav>
        <div class="flexR homeBusNav">
            <div class="navFont"
                 :class="number===index?'clickNav':''"
                 @click="handleClick(index)"
                 v-for="(item,index) in nav"
                 :key="index">
                <div>{{ item.a }}</div>
                <div>{{ item.b }}</div>
            </div>
        </div>

        <div v-if="number===0" style="padding-left: 0.4rem;background-color: #ffffff;">
            <div class="homeNew" v-for="(item,index) in content" :key="index">
                <div>
                    <img v-lazy="url+item.NewsImg" alt="" class="homeImg">
                </div>
                <div class="newTit">
                    <div class="newTitle" style="font-size: 0.4rem;color: #333333">{{ item.Title }}</div>
                    <div class="newText">{{ item.txt }}</div>
                    <div class="newTime">{{ item.CreateDate | times }}</div>
                </div>
            </div>
        </div>
        <div v-if="number===1" style="padding-left: 0.4rem;background-color: #ffffff;">
            <div class="homeNew" v-for="(item,index) in content1" :key="index">
                <div>
                    <img v-lazy="item.newImg" alt="" class="homeImg">
                </div>
                <div class="newTit">
                    <div class="newTitle" style="font-size: 0.4rem;color: #333333">{{ item.tit }}</div>
                    <div class="newText">{{ item.txt }}</div>
                    <div class="newTime">{{ item.times }}</div>
                </div>
            </div>
        </div>
        <div v-if="number===2" style="padding-left: 0.4rem;background-color: #ffffff;">
            <div class="homeNew" v-for="(item,index) in content" :key="index">
                <div>
                    <img v-lazy="url+item.NewsImg" alt="" class="homeImg">
                </div>
                <div class="newTit">
                    <div class="newTitle" style="font-size: 0.4rem;color: #333333">{{ item.Title }}</div>
                    <div class="newText">{{ item.txt }}</div>
                    <div class="newTime">{{ item.CreateDate | times }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //轮播图下方导航栏
    import HomeNav from './HomeNav.vue'
    import { GetBanner, GetNews } from '../../api/api.js'
    import { Indicator } from 'mint-ui';
    export default {
        name: '',
        components: {
            HomeNav
        },
        data() {
            return {
                url: '',
                swImg: [{
                    img: require('../../assets/s1.jpg'),
                }, {
                    img: require('../../assets/s2.jpg'),
                }, {
                    img: require('../../assets/s3.jpg'),
                }, {
                    img: require('../../assets/s4.jpg'),
                },
                ],
                nav: [{
                    a: 'Adjust the bus',
                    b: 'line'
                }, {
                    a: 'Bus lines for',
                    b: 'tourist attractions'
                }, {
                    a: 'Water supply',
                    b: 'information'
                }],
                content: [],
                content1: [
                    {
                        newImg: require('../../assets/a2.jpg'),
                        tit: 'Focus on promoting the constru',
                        txt: 'Focus on promoting the construction of “area” of the Chinese go',
                        times: '2017-7-24 13:39:33'
                    }, {
                        newImg: require('../../assets/a1.jpg'),
                        tit: 'Focus on promoting the constru',
                        txt: 'Focus on promoting the construction of “area” of the Chinese go',
                        times: '2017-7-24 13:39:33'
                    }, {
                        newImg: require('../../assets/a1.jpg'),
                        tit: 'Focus on promoting the constru',
                        txt: 'Focus on promoting the construction of “area” of the Chinese go',
                        times: '2017-7-24 13:39:33'
                    }
                ],
                number: 0,                //切换class
                Page: 1,                   //设置请求的页数和条数  新闻
                Rows: 10
            }
        },
        methods: {
            handleClick(index) {
                this.number = index;
            },
            handleImg(item) {
                console.log(item)
            },
            //获取数据
            getData() {
                //Indicator.open();
                GetBanner().then(res => {
                    console.log(res)
                    if (res.code === 1) {
                        this.swImg = res.rows;
                    }
                });
                let params = {
                    Page: this.Page,
                    Rows: this.Rows
                };
                GetNews(params).then(res => {
                    console.log(res)
                    if(res.code===1){
                        this.content=res.rows;
                    }
                    //Indicator.close();

                })
            }
        },
        mounted() {
            this.url = URL;
            this.getData();
        }
    }
</script>

<style>

</style>
