<template>
    <div class="change-city">
        <el-row>
            <choose-prov />
        </el-row>
        <el-row>
            <city-list :cityList="hotCity" type="0"/>
        </el-row>
        <el-row>
            <city-list :cityList="visitedCity" type="1"/>
        </el-row>
        <el-row>
            <choose-first-letter />
        </el-row>
    </div>
</template>

<script>
import ChooseProv from '../components/changeCity/chooseProv'
import CityList from '../components/changeCity/cityList'
import ChooseFirstLetter from '../components/changeCity/chooseFirstLetter'
import api from '../api/index.js'
export default {
    data() {
        return {
            hotCity: [],
            visitedCity: []
        }
    },
    components: {
        ChooseProv,
        CityList,
        ChooseFirstLetter
    },
    created() {
        api.getHotCity().then(res => {
            // this.hotCity
            // console.log(res);
            this.hotCity = res.data.data;
        })
        api.getRecentCity().then(res => {
            // console.log(res);
            this.visitedCity = res.data.data;
        })
    }
}
</script>

<style lang="less">
    @import '../assets/css/changeCity/changecity.less';
</style>