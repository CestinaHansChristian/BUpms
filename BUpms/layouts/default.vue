<template>
    <div class="wrapper-main w-fit px-4 py-2 font-bold text-lg text-black bg-white fixed top-0 left-1/2 rounded-b-xl shadow-md z-[100]"
        v-if="isLoading">
        Loading {{ progress.toFixed() }}%
    </div>
    <div class="bg-slate-200">
        <slot />
        <Footer>
        </Footer>
    </div>
    <UNotifications />
</template>
<script setup>
setUserfonts()
const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
    duration: 1000,
    throttle: 200,
    // This is how progress is calculated by default
    estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
})

</script>

<style>
    .wrapper-main {
        font-family: "Roboto Condensed";
    }
</style>