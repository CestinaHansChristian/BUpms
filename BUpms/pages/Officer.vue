<template>
    <div class="h-screen border-2 border-black">
        <div class="wrapper">
            
        </div>
    </div>
</template>
<script>
export default {
    beforeMount() {
        definePageMeta({
            layout: 'landing',
            middleware: ['guard']
        })
    }
}
</script>