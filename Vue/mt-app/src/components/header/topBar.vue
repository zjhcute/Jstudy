<template>
  <div class="top-bar">
    <el-row>
      <el-col :span='10'>
        <geo/>
      </el-col>
      <el-col :span='14'>
        <m-nav/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import geo from './geo'
import MNav from './nav'  
export default {
  components: {
    geo,
    MNav
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/css/public/header/topbar.less';
</style>

