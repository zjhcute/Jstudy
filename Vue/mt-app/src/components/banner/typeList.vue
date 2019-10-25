<template>
    <div class="type-list">
        <dl class="type-dl" @mouseleave="mouseLeave">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in typeList" :key="`${index}_0`" @mouseenter="mouseEnter(item)">
                <i class='el-icon-eleme' /><router-link to="/">{{ item.name }}</router-link><i class="el-icon-right" />
            </dd>
        </dl>
        <dl class="show-dl" v-if="isEnter || isEnterShow" @mouseenter="mouseEnterShow" @mouseleave="mouseLeaveShow">
            <dl class="show-dl-child" v-for="(item, index) in itemList" :key="`${index}_1`">
                <dt >{{ item.title }}</dt>
                <dd v-for="(innerItem, innerIndex) in item.items" :key="`${index}_${innerIndex}_0`">
                    <router-link to='/'>{{ innerItem }}</router-link>
                </dd>
            </dl>
        </dl>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            typeList: [],
            isEnter: false,
            isEnterShow: false, 
            itemList: null,
            timer: null
        }
    },
    methods: {
        mouseEnter(item) {
            this.isEnter = true;
            this.itemList = item.items
        },
        mouseLeave() {
            this.timer = setTimeout(() => {
                this.isEnter = false;
            }, 100);
        },
        mouseEnterShow() {
            this.isEnter = true;
            this.isEnterShow = true;
        },
        mouseLeaveShow() {
            this.isEnterShow = false;
        }
    },
    created() {
        api.getMenuList().then(res => {
            // 因为后端数据稀缺的原因, 为了页面展示, 强行复制假数据...
            this.typeList = [
                ...res.data.data,
                ...res.data.data,
                ...res.data.data,
                ...res.data.data,
                ...res.data.data,
                res.data.data[0]
            ];
        })
    },
}
</script>

<style scoped lang="less">
    @import '../../assets/css/index/typeList.less';
</style>