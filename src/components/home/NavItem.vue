<template>
    <div class="nav clearfix">
        
        <div class="nav-header clearfix" ref="haeder">
           <div class="header">
              <div class="sort" @click="sortBtn('sort')"
                :class="{active:showItem=='sort'}">
            <span>  {{messItem}}</span><i class="icon-xiala iconfont ic"></i>
              </div>
              <div class="sort">距离最近</div>
              <div class="sort">品质联盟</div>
              <div class="sort" @click="sreenBtn('srceen')"
              :class="{active:showItem=='srceen'}">筛选<i class="iconfont icon-shaixuan"></i></div>
           </div>
       
        <ul class="sort1 clearfix" v-if="showItem=='sort'">
            <li v-for="(item,index) in sortDate" :key="item.value" @click="itemName(item.name,index)"
            :class="{active:select==index}">
                {{item.name}}
            </li>
        </ul>
    
        <div class="shadow clearfix" v-if="showItem=='srceen'">
           <h3 class="server">离家服务(可多选)</h3>
           <div class="serveritem clearfix">
               <li v-for="item in serverDate" :key="item.id">
                   <img :src="item.img" alt="">
                   <span>{{item.name}}</span>
               </li>
           </div>
            <h3 class="activity">优惠活动(单选) </h3>
                <div class="serveritem clearfix">
                    <li v-for="item in newUser" :key="item.id">
                        <img :src="item.img" alt="">
                        <span>{{item.name}}</span>
                    </li>
                </div>
            <h3 class="activity">人均消费</h3>
                <div class="serveritem clearfix">
                        <li v-for="item in priceDate" :key="item.id">
                            <img :src="item.img" alt="">
                            <span>{{item.description}}</span>
                        </li>
                </div>
              <div class="button">
                    <span class="Eliminate">清除</span><span class="cancel" @click="cancel()">确定</span>
              </div>
        </div>
       </div>
    </div>
</template>

<script>
import { getSortDate,getScreenDate} from "@/server/serverSearch";
import handleImg from "../../utils/handleImgPath";
export default {
  props:{
    showIt:Boolean,
    showWords:String,
    sort:String
  },
  data() {
    return {
      //排序数据
      sortDate: [],
      //服务数据
      serverDate: [],
      //用户数据
      newUser: [],
      //价格数据
      priceDate: [],
      showItem: '',
      messItem :"综合排序",
      select:0,
      count:1,
      scount:1,
      //转义showIt
      it:'',
    };
  },

  methods: {
    sortBtn(date) {
        this.$emit('sent');
        this.showItem = date;
        this.$refs.haeder.style.top = 0;
        if(this.count%2==0){
          this.showItem=""
        }
        this.count++ ;
        this.scount=1; 
     
    },
    sreenBtn(date) {
      this.showItem = date;
 
      this.$refs.haeder.style.top = 0;
         if(this.scount%2==0){
          this.showItem=""
        }
        this.scount++  
        this.count =1;
    },
    itemName(data,index){
      this.messItem = data;
      this.select = index;
      this.it = !this.showIt
      this.$emit("sendData",[this.messItem,this.it]);
    },
    cancel(){
     this.$emit("cancel")
     
    }
  },
  created() {
     this.showItem = this.sort
  },
  mounted() {
   
    console.log(this.sort)
    // this.showItem  = this.showWords
    getSortDate().then(res => {
      this.sortDate = res;
    }),
      getScreenDate().then(res => {
        this.serverDate = res.supports.map(item => {
          return {
            id: item.id,
            name: item.name,
            img: handleImg(item.icon_hash, 13)
          };
        });
        this.newUser = res.activity_types;
        this.priceDate = res.average_costs;
       
      });
  }
};
</script>

<style scoped>
.nav {
  width: 100%;

  background: #fff;
  position: absolute;
  z-index: 99;
}
.nav-header {
  width: 100%;
 z-index: 999;
 background:#fff;
  /* position: absolute; */
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
.ic{
  font-size: 12px;
}
.sort1 {
  width: 100%;
  margin-top: 10px;
  background: #fff;
}
.sort1 li {
  line-height: 10.666667vw;
  color: #333;
  font-size: 14px;
  font-weight: 700px;
  padding-left: 10px;
}
.shadow {
  width: 100%;
}
.nav .active {
  color: #3190e8;
}
.server {
  margin-left: 2%;
  margin-bottom: 2vw;
  color: #666;
  font-size: 12px;
  padding-top: 10px;
}
.serveritem li {
  height: 34px;
  background: #fafafa;
  float: left;
  text-align: center;
  width: 26%;
  margin: 6px 10px;
  line-height: 34px;
}
.activity {
  color: #666;
  font-size: 12px;
  margin-left: 2%;
}
.button {
  display: flex;
  margin-top: 10px;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
}
.button span {
  flex: 1;
  text-align: center;
  line-height: 44px;
  color: #ddd;
  font-size: 16px;
}
.button .cancel {
  background-color: #00d762;
  color: #fff;
}
</style>
