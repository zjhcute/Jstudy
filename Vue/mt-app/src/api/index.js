
import axios from '@/axios.js'

var api = {
  // 搜索热词
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 搜索框列表
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  // 全部分类列表
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 有格调区域数据
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 产品展示列表
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  // 热点城市
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  // 最近搜索城市
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 获取省份
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  // 当前位置
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  // 获取城市列表
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  }
}

export default api
