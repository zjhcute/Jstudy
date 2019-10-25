<template>
    <div class="user">
        <el-row class="login">
            <div class="head-img">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
            </div>
            <p>Hi! 你好</p>
            <el-button round>注册</el-button>
            <el-button round>立即登录</el-button>
        </el-row>
        <el-row class="qrcode">
            <div class="qrcode-box">
                <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
            </div>
            <p>美团APP手机版</p>
            <p>
                <span>1元起</span>
                <span>吃喝玩乐</span>
            </p>
            
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="less">
    @import '../../assets/css/index/user.less';
</style>