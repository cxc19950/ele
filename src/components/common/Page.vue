<template>
      <div class="page" ref="page">
        <div class="page-wrap">
            
        <slot/>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        onScroll:Function,
     
    },
     methods:{
       refreshDOM(){
           this.scroll.refresh()
       }
    },
    mounted() {
           this.scroll = new IScroll(this.$refs.page,{
               probeType:3
        });
            this.scroll.on('beforeScrollStart', ()=>{
            this.scroll.refresh();
        })
         this.scroll.on('scroll', ()=>{
            let disY = this.scroll.y
          
            // -scroll.maxScrollY; 
           this.onScroll(disY)
        })
    },
}
</script>

<style scoped>
.page{
    position: absolute;
    width: 100%;
   background-color: #fff;
    overflow: hidden;
    top: 91.5px;
    left: 0;
    bottom: 50px;

}
</style>
