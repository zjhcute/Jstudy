<template>
    <div class="add-task">
        <h3>发布任务</h3>
        <div class="add-task-form">
            任务名称: <input type="text" name="title" id="task-title" v-model="title">
            <hr>
            任务详情: <textarea name="describe" id="describe" cols="30" rows="10" style="resize: none" v-model="describe"></textarea>
            <hr>
            任务等级: <select name="level" id="level" v-model="level">
                <option value="" disabled>请选择任务等级</option>
                <option value="SSS">SSS</option>
                <option value="SS">SS</option>
                <option value="S">S</option>
                <option value="S">A</option>
                <option value="S">B</option>
                <option value="S">C</option>
                <option value="S">D</option>
            </select>
            <button @click="handleClick">提交任务</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            title: '',
            describe: '',
            level: ''
        }
    },
    methods: {
        ...mapMutations('taskList', ['submitTask']),
        ...mapActions('taskList', ['submitTask']),
        handleClick() {
            if(this.title && this.describe && this.level) {
                const taskObj = {
                    title: this.title,
                    level: this.level,
                    describe: this.describe,
                    id: +new Date()
                }
                // this.$store.commit('submitTask', taskObj);
                // this.submitTask(taskObj);
                // this.$store.dispatch('submitTask', taskObj)
                this.submitTask(taskObj);
                this.initTask();
            }
        },
        initTask() {
            this.title = '',
            this.describe = '',
            this.level = ''
        }
    },
}
</script>