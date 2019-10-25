<template>
    <div class="login">
        <button @click="handleClick">登入</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            const expires = 24 * 60 * 60 * 1000 * 7;
            const date = new Date(+new Date() + expires);
            document.cookie = `login=true;expires=${date}`
        }
    }
}
</script>