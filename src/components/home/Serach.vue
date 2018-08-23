<template>
    <div class="serach">
        <div class="serach-content">
             <i class="icon-fanhui iconfont ic" @click="goBack"></i>
            <div class="input">
                <i class="icon-search iconfont ic1"></i>
                <input type="search" placeholder="输入商家、商品名称" >
            </div>
            <span class="text">搜索</span>
        </div>
        <div class="hot-search">热门搜索</div>
        <div class="hot-list">
            <ul>
                <li v-for="(item,index) in hotDate" :key="index">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {gethotDate,getBannerDate} from '@/server/serverSearch'

export default {
    name:'serach',
    data(){
        return{
            hotDate:[],
        }
    },
    methods:{
       goBack:function(){
            this.$router.go(-1)
        }
    },
    mounted() {
        gethotDate().then(res=>{
           this.hotDate = res;
        })
      
    },
}
</script>

<style scoped>
.serach{
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    z-index: 1000;
   
}
.serach-content{
    margin-top: 10px;
    width: 100%; display: flex;
     justify-content: space-around
}
.input{
background-color: #f8f8f8;
width: 76%;display: inline-block;
height: 28px;
}
input[type=search]{
    margin: 7px 0 0 6px; ;
background-color: #f8f8f8;
    width: 90%;
 
    outline: none;
    border: none;
}
.ic{
    color: #999;font-size: 20px;
   line-height: 30px;
   display: block
}
.ic1{
    font-size: 12px;margin-left: 2px;
}
.text{
    color: #333;font-size: 16px;
    font-weight: bold;
     line-height: 30px;
}
.hot-search{
    margin: 30px 0  0 10px;
    font-size: 16px;
    color: #666;
    font-weight: bold;
}
.hot-list{
    margin-top: 10px;width: 80%;
}
.hot-list li{
    display: inline-block;
    color: #666;
    padding: 8px 10px;
    text-align: center;background-color: #f7f7f7;
    font-size: 14px;
    margin-left: 10px;
    margin-top: 10px;
}
</style>
