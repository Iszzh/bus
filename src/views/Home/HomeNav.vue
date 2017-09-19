<template>
    <div class="flexR homeNav" @click="handleM">
        <div class="flexL">
            <div>
                <div class="navRang busC">
                    <i class="iconfont icon-bus"></i>
                </div>
            </div>
            <div class="navFont">
                <div>Yangon</div>
                <div>Bus mate</div>
            </div>
        </div>
        <div class="flexL" @click="handlePay">
            <div>
                <div class="navRang cardC">
                    <i class="iconfont icon-card"></i>
                </div>
            </div>
            <div class="navFont">
                <div>Mobile</div>
                <div>Payment</div>
            </div>
        </div>
        <div class="flexL">
            <div>
                <div class="navRang knifeC">
                    <i class="iconfont icon-forkknife"></i>
                </div>
            </div>
            <div class="navFont">
                <div>Convenience</div>
                <div>Services</div>
            </div>
        </div>
        <div class="flexL">
            <div>
                <div class="navRang boxC">
                    <i class="iconfont icon-box"></i>
                </div>
            </div>
            <div class="navFont">
                <div>More</div>
                <div style="visibility:hidden;">&nbsp;</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods:{
            handlePay(){
                this.$router.push('/Pay');
            },
            handleM(){
                window.busProject.location()
            }
        }
    }
</script>

<style>

</style>
