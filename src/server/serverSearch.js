import axios from 'axios';
import API from '../api';
import handleImg from '../utils/handleImgPath'
//热搜数据
export function gethotDate(){
    return new Promise((resolve,rejsect)=>{
        axios.get(API.API_HOT_SEARCH,{
            params:{
                latitude:22.547,
                longitude:114.085947
            }
        }).then(res=>{
            let data = res.data.map(item =>{
                return{
                    name:item.search_word
                }
            })
           resolve(data)
        }).catch(error=>{
            console.log(error)
        })
    })
}
//轮播图数据
export function getBannerDate(){
    return new Promise((resolve,rejsect)=>{
        axios.get(API.API_BANNER_SHOP,{
            params:{
                latitude:22.547,
                longitude:114.085947,
                'templates[]':'main_template',
                terminal:'h5',
                // 'templates[]':'favourable_template',
                // 'templates[]':'svip_template'


            }
        }).then(res=>{
           
           let data = res.data[0].entries.map(item=>{
              return{
                  id:item.id,
                  name:item.name,
                  img:handleImg(item.image_hash,45)
              }

           })
        
          resolve(data)
        }).catch(error=>{
            console.log(error)
        })
    })
}
//排位数据
export function getSortDate(){
    return new  Promise((resolve,rejsect)=>{
        axios.get(API.API_SORT,{
            params:{
                latitude:22.547,
                longitude:114.085947,
                terminal:'h5',
            }
        }).then(res=>{
         let data=res.data.inside_sort_filter;
         resolve(data)
        }).catch(error=>{
            console.log(error)
        })
    })
}
//请求筛选中的数据
export function getScreenDate(){
   
   return new Promise((resolve,rejsect)=>{
       axios.get(API.API_SCREEN,{
        params:{
            latitude:22.547,
            longitude:114.085947,
            terminal:'h5',
        }
       }).then(res=>{
           resolve(res.data)
       }).catch(error=>{
           console.log(error)
       })
   })
}
// 请求商品列表
export function getShopList(){
 
    return new Promise((resolve,rejsect)=>{
        axios.get(API.SHOP_LIST,{
            params:{
                latitude:22.547,
                longitude:114.085947,
                terminal:'h5',
                'extras[]':'activities'
            }
        }).then(res=>{
            console.log(res)
            let data = res.data.items.map(item=>{
                
                return{
                    id:item.restaurant.id,
                    img:handleImg(item.restaurant.image_path,65),
                    name:item.restaurant.name,
                    score:item.restaurant.rating,
                    Journey:item.restaurant.distance,
                    user:item.restaurant.recent_order_num,
                    time:item.restaurant.order_lead_time,
                    free:item.restaurant.piecewise_agent_fee,
                    flavo:item.restaurant.support_tags,
                    bao:item.restaurant.supports
                }
              
               
            })
            resolve(data)
        }).catch(error=>{
            console.log(error)
        })
    })
    
}