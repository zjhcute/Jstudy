<template>
    <div class="task-list">
        <h3>任务列表</h3>
        <ul class="task-ul">
            <li class="task-li" v-for="item in taskList" :key=item.id>
                <span class="level">{{ item.level }}</span>
                <p class="title">{{ item.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState('taskList', ['taskList'])
        // taskList() {
        //     return this.$store.state.taskList
        // }
    },
}
</script>