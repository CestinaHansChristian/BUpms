<script setup>

    // paste data here
    definePageMeta({
        layout: 'landing'
    })

    const route = useRoute()
    const { data: projectStatus, status, refresh } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Status_tbl').getFirstListItem(`Project_id="${route.params.projectId}"`))

    const { data: projectData, status: projectDataStatus, refresh: projectDataRefresh } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getOne(route.params.projectId, {
    
    }))

    console.log(projectStatus)
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
        <div class="content pt-8 mx-1">
            <div class="project-icons relative h-screen lg:pt-5 rounded-lg lg:container lg:mx-auto">
                <TrackingProjectStage :projectStage="projectStatus.stages" :projectRelId="projectStatus.Project_id"></TrackingProjectStage>
            </div>
            <div class="project-description">
                <information :organization="projectData"></information>
            </div>
        </div>
    </div>
</template>