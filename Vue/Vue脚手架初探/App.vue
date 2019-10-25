<template>
    <div>
        <!-- i am a template {{ msg }} -->
        <Calendar/>
    </div>
</template>

<script>
import Calendar from './Calendar';
export default {
    data() {
        return {
            msg: 'hello world'
        }
    },
    components: {
        Calendar
    }
}
</script>

<style>
    
</style>
