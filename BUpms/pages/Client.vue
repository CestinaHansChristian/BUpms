<template>
    <div class="md:flex grid m-1 gap-y-5 md:py-10">
        <div class="actions-col w-full grid">
            <ClientOptions></ClientOptions>
        </div>
        <div class="status-col grid w-full md:w-1/2 rounded-md">
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

<style scoped>
.buttons:hover {
    background-color: rgb(94, 152, 206);
    color: white
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #4ca5d8;
    border-radius: 30px
}
</style>