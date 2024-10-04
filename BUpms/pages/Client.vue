<template>
    <div class="md:flex grid m-1 md:py-10 md:gap-x-4 h-screen md:container md:mx-auto">
        <div class="actions-col w-full">
            <ClientOptions></ClientOptions>
        </div>
        <div class="status-col grid w-full md:w-1/2">
            <ClientProjectTracker></ClientProjectTracker>
        </div>
    </div>
</template>
<script setup>
    userLandingGreet()
    definePageMeta({
        layout: 'landing'
    })
</script>

<style>
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-thumb {
    background-color: #2f96ce;
    border-radius: 3px;
    
}

::-webkit-scrollbar-track {
    background-color: #7dd3fc;
}

::-webkit-scrollbar-thumb:hover {
    background: #085b88; 
}
</style>