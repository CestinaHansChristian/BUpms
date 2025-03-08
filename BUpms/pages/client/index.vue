<template>
    <div class="md:flex grid m-1 md:pt-3 md:gap-x-4 md:mx-1">
        <div class="actions-col w-full">
            <ClientOptions></ClientOptions>
        </div>
        <div class="status-col w-full md:w-1/2 py-5 md:py-2">
            <ClientProjectTracker></ClientProjectTracker>
        </div>
    </div>
</template>
<script setup>
userLandingGreet()

definePageMeta({
    layout: 'landing',
    middleware: ['guard', 'client']
})
</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
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