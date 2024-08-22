<script setup>

// paste data here
definePageMeta({
    layout: 'landing',
    middleware: ['guard']
})

const whatOrg = ref('TUPAD')
const documentStatus = ref({
    stageOne: true,
    stageTwo: true,
    stageThree: false,
})

</script>
<template>
    <div class="h-screen grid">
        <div class="project-icons grid">
            <TrackingProjectStage :project-stage="documentStatus"></TrackingProjectStage>
        </div>
        <div class="project-description grid place-content-center">
            <TrackingProjectMeta :organization="whatOrg"></TrackingProjectMeta>
        </div>
    </div>
</template>