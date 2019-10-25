<template>
    <div class="geo">
        <i class="el-icon-location-outline"/>{{ $store.state.position.name }}
        <router-link to="/changeCity">切换城市</router-link>
        [
        <router-link to="/" v-for="(item, index) in $store.state.position.nearCity"
        :key="`${index}_0`">
            {{ item.name }}
        </router-link>
        ]
    </div>
</template>

<script>
import api from '../../api/index.js'
export default {
    created() {
        api.getCurPosition().then(res => {
            // console.log(res.data.data);
            this.$store.dispatch('setPosition', res.data.data)
        })
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="less">
    
</style>