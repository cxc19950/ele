<template>
    <div class="shop-list clearfix">
        <ul class="clearfix">
            <li v-for="item in shopDate" :key="item.id" class="">
               <div class="shop-img">
                   <img :src="item.img" alt="">
               </div>
             <div class="text">
                   <h3 class="title">{{item.name}}</h3>
                   <div class="one">
                       <span>{{item.score}}</span>
                        <span>月售{{item.user}}单</span>
                   </div>
                   <div class="two">
                      <div class="two-left">
                            <span>{{item.free.rules[0].price | price}}起送</span>
                            <span>{{item.free.description}}</span>
                      </div>
                      <div class="two-right">
                          <span>{{item.Journey | load}}</span> |
                          <span>{{item.time}}分钟</span>
                      </div>
                   </div>
                   <br/>
                   <div class="three">
                          <span v-for="(i,index) in item.flavo" :key="index">{{
                              i.text}}</span>
                      </div>
             </div>
              
            </li>
        </ul>
    </div>
</template>

<script>
import { getShopList} from "@/server/serverSearch";
export default {
    data(){
        return{
            shopDate:[],
           
        }
    },
    mounted() {
        getShopList().then(res=>{
            this.shopDate = res;
            console.log(this.shopDate)
         
        })
    },
}
</script >

<style scoped>
   .shop-list{
       width: 100%;
   }
   ul li{
      padding: 4vw 2.666667vw;display: flex;
      border-bottom: 1px solid #ccc;
   }
   .text{
       padding-left: 20px;width: 80%;font-size: 12px;
       color: #666;
   }
   
   .title{
      font-size: 14px;
       color: #333;font-weight: 700;
   }
   .one,.two,.three{
       padding-top: 8px;
   }
   .two-left{
       float: left;
   }
   .two-right{
       float: right;
   }
   ul li .three {
    
     width: 100%;display: flex;
     border: 1px solid transparent
   }
   .three span{
       padding-left: 4px;transform: translateX(-4px)
       
   }
</style>
