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
    <div class=" overflow-hidden md:h-screen">
        <div class="top-heading-wrapper-go-back flex absolute top-2">
            <!-- <div class="return-btn text-red-400 text-center font-medium tracking-wider text-xl rounded-md md:p-1 px-2 mx-2 border-2 border-red-600 cursor-pointer hover:text-white hover:bg-red-400 hover:border-red-300">
                Go Back
            </div> -->
        </div>
        <div class="content pt-8 mx-1">
            <div class="project-icons grid grid-rows-2">
                <TrackingProjectStage :projectStage="documentStatus"></TrackingProjectStage>
            </div>
            <div class="project-description">
                <TrackingProjectMeta :organization="trackDetails"></TrackingProjectMeta>
            </div>
        </div>
    </div>
</template>