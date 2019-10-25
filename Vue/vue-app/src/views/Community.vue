<template>
    <div class="community">
        <ul class="community-ul">
            <router-link tag="li" to="/community/academic">英雄论坛</router-link>
            <router-link tag="li" to="/community/task">任务中心</router-link>
            <router-link tag="li" to="/community/person">个人中心</router-link>
        </ul>
        <router-view class="router-view"/>
    </div>
</template>
<style scoped>
    .community {
        width: 500px;
        height: 300px;
    }
    .community .community-ul {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #abcdef;
    }
    .community .community-ul li {
        cursor: pointer;
        line-height: 80px;
        font-size: 20px;
        flex: 1;
        text-align: center;
    }
    .exact-active {
        background-color: #abcdef;
        color: #fff;
    }
</style>