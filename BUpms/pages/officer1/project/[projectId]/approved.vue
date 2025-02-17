<script setup>

// paste data here
definePageMeta({
    layout: 'landing',
    middleware: ['guard', 'officer1']
})

const route = useRoute()
const { data: projectStatus, status, refresh } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Status_tbl').getFirstListItem(`Project_id="${route.params.projectId}"`))

const { data: projectData, status: projectDataStatus, refresh: projectDataRefresh } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getOne(route.params.projectId, {

}))

</script>
<template>
    <div class="overflow-hidden container mx-auto">
        <div class="content md:pt-8 mx-1">
            <div class="project-icons relative md:py-16 lg:pt-5 rounded-lg lg:container lg:mx-auto">
                <TrackingProjectStage :projectStage="projectStatus.stages" :projectRelId="projectStatus.Project_id">
                </TrackingProjectStage>
            </div>
            <div class="project-description max-w-screen-lg container mx-auto xl:py-4">
                <information :organization="projectData"></information>
            </div>
        </div>
    </div>
</template>