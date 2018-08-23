<template>
   <div id="home" >
      <div class="fitter" v-if="show==false&&item==1" @click="showTo"></div>
      
        <router-link to="/home/location">
          
            <div class="top" ref="top" v-show="show==true">
                <div class="top-location">
                    <i class="iconfont icon-ditu ic" >
                    </i>
                    <span class="city">深圳市</span>
                    <i class="iconfont icon-xiala ic1"></i>
                </div>
            </div>
      
       </router-link>
        <div class="serach">
            <div class="serach-link">
                <router-link to="/home/serach" class="seacrh">
                   <i class="iconfont icon-search ic2">
                           搜索了吗商家名称,商品名称
                   </i>
                </router-link>
            </div>
        </div>
         <nav-item @sendData="testAction" v-if="show==false" :showIt='show'
         :showWords ='messItem' @sent='getItem()' :sort='sort'
         @cancel='cancel'></nav-item>
       <page ref="page" :onScroll="scoll" >
         <banner></banner>
        <div class="icon clearfix">
         <div class="img">
           <img src="../../static/imgs/q1.png" alt="">
         </div>
         <div class="img">
            <img src="../../static/imgs/q1.png" alt="">
         </div>
       </div>
       <!-- 推荐商家标题-->
       <div class="shop-title">
         推荐商家
         </div>
         <!-- 导航 -->
        
         <div class="header" v-if="show=='1'">
              <div class="sort"  @click="showNav('sort')">
            <span>  {{messItem}}</span><i class="icon-xiala iconfont icc"
           ></i>
              </div>
              <div class="sort">距离最近</div>
              <div class="sort">品质联盟</div>
              <div class="sort"  @click="showNav('srceen')">筛选<i class="iconfont icon-shaixuan"></i></div>
           </div>
        <shop-list></shop-list>
       </page>
       <!-- /*两个大标题*/ -->
     
        <router-view ></router-view>
   </div>

</template>

<script>
import Banner from "@/components/home/Banner";
import NavItem from '@/components/home/NavItem'
import ShopList from '@/components/home/ShopList'
export default {
  data(){
      return{
          show:true,
          messItem:'综合排序',
          item:-1,
          //控制排序显示
          sort:""
        
      
        }
   },
  components: {
    Banner,
    NavItem,
    ShopList,

  },
  methods:{
    cancel(){
      this.show = true
    },
    getItem(){
      this.item =1;

      },
     testAction(res){
        this.$refs.page.refreshDOM();
        this.messItem = res[0]
        this.show = res[1]
        this.$refs.page.scroll.scrollTo(0, 0, 200);
        this.item = -1;
         this.sort= ''
     },
  
     showTo(){
       this.show = true;
       this.item = -1;
        this.sort= '';
     },
     showNav(date){
        this.show = false;
        this.$refs.top.style.display="none";
        this.item=1
        this.sort = date;
     },
     scoll:function(y){
       y= this.y||y;
       if(y<=-365){
        this.show=false;
       }
       if(y>-365){
          this.show = true;
          
          this.$refs.top.style.display="block";
          this.$refs.page.refreshDOM();
         }
       }
  },
  mounted(){
       navigator.geolocation.getCurrentPosition(
         function(position){//定位成功
            console.log('成功');
            console.log(JSON.stringify(position));
        },
        function(error){//定位失败
            console.log('失败');
            console.log(error);
        },{
          timeout:3000
        })
  }
};
</script>

<style scoped>
.home{
  width: 100%;
}
.fitter{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 3;
}
.top {
  width: 100%;
  height: 44.5px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  line-height: 44.5px;
}
.top-location {
  width: 60%;
  font-weight: 700;
}
.ic {
  font-size: 18px;
  margin-left: 10px;
}
.city {
  font-size: 16px;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ic1 {
  font-size: 12px;
}
.serach {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  position: sticky;
  top: 0px;
  z-index: 999;
  height: 51px;
}
.serach .serach-link {
  width: 100%;border-top:1px solid transparent;
}
.seacrh {
  display: block;
  background: white;
  margin: 6px 14px;
  text-align: center;
 
}
.ic2 {
  color: #999;
  font-family: simsun;
  font-size: 14px;
  line-height: 36px;
}
.icon {
  /* margin-top: 180px;position: absolute;
  z-index: 2; */
}
.icon .img {
  float: left;
  margin-left: 7px;
}
.shop-title {
  text-align: center;height: 36px;font-size: 15px;
  display: flex;
  color: #000;
  justify-content: center;
  align-items: center;
  /* -webkit-box-pack: center; */
}
.shop-title::before{
      display: block;
    content: "";
    width: 20px;
    height: .266667vw;
    background-color: #999;
    margin-right: 10px;
}
.shop-title::after{
      display: block;
    content: "";
    width: 20px;
    height: .266667vw;
    background-color: #999;
    margin-left: 10px;
}
.header{
   border-bottom: 1px solid #ccc;
   height: 10.666667vw;
   line-height: 10.666667vw;
   display: flex;
}

.header .sort {
  flex: 1;
  color: #666;
  font-size: 13px;
  text-align: center;
  line-height: 10.533333vw;
 
}
.icc{
  font-size: 12px;
}

</style>
