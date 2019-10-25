<template>
    <div class="hero">
        <ul class="hero-ul">
            <li class="hero-li"
            v-for="(hero, index) in handleHeroList"
            :key="index">
            {{ hero }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters('heroList', ['handleHeroList'])
    },
}
</script>