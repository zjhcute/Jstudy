<template>
    <div class="show-img">
        <div class="header-links">
            <dl>
                <dd v-for="(item, index) in headerLink" :key="`${index}_0`">
                    <router-link to="/">{{ item }}</router-link>
                </dd>
            </dl>
        </div>
        <div class="img-wrapper">
            <el-row class="no-table">
                <el-col :span="18">
                    <el-carousel trigger="click" height="240px">
                        <el-carousel-item v-for="item in imgList" :key="item">
                            <img :src="item" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <el-col :span="6">
                    <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
                </el-col>
            </el-row>
            <el-row class="img-bottom">
                <el-col :span='9'>
                    <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="">
                </el-col>
                <el-col :span='9'>
                    <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="">
                </el-col>
                <el-col :span='6'>
                    <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
                </el-col>
            </el-row>
                
            
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            headerLink: ['美团外卖', '猫眼电影', '美团酒店', '民宿/公寓', '商家入驻', '美团公益'],
            imgList: [
                'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
                'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
                'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            ]
        }
    }
}
</script>

<style scoped lang="less">
    @import '../../assets/css/index/showImg.less';
</style>