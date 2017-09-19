<template>
    <div id="pay">
        <div class="payTop">
            <b class="iconfont icon-left"></b>
            <span>Mobile Payment</span>
        </div>
        <div class="payCenter">
            <div class="selectWay">
                <div class="payRang">
                    <div class="rangs"></div>
                </div>
                <span>Pay Bus Fare</span>
            </div>
            <div class="payone">
                <img :src="pay1" alt="">
            </div>
            <div class="paytwo">
                <img :src="pay2" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                pay1:require('../../assets/pay1.png'),
                pay2:require('../../assets/pay2.png')
            }
        }
    }
</script>

<style>

</style>
