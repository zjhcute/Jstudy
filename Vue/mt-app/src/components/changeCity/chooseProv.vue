<template>
    <div class="choose-prov">
        <span>按省份选择</span>
        <el-select name="prov" id="" placeholder="省份" v-model='provValue'>
            <el-option
            v-for="(item) in provList"
            :key="item.provinceCode"
            :value="item.provinceName"
            :label="item.provinceName"
            ></el-option>
        </el-select>
        <el-select name="city" id="" placeholder="城市" :disabled="flag" v-model="cityValue">
            <el-option
            v-for="(item) in cityList"
            :key="item.id"
            :value="item.name"
            :label="item.name"
            ></el-option>
        </el-select>
        <span>直接搜索</span>
        <el-input placeholder="请输入城市英文或中文" v-model="searchValue"></el-input>
    </div>
</template>

<script>
import api from '../../api/index.js'
export default {
    data() {
        return {
            provList: [],
            provValue: '',
            cityValue: '',
            searchValue: ''
        }
    },
    computed: {
        flag() {
            return this.provValue == '';
        },
        cityList() {
            // return this.provValue == '' ? [] : [1, 2, 4]
            return this.provValue == '' ? [] : this.provList[this.provList.findIndex(item => item.provinceName == this.provValue)].cityInfoList
        }
    },
    methods: {

    },
    created() {
        api.getProvinceList().then(res => {
            // console.log(res.data.data);
            this.provList = res.data.data;
        })
        api.getCityList().then(res => {
            // console.log(res);
            
        })
    },
    updated() {
        if(this.provValue && this.cityValue) {
            // console.log('yep');
            this.$store.dispatch('setPosition', {
                name: this.cityValue,
                nearCity: [
                    {name: '假省份'},
                    {name: '假城市'},
                    {name: '假县'}
                ]
            })
            this.$router.push({
                path: '/index'
            })
        }
    },
}
</script>

<style lang="less">
    
</style>