<template>
    <div class="h-screen">
        {{ $route.params.userID }}
        edit user details
    </div>
</template>
<script setup>
    const route = useRoute()
    userLandingGreet()
    definePageMeta({
        layout: 'landing'
    })
    
</script>