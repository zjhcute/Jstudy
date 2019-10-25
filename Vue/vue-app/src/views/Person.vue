<template>
    <div class="person">
        姓名: <input type="text" name="" id="" v-model.lazy="name">
        <button @click="handleClick">确定</button>
    </div>
</template>

<script>
export default {
    beforeRouteLeave (to, from, next) {
        if(this.name) {
            const flag = window.confirm('确定要跳转吗?');
            if(flag) {
                next()
            }
        }else {
            next();
        }
    },
    data() {
        return {
            name: ''
        }
    },
    methods: {
        handleClick() {
            console.log(this.name);
        }
    },
}
</script>