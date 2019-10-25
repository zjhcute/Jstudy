<template>
    <div class="page-index">
        <el-row class="banner">
            <el-col :span='5'>
                <type-list />
            </el-col>
            <el-col :span='15'>
                <show-img />
            </el-col>
            <el-col :span='4'>
                <user />
            </el-col>
        </el-row>
        <el-row>
            <container />
        </el-row>
    </div>
</template>

<script>
import TypeList from '../components/banner/typeList.vue';
import ShowImg from '../components/banner/showImg';
import User from '../components/banner/user';
import Container from '../components/banner/container';
export default {
    components: {
        TypeList,
        ShowImg,
        User,
        Container
    }
}
</script>

<style scoped lang="less">
    @import '../assets/css/index/index.less';
</style>
