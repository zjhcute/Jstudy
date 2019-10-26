<template>
    <div class="product">
        <div class="crumbs">
            <router-link to="/">{{ $store.state.position.name }}美团</router-link>
            <span> > </span>
            <router-link to="/product">火锅</router-link>
        </div>
        <div class="product-list">
            <el-row>
                <div class="sort-list">
                    <dl>
                        <dd v-for="(item, index) in sortList"
                        :key="`${index}_0`">{{ item }}</dd>
                    </dl>
                </div>
                <div class="product-items">
                    <div class="product-item"
                    v-for="(item, index) in productList"
                    :key="`${index}_0`">
                        <el-row>
                            <el-col :span="6">
                                <img :src=item.image alt="">
                                <span class="rank">{{ index + 1 }}</span>
                            </el-col>
                            <el-col :span="17" class="info">
                                <p class="title">{{ item.title }}</p>
                                <p class="score">
                                    <el-rate
                                        v-model=item.score
                                        disabled
                                        show-score
                                        text-color="#ff9900">
                                    </el-rate>
                                </p>
                                <p class="address">{{ item.address }}</p>
                                <p class="price">¥{{ item.avgPrice }}</p>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-row>
        </div>
    </div>
</template>

<script>
import api from '../api/index.js'
export default {
    data() {
        return {
            sortList: ['智能排序', '价格排序', '人气最高', '评价最高'],
            productList: []
        }
    },
    created() {
        api.getProductsList().then(res => {
            console.log(res.data.data);
            this.productList = res.data.data;
        })
    },
}
</script>

<style lang="less">
    @import '../assets/css/product/product.less';
</style>