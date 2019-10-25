<template>
    <div class="question">
        问题: {{ questionTitle }}
        <button v-show="flag" @click="handleClick">下一问题</button>
    </div>
</template>

<script>
export default {
    mounted() {
        // console.log(this.$route);
        // console.log(this.findQuesIndex(this.$route.params.id));
        this.updateQuestion()
    },
    beforeRouteUpdate(to, from, next) {
        next();
        this.updateQuestion()
    },
    data() {
        return {
            currIndex: 0,
            questionTitle: '',
            flag: true,
            questionList: [
                ...this.$store.state.questionList.questionList
            ],

        }
    },
    methods: {
        findQuesIndex(id) {
            return this.questionList.findIndex(item => item.questionId == id);
        },
        handleClick() {
            if(this.questionList[this.currIndex + 1]) {
                this.$router.push({
                    name: 'question',
                    params: {
                        id: this.questionList[this.currIndex + 1].questionId
                    }
                })
            }
        },
        updateQuestion() {
            this.currIndex = this.findQuesIndex(this.$route.params.id);
            this.questionTitle = this.questionList[this.currIndex].title;
            if(!this.questionList[this.currIndex + 1]) {
                this.flag = !this.flag;
            }
        }
    }
}
</script>