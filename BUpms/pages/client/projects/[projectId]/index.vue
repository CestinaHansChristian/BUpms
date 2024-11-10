<script setup>
// paste data here
definePageMeta({
    layout: 'landing',
    middleware: 'guard'
})
const pb = usePocketbase()
const route = useRoute()

const projectStatus = await pb.collection('Status_tbl').getFirstListItem(`Project_id="${route.params.projectId}"`)

const projectData = await pb.collection('Projects_tbl').getOne(route.params.projectId, {
    expand: 'Documents_tbl_via_Project_rel'
})

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
    <div class="overflow-hidden lg:container lg:mx-auto">
        <div class="content pt-8 mx-1 relative">
            <div class="project-icons relative grid grid-rows-2 lg:pt-5 rounded-lg lg:container lg:mx-auto">
                <TrackingProjectStage :projectStage="projectStatus.stages"></TrackingProjectStage>
            </div>
            <div class="project-description">
                <div v-if="projectStatus.stages === 'stage1'" class=" p-2 rounded-lg backdrop-blur-md">
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
                <TrackingProjectMeta :organization="projectData"></TrackingProjectMeta>
            </div>
        </div>
    </div>
</template>