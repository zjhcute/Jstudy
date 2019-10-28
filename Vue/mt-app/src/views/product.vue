<template>
  <div class="product">
    <div class="crumbs">
      <router-link to="/">{{ $store.state.position.name }}美团</router-link>
      <span>></span>
      <router-link to="/product">火锅</router-link>
    </div>
    <el-row>
      <el-col :span="19">
        <div class="product-list">
          <el-row>
            <div class="sort-list">
              <dl>
                <dd 
                v-for="(item, index) in sortList"
                :key="`${index}_0`"
                :class="{active: flag==index}" 
                @click="clickSort(index)">{{ item }}</dd>
                
              </dl>
            </div>
            <div class="product-items">
              <div class="product-item" v-for="(item, index) in currList" :key="`${index}_0`">
                <el-row>
                  <el-col :span="8">
                    <img :src="item.image" alt />
                    <span class="rank">{{ index + 1 }}</span>
                  </el-col>
                  <el-col :span="16" class="info">
                    <p class="title">{{ item.title }}</p>
                    <p class="score">
                      <el-rate v-model="item.score" disabled show-score text-color="#ff9900"></el-rate>
                    </p>
                    <p class="address">{{ item.address }}</p>
                    <p class="price">¥{{ item.avgPrice }}</p>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-row>
        </div>
      </el-col>
      <el-col :span="5">
          <div class="guess-like">
              <dl>
                  <dt>猜你喜欢</dt>
                  <dd>不猜了, 你喜欢吃</dd>
              </dl>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "../api/index.js";
export default {
  data() {
    return {
        flag: 0,
        sortList: ['智能排序', '价格排序', '评价最高'],
        evalList: [],
        priceList: [],
        productList: [],
    };
  },
  computed: {
      currList() {
          if(this.flag == 0) {
              return this.productList;
          }else if (this.flag == 1) {
              return this.priceList;
          }else if(this.flag == 2) {
              return this.evalList;
          }
      }
  },
  methods: {
      clickSort (index) {
          this.flag = index;
      },
      sortPrice () {
          console.log(this.productList);
          this.priceList.sort((a, b) => {
              return b.avgPrice - a.avgPrice;
          })
          console.log(this.productList);
          
      },
      sortEval () {
          this.evalList.sort((a, b) => {
              return b.score - a.score;
          })
      }
  },
  created() {
    api.getProductsList().then(res => {
      console.log(res.data.data);
      this.productList = [
          ...res.data.data
      ];
      this.priceList = [
          ...res.data.data
      ];
      this.evalList = [
          ...res.data.data
      ];
      this.sortPrice()
      this.sortEval()
    });
  }
};
</script>

<style lang="less">
@import "../assets/css/product/product.less";
</style>