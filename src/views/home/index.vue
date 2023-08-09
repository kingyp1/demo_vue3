<template>
        <div>
            <h1>首页</h1>
            <!-- <button @click="onClick">登录</button> -->
        </div>
</template>
    
<script setup lang='ts'>
    import { useRouter} from 'vue-router'
    const router = useRouter()
    const onClick = () => {
        router.push('login')
    }
</script>
    
<style>
    
</style>