<template>
    <div>
        Admin
    </div>
</template>
<script>
export default {
    name: 'AdminLayout',
    beforeMount() {
        definePageMeta({
            layout: 'landing',
            middleware: ['guard', 'admin']
        })
    },

}
</script>