<template>
    <div id="search">
        <div class="flexB left">
            <div class="flexC">
                <i class="iconfont icon-left"></i>
                <mu-auto-complete hintText="Search..." @input="handleInput" :dataSource="dataSource" @change="handlechange" />
            </div>
            <i class="iconfont icon-close"></i>
        </div>
        <div class="center">
            <div class="clear">
                <b>Search Records</b>
                <i class="iconfont icon-bothclear"></i>
            </div>
            <div class="history">
                <div class="list" v-for="(item,index) in history">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                dataSource: [],
                history:[{
                    name:'7'
                },{
                    name:'8'
                },{
                    name:'9'
                }]
            }
        },
        methods: {
            handlechange (val) {
                console.log(`you choose ${val}`)
            },

            handleInput (val) {
                this.dataSource = [
                    val,
                    val + val,
                    val + val + val
                ]
            }
        }

    }
</script>

<style>

</style>
