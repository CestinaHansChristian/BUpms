<script setup>
// paste data here
definePageMeta({
    layout: 'landing',
    middleware: 'guard'
})
const route = useRoute()

const { data: projectStatus, status, refresh } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Status_tbl').getFirstListItem(`Project_id="${route.params.projectId}"`))

// const projectStatus = await pb.collection('Status_tbl').getFirstListItem(`Project_id="${route.params.projectId}"`)

const { data: projectData, status: projectDataStatus, refresh: projectDataRefresh } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getOne(route.params.projectId, {
    expand: 'Documents_tbl_via_Project_rel'
}))

// const projectData = await pb.collection('Projects_tbl').getOne(route.params.projectId, {
//     expand: 'Documents_tbl_via_Project_rel'
// })


onMounted(async () => {
    console.log(projectData)
    console.log(projectStatus)
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
    <div class="overflow-hidden">
        <div class="content md:pt-10 mx-1 relative">
            <div class="project-icons lg:h-full lg:pt-5 rounded-lg lg:container lg:mx-auto">
                <TrackingProjectStage :projectStage="projectStatus.stages" :projectRelId="projectStatus.Project_id"></TrackingProjectStage>
            </div>
            <div class="project-description md:pt-10">
                <div v-if="projectStatus.stages === 'stage1'" class=" p-2 rounded-lg backdrop-blur-md md:pt-10">
                    <div class="flex justify-between ">
                        <fieldset class="flex flex-col w-full h-full border-2 border-slate-300 rounded-lg shadow-inner">
                            <legend class="text-xl font-semibold text-center uppercase text-slate-700">
                                Upload your document/s
                            </legend>
                            <ClientProjectSubmit :projectId="route.params.projectId"
                                :submittedDocuments="(projectData.expand && projectData.expand.Documents_tbl_via_Project_rel) ? projectData.expand.Documents_tbl_via_Project_rel.map(doc => doc.Doc_type) : []" />
                        </fieldset>
                    </div>
                </div>
                <div class="pages pt-14">
                    <div class="project-details-wrapper lg:py-5 gap-y-4 lg:flex md:py-5 lg:gap-x-3 md:container md:mx-auto">
                        <Information :organization="projectData"></Information>
                        <MessageBox></MessageBox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>