<template>
       <div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div v-for="item in bannerDate" :key="item.id" class="banner">
               <div class="text-img">
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
               </div>
            </div>
        </div>
        <div class="swiper-slide">
                <div v-for="item in bannerDate1" :key="item.id" class="banner">
                <div class="text-img">
                        <img :src="item.img" alt="">
                        <span>{{item.name}}</span>
                </div>
                </div>
            </div>
        </div>
      <div class="swiper-pagination pagein"></div>
</div>
</template>

<script>
import {getBannerDate} from '@/server/serverSearch'
export default {
    data(){
        return{
            bannerDate:[],
            bannerDate1:[],
           
        }
    },
    mounted(){
        getBannerDate().then(res=>{
            this.bannerDate = res.splice(0,10);
            this.bannerDate1 = res
           
        })
          this.bannerSwiper=new Swiper(this.$refs.banner,{
            loop:true,
            // autoplay:3000,
            pagination: '.swiper-pagination',
           
        })

    },
      updated() {
        this.bannerSwiper.update();
        this.bannerSwiper.reLoop();
        this.bannerSwiper.slideTo(1, 0);
        this.bannerSwiper.startAutoplay()
    },
}
</script>

<style scoped>
.banner{
  width: 100%;
    text-align: center;
}
.swiper-slide{
    height: 180px;
}
.text-img{
  width: 20% !important;float: left;
  margin-top: 10px;
}
.text-img span{
    display: block;
}

</style>
