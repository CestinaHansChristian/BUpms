<script setup>
    // paste data here
    definePageMeta({
        layout: 'landing'
    })
    
    // data from database paste here
    const trackDetails = ref({
        orgName: 'Circuits',
        dateSent: '08/30/2024'
    })
    const documentStatus = ref({
        stageOne: true,
        stageTwo: true,
        stageThree: true,
    })

</script>
<template>
    <div class="grid gap-5">
        <div class="project-icons grid grid-rows-2">
            <TrackingProjectStage :projectStage="documentStatus"></TrackingProjectStage>
        </div>
        <div class="project-description grid">
            <TrackingProjectMeta :organization="trackDetails"></TrackingProjectMeta>
        </div>
    </div>
</template>