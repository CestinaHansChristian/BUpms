<template>
    <div>
        Officer
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