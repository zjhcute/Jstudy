<template>
  <div class="my-nav">
    <ul class="ul-nav">
      <li class="li-nav">
        <router-link to="/">我的美团</router-link>
        <dl>
          <dd v-for="(item, index) in myMt" :key="`${index}_0`">
            <router-link to="/">{{ item }}</router-link>
          </dd>
        </dl>
      </li>

      <li>
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="li-nav">
        <router-link to="/">商家中心</router-link>
        <dl class="buss-center">
          <dd v-for="(item, index) in bussCenter" :key="`${index}_1`">
            <router-link to="/">{{ item }}</router-link>
          </dd>
        </dl>
      </li>
      <li class="li-nav">
        <router-link to="/">美团规则</router-link>
        <dl>
          <dd v-for="(item, index) in mtRule" :key="`${index}_2`">
            <router-link to="/">{{ item }}</router-link>
          </dd>
        </dl>
      </li>
      <li class="li-nav">
        <router-link to="/">网站导航</router-link>
        <dl class="web-nav">
            <dl class="fir-dl">
                <dt>{{ webNav[0].title }}</dt>
                <dd v-for="(item, index) in webNav[0].content" :key="`${index}_3`">
                  <router-link to="/">{{ item }}</router-link>
                </dd>
            </dl>
            <dl class="sec-dl">
                <dt>{{ webNav[1].title }}</dt>
                <dd v-for="(item, index) in webNav[1].content" :key="`${index}_4`">
                  <router-link to="/">{{ item }}</router-link>
                </dd>
            </dl>
            <dl class="thr-dl">
                <dt>{{ webNav[2].title }}</dt>
                <dd v-for="(item, index) in webNav[2].content" :key="`${index}_5`">
                  <router-link to="/">{{ item }}</router-link>
                </dd>
            </dl>
            <dl class="for-dl">
                <dt>{{ webNav[3].title }}</dt>
                <dd v-for="(item, index) in webNav[3].imgList" :key="`${index}_6`">
                  <router-link to="/">
                    <img class="appicon" :src=item.src :title=item.title :alt=item.title>
                  </router-link>
                </dd>
            </dl>
        </dl>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myMt: ['我的订单', '我的收藏', '抵用券', '账户设置'],
      bussCenter: ['登陆商家中心', '美团智能收银', '我想合作', '手机免费开店', '餐饮代理商招募', '商家申请开票', '免费合作美团排队'],
      mtRule: ['规则中心', '规则目录', '规则评议院'],
      webNav: [{
        title: '酒店旅游',
        content: ['国际机票', '火车票', '榛果民宿', '经济型酒店', '主题酒店', '商务酒店', '公寓', '豪华酒店', '客栈', '青年旅社', '度假酒店', '别墅', '农家院']
      },{
        title: '吃美食',
        content: ['吃美食', '烤鱼', '特色小吃', '烧烤', '自助餐', '火锅', '代金券']
      },{
        title: '看电影',
        content: ['热映电影', '热门影院', '热映电影口碑榜', '最受期待电影', '国内票房榜', '北美票房榜', '电影排行榜']
      },{
        title: '手机应用',
        imgList: [{
          src: '//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png',
          title: '美团app'
        }, {
          src: '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
          title: '外卖app'
        }, {
          src: '//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png',
          title: '榛果app'
        }, {
          src: '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
          title: '点评app'
        }, {
          src: '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png',
          title: '猫眼app'
        }]
      }]
    }
  }
};
</script>

<style scoped lang="less">
    @import '../../assets/css/public/header/nav.less';
</style>
