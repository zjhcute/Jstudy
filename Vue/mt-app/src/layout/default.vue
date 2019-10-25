<template>
  <div class="page-default">
    <el-container>
      <el-header style="height: 197px">
        <my-header />
      </el-header>
      <el-main class="my-main">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header/index.vue";
import MyFooter from "@/components/footer/myFooter.vue";
export default {
  components: {
      MyHeader,
      MyFooter
  }
}
</script>
