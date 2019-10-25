<template>
    <div class="choose-first-letter">
        <letter-List />
        <div class="first-list">
            <dl v-for="(item, index) in letterList"
            :key="`${index}_0`">
                <dt :id="`${item}`">{{ item }}</dt>
                <dd v-for="(innerItem, innerIndex) in cityObj[item]"
                :key="`${innerIndex}_1`"
                @click="clickCity(innerItem.name)">
                <router-link to="/">
                    {{ innerItem.name }}
                </router-link>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import api  from '../../api/index.js'
import LetterList from './letterList'
export default {
    data() {
        return {
            cityObj: {},
            letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
        }
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
    components: {
        LetterList
    },
    created() {
        api.getProvinceList().then(res => {
            // console.log(res.data.data);
            let obj = {};
            res.data.data.forEach((item, index) => {
                // console.log(item)
                item.cityInfoList.forEach((item, index) => {
                    // console.log(item);
                    if(!obj[item.firstChar]) {
                        obj[item.firstChar] = [item]
                    }else {
                        obj[item.firstChar].push(item)
                    }
                })
            })
            // console.log(obj);
            this.cityObj = obj;
        })
    },
}
</script>

<style lang="less">
    
</style>