<template>
  <div id="app">
    <div class="nav">
      <div class="logo" @click="homeClick">英雄广场</div>
      <ul class="nav-ul">
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/learn">英雄学习</router-link>
        <router-link tag="li" :to="{path: '/hero'}">英雄展示</router-link>
        <router-link tag="li" :to="{name: 'about'}">关于</router-link>
        <router-link tag="li" to="/community">社区</router-link>
      </ul>
    </div>
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  methods: {
    homeClick() {
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
#app .router-view {
  padding-left: 10vw;
  padding-top: 5vh;
}
#app .nav {
  width: 100vw;
  height: 10vh;
  background-color: #abcdef;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 24px;
  line-height: 10vh;
}
#app .nav .logo {
  margin-left: 10vw;
  height: 100%;
  cursor: pointer;
}
#app .nav .nav-ul {
  height: 100%;
  width: 40vw;
  margin-right: 10vw;
  display: flex;
  justify-content: space-between;
}
#app .nav .nav-ul li {
  cursor: pointer;
}
.link-active {
  font-weight: bold;
}
</style>
