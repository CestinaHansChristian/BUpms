<script setup>
const { organization } = defineProps({
    organization: Object,
    require: true
})

// return organization name
const orgName = computed(() => {
    return organization.orgName
})

// return date sent
const dateSentAt = computed(() => {
    return organization.dateSent
})
</script>

<template>
    <div class="project-details-wrapper lg:py-5 gap-y-4 lg:flex">
        <Information :organization="organization"></Information>
        <MessageBox></MessageBox>
    </div>
</template>