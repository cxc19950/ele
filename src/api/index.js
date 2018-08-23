/*热门搜索*/
const API_HOT_SEARCH ='/restapi/shopping/v3/hot_search_words'
//轮播数据
const API_BANNER_SHOP = '/restapi/shopping/openapi/entries'
//图片处理路径
const IMG_HOST = 'http://fuss10.elemecdn.com';
const API_SORT ='/restapi/shopping/v1/restaurants/outside_filter/attributes'
const API_SCREEN ='/restapi/shopping/v1/restaurants/filter-bar/attributes'
// ?latitude=22.547&longitude=114.085947
// &templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5
const SHOP_LIST='restapi/shopping/v3/restaurants'
/*`offset=16&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&
order_by=0&support_ids[]=8&support_ids[]=7&rank_id=c29e2cb779c1477e8c8ddf9e3b730a3d&terminal=h5"` */
export default {
    API_HOT_SEARCH,
    API_BANNER_SHOP,
    IMG_HOST,
    API_SORT,
    API_SCREEN,
    SHOP_LIST
}