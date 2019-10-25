<template>
    <div class="banner-container">
        <div class="kind-list">
            <dl>
                <dt>有格调</dt>
                <dd v-for="(item, index) in kindList" :key="`${index}_0`" class="active" @mouseover="over(index)">
                    {{ item }}
                </dd>
            </dl>
        </div>
        <div class="detailed">
            <div class="detailed-item" v-for="(item, index) in currKind" :key="`${index}_1`">
                <img :src=item.image alt="">
                <p class="title">{{ item.title }}</p>
                <p class="sub-title">{{ item.subTitle }}</p>
                <p class="price-address">
                    <span>¥{{ item.price }}</span>
                    <span>{{ item.address }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['dataList'],
    data() {
        return {
            kindList: ['全部', '精品美食', '丽人SPA', '演出电影', '品质出游'],
            kindMap: ['all', 'food', 'spa', 'movie', 'travel'],
            currIndex: 0
        }
    },
    computed: {
        currKind() {
            return this.dataList[this.kindMap[this.currIndex]]
        }
    },
    methods: {
        over(index) {
            this.currIndex = index
        }
    },
    mounted() {
        // console.log(this.dataList);
        // this.currKind = this.dataList['all']
    },
}
</script>
