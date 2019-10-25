<template>
    <div class="container">
        <banner-container :dataList="dataList" />
    </div>
</template>

<script>
import api from '../../api/index.js'
import BannerContainer from './bannerContainer';
export default {
    data() {
        return {
            dataList: {}
        }
    },
    components: {
        BannerContainer
    },
    created() {
        api.resultsByKeywords().then(res => {
            // console.log(res.data.data);
            this.dataList = res.data.data;
            // console.log(this.dataList)
        })
    },
}
</script>

<style lang="less">
    @import '../../assets/css/index/container.less';
</style>