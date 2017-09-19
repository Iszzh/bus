<template>
    <div id="personal">
        <div class="pTop">
            Profile
        </div>
        <div class="pCenter">
            <div class="pBg" :style="bg">
                <img v-lazy="pimg" alt="">
                <div class="pName">
                    Anonymous person
                </div>
                <div class="pOp flexR">
                    <div>
                        <div>Favorite</div>
                        <div>12</div>
                    </div>
                    <div>
                        <div>Trips</div>
                        <div>123</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="pSell">
                    <div>
                        <i style="color: #eb8880;font-size: 0.6rem" class="iconfont icon-card"></i>
                        <span>Order</span>
                    </div>
                    <div class="iconfont icon-htbarrowright02"></div>
                </div>
                <div class="pSell">
                    <div>
                        <i style="color: #a5f49a;font-size: 0.6rem" class="iconfont icon-start"></i>
                        <span>Share</span>
                    </div>
                    <div class="iconfont icon-htbarrowright02"></div>
                </div>
                <div class="pSell">
                    <div>
                        <i style="color: #86c8ed;font-size: 0.6rem" class="iconfont icon-about1"></i>
                        <span>About</span>
                    </div>
                    <div class="iconfont icon-htbarrowright02"></div>
                </div>
            </div>
            <div class="logout">
                Logout
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                //背景图片样式
                bg: {
                    backgroundImage: "url(" + require("../../assets/p1.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                    height:'4.8rem'
                },
                pimg:require('../../assets/p2.jpg')
            }
        }
    }
</script>

<style>

</style>
