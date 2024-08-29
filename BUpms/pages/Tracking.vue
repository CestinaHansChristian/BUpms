<script setup>

    // paste data here
    definePageMeta({
        layout: 'landing'
    })
    
    // data from database paste here
    const whatOrg = ref('TUPAD')
    const documentStatus = ref({
        stageOne: false,
        stageTwo: false,
        stageThree: false,
    })

</script>
<template>
    <div class="h-screen grid">
        <div class="project-icons grid">
            <TrackingProjectStage :projectStage="documentStatus"></TrackingProjectStage>
        </div>
        <div class="project-description grid place-content-center">
            <TrackingProjectMeta :organization="whatOrg"></TrackingProjectMeta>
        </div>
    </div>
</template>