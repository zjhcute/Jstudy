<template>
    <ul class="academic">
        <router-link class="question-li" 
        tag="li"
        v-for="item in questionList"
        :to="{name: 'question', params: {id: item.questionId}}"
        :key="item.questionId">
            <p class="title">{{ item.title }}</p>
            <span class="asker">发布者: {{ item.asker }}</span>
        </router-link>
    </ul>
</template>

<script>
export default {
    // beforeRouteEnter (to, from, next) {
    //     next();
    // },
    data() {
        return {
            questionList: [
                ...this.$store.state.questionList.questionList
            ]
        }
    }
}
</script>

<style scoped>
    .academic .question-li {
        padding: 6px 0px;
        border-bottom: 2px solid #eee;
        cursor: pointer;
    }
    .academic .question-li .title {
        font-size: 20px;
        margin-bottom: 4px;
    }
    .academic .question-li .asker {
        font-size: 12px;
        color: #ccc;
    }
</style>