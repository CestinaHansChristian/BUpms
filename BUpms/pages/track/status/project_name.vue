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
    <div class="overflow-hidden lg:container lg:mx-auto">
        <div class="content pt-8 mx-1 relative">
            <div class="project-name top-5 md:top-7 absolute md:mx-5 lg:mx-10">
                <!-- project name -->
                 <!-- <span class="font-normal text-sm text-blue-800 md:text-xl lg:text-2xl">
                    Project 6
                 </span> -->
            </div>
            <div class="project-icons relative grid grid-rows-2 lg:pt-5 rounded-lg lg:container lg:mx-auto">
                <TrackingProjectStage :projectStage="documentStatus"></TrackingProjectStage>
            </div>
            <div class="project-description">
                <TrackingProjectMeta :organization="trackDetails"></TrackingProjectMeta>
            </div>
        </div>
    </div>
</template>