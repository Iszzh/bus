<template>
    <div id="navs">
        <router-link tag="div" to="/Home" class="flexD bottomNav">
            <i class="iconfont icon-iconfonthomefill"></i>
            <div>Home</div>
        </router-link>
        <router-link tag="div" to="/Collection" class="flexD bottomNav">
            <i class="iconfont icon-iconfontzan" style="font-size: 25px"></i>
            <div>Collect</div>
        </router-link>
        <router-link tag="div" to="/Personal" class="flexD bottomNav">
            <i class="iconfont icon-mine"></i>
            <div>Mine</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>

<style>

</style>
