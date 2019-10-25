<template>
    <div class="city-list">
        <dl>
            <dt>{{ title }}</dt>
            <dd
            v-for="(item, index) in cityList"
            :key="`${index}_0`"
            @click="clickCity(item.name)">
            <router-link to="/">{{ item.name }}</router-link></dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: ['cityList', 'type'],
    data() {
        return {
            title: ''
        }
    },
    computed: {
    },
    methods: {
        clickCity(name) {
            console.log(name);
            this.$store.dispatch('setPosition', {
                name: name,
                nearCity: [
                    {name: '假省'},
                    {name: '假市'},
                    {name: '假县'},
                ]
            })
        }
    },
    created() {
        // console.log(this.type);
        if(this.type == 0) {
            this.title = '热门城市'
        }else if (this.type == 1) {
            this.title = '最近访问'
        }
    },
}
</script>

<style lang="less">
    
</style>