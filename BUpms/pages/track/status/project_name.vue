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
        stageOne: false,
        stageTwo: true,
        stageThree: true,
    })

</script>
<template>
    <div class=" overflow-hidden lg:container lg:mx-auto">
        <div class="content pt-8 mx-1">
            <div class="project-icons relative grid grid-rows-2 shadow-inner lg:pt-5 bg-slate-200 shadow-slate-400 rounded-lg lg:container lg:mx-auto">
                <TrackingProjectStage :projectStage="documentStatus"></TrackingProjectStage>
            </div>
            <div class="project-description">
                <TrackingProjectMeta :organization="trackDetails"></TrackingProjectMeta>
            </div>
        </div>
    </div>
</template>