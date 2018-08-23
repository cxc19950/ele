<template>
   <transition name="slide">
     <div class="location">
      
             <div class="top">
                <div class="icon-fanhui iconfont ic" @click="goBack"></div>
                <span>选择收获地址</span>
             </div>
     
     </div>
         </transition>  
</template>

<script>
export default {
 methods:{
       goBack:function(){
            this.$router.go(-1)
        }
    },
 mounted() {
    //  location.reload()
 },
}
</script>

<style scoped>
 .location{
    width: 100%;
    background: #f4f4f4;
    position: absolute;
    z-index: 1000;
    top: 0;
  
    /* overflow: hidden; */
    height: 100%;
 }
 .ic{
     float: left;width: 10%;
 }
 .top{
    width: 100%;
    height: 44px;line-height: 44px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    text-align: center;
    font-size: 16px;color:#fff;
    font-weight: 700;
    
    /* display: flex; */
 }
 @keyframes slideIn {
    0%{transform: translateX(100%);
   }
    100%{transform: translateX(0);
   }
}
@keyframes slideOut {
     0%{transform: translateX(0)}
    100%{transform: translateX(100%)}
}
.slide-enter-active{
    animation: slideIn 300ms;
}
.slide-leave-active{
    animation: slideOut 300ms;
}
</style>
