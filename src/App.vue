<template>
  <div id="app">
  
    <router-view/>
    
    <div class="tabs">
        <router-link class="tab" to="/home" >
        <i class="iconfont icon-changyonglogo40 ic1">
        </i>
         <span class="tabItem1">首页</span>
       </router-link>
        <router-link class="tab" to='/discover'>   
        <i class="iconfont icon-faxian  ic2">
        </i>
         <span class="tabItem1">发现</span>
         </router-link>
        <router-link class="tab" to='order'>  
          <i class="iconfont icon-ziyuan ic3">
        </i>
         <span class="tabItem1">订单</span></router-link>
        <router-link class="tab" to='mine'>  
          <i class="iconfont icon-wode ic4">
        </i>
         <span class="tabItem1">我的</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>

.tabs {
  position: absolute;
  height: 49px;
  text-align: center;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
  display: flex;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background: #fff;

 
}
.tabs .tab {
  flex: 1;
}
.tabs .tab.router-link-active{
  
  color: #0089dc;
}
.ic1 {
  font-size: 27px;line-height: 29px;
}
.ic2{
   font-size: 24px;line-height: 29px;
}
.ic3{
  font-size: 20px;line-height: 29px;
}
.ic4{
   font-size: 20px;line-height: 29px;
}
.tabItem1 {
  display: block; color: #8e8e93;
}
</style>
