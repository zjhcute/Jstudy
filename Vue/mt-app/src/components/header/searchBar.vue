<template>
  <div class="wrapper">
    <div class="search-bar">
      <el-row>
        <el-col :span="3">
          <div class="logo">
            <a href="https://www.meituan.com">
              <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </a>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="search-wrapper">
            <div class="s-input">
              <el-input  v-model="content" placeholder="搜索商家或地点" class="inp" @focus="focus" @blur="blur" @input="input"></el-input>
              <el-button type="primary" icon="el-icon-search" class="search-btn"></el-button>
              <div class="slide" v-if="isFocus">
                <dl v-if="isHot" class="slide-hot">
                  <dt>热门搜索</dt>
                  <dd v-for="(item, index) in hotWords" :key="`${index}_1`">
                    <router-link to="/product">{{ item }}</router-link>
                  </dd>
                </dl>
                <dl v-if="isAbout" class="slide-about">
                  <dd v-for="(item, index) in about" :key="`${index}_2`">
                    <router-link to="/product">{{ item }}</router-link>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="hot">
              <ul>
                <li v-for="(item, index) in hotWords" :key="`${index}_0`">
                  <router-link to="/product">{{ item }}</router-link>
                </li>
              </ul>
              
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      hotWords: [],
      about: [],
      content: '',
      isFocus: false,
    }
  },
  created() {
    api.searchHotWords().then(res => {
      this.hotWords = res.data.data;
    })
  },
  computed: {
    isHot() {
      return this.isFocus && !this.content;
    },
    isAbout() {
      return this.isFocus && this.content;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200)
    },
    input() {
      api.getSearchList().then(res => {
        // console.log(res.data)
        this.about = res.data.data.list;
      })
    }
  },
}
</script>

<style scoped lang="less">
  @import '../../assets/css/public/header/search-bar.less';
</style>
