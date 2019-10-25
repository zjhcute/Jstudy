<template>
    <div class="letter-list">
        <dl>
            <dt>根据首字母选择: </dt>
            <dd v-for="(item, index) in letterList"
            :key="`${index}_0`">
                <a :href="`#${item}`">{{ item }}</a>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    data() {
        return {
            letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
            
        }
    }
}
</script>