<script setup>
// paste data here
userLandingGreet()
definePageMeta({
    layout: 'landing',
    middleware: ['guard', 'client']
})
const route = useRoute()
const { $pb } = useNuxtApp()

const { data: projectStatus, refresh } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Status_tbl').getFirstListItem(`Project_id="${route.params.projectId}"`))

// const projectStatus = await pb.collection('Status_tbl').getFirstListItem(`Project_id="${route.params.projectId}"`)

const { data: projectData } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getOne(route.params.projectId, {
    expand: 'Documents_tbl_via_Project_rel'
}))
// , status: projectDataStatus, refresh: projectDataRefresh

// for client tracking only
const isChecked = reactive({
    active: true,
    'bg-sky-400': true,
})

const isPending = reactive({
    active: true,
    'bg-orange-400': true
})

console.log(projectStatus)

try {
    const isDocumentUploaded = await $pb.collection('Documents_tbl').getFirstListItem(`Project_rel="${projectStatus.value.Project_id}"`, {
        expand: 'Project_rel',
    })

    const getStatusId = isDocumentUploaded.expand.Project_rel.Status

    const getProjectStatusStage = await $pb.collection('Status_tbl').getFirstListItem(`Project_id="${projectStatus.value.Project_id}"`)
    console.log(isDocumentUploaded)

    console.log(getProjectStatusStage)

    if (getProjectStatusStage.stages === 'stage1' && isDocumentUploaded.Document) {
        const statusUpdate = {
            "stages": "stage2"
        }
        console.log(statusUpdate)
        console.log(getStatusId)
        await $pb.collection('Status_tbl').update(getStatusId, statusUpdate)
        console.log('updated')
    }

} catch (error) {
    const statusUpdate = {
        "stages": "stage1"
    }
    console.log(statusUpdate)
}

// bypass tracking for client HAHAHHA
onMounted(() => {
    const refreshTracking = setTimeout(() => {
        refresh()

        clearTimeout(refreshTracking)
    }, 1000);
})

const stageStatus = computed(() => ({
    stage1: projectStatus.value.stages === 'stage1' || projectStatus.value.stages === 'stage2' || projectStatus.value.stages === 'stage3' || projectStatus.value.stages === 'stage4',
    stage2: projectStatus.value.stages === 'stage2' || projectStatus.value.stages === 'stage3' || projectStatus.value.stages === 'stage4',
    stage3: projectStatus.value.stages === 'stage3' || projectStatus.value.stages === 'stage4',
    stage4: projectStatus.value.stages === 'stage4'
}))

console.log(stageStatus.value.stage3)
const isCleared = computed(() => projectStatus.value.stages === 'stage4')
function refreshTracking() {

}

</script>
<template>
    <div class="overflow-hidden">
        <div class="content md:pt-10 mx-1 relative ">
            <div class="project-icons lg:h-full lg:pt-5 rounded-lg lg:container lg:mx-auto">
                <!-- <TrackingProjectStage :projectStage="projectStatus.stages" :projectRelId="projectStatus.Project_id">
                </TrackingProjectStage> -->
                <div class="main-container py-8 text-black">
                    <div
                        class="gap-x-2 md:gap-x-5 lg:gap-x-16 space-y-10 mx-5 relative place-content-center md:flex md:place-items-center font-medium text-slate-800">
                        <div
                            class="circle-stage-success-wrapper z-10 lg:space-y-2 md:pt-10 grid grid-cols-2 md:relative md:grid-cols-none">
                            <div
                                class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid ">
                                <div :class="stageStatus.stage1 ? isChecked : isPending"
                                    class="circle-inner h-12 w-12 md:h-24 md:w-24  rounded-full grid place-items-center">
                                    <div v-if="stageStatus.stage1" class="display-icon-check">
                                        <IconsCheckIcon />
                                    </div>
                                    <div v-else class="display-status-icon-x">
                                        <IconsExIcon />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="absolute top-8 left-1/3 transform z-10 -translate-x-1/2 -translate-y-1/2 bg-sky-600 rounded-full h-4 w-4 md:hidden">
                            </div>
                            <div v-if="stageStatus.stage1"
                                class="project-stage-description md:absolute md:translate-y-14 bottom-0 bg-slate-100 flex place-items-center md:ps-0 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base">
                                Project Created
                            </div>
                            <div v-else
                                class="no-created-project md:absolute md:translate-y-14 bottom-0 bg-slate-100 flex place-items-center md:ps-0 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base">
                                Project Not Created
                            </div>
                        </div>
                        <!-- first status stage one -->
                        <div class="circle-stage-one-wrapper z-10 md:space-y-3 grid grid-cols-2 md:grid-cols-none">
                            <div
                                class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full place-content-center grid ">
                                <div :class="stageStatus.stage2 ? isChecked : isPending"
                                    class="circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                                    <div v-if="stageStatus.stage2" class="display-icon-check">
                                        <IconsCheckIcon />
                                    </div>
                                    <div v-else class="display-status-icon-x">
                                        <IconsExIcon />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="absolute top-32 left-1/3 transform z-10 -translate-x-1/2 -translate-y-1/2 bg-sky-600 rounded-full h-4 w-4 md:hidden">
                            </div>
                            <div v-if="stageStatus.stage2"
                                class="project-stage-description  flex place-items-center md:ps-3 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base md:absolute md:translate-y-14 bottom-0 md:w-20">
                                Document/s Uploaded
                            </div>
                            <div v-else
                                class="project-stage-description flex place-items-center md:ps-3 tracking-tighter md:tracking-wide text-sm md:font-semibold md:text-center md:text-base md:absolute md:translate-y-14 bottom-0 md:w-20">
                                Upload Documents
                            </div>
                        </div>
                        <!-- second status stage two -->
                        <div class="circle-stage-two-wrapper z-10 md:space-y-3 grid grid-cols-2 md:grid-cols-none">
                            <div
                                class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full place-content-center grid ">
                                <div :class="stageStatus.stage3 ? isChecked : isPending"
                                    class="circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                                    <div v-if="stageStatus.stage3" class="display-icon-check">
                                        <IconsCheckIcon />
                                    </div>
                                    <div v-else class="display-status-icon-x">
                                        <IconsExIcon />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="absolute top-56 left-1/3 transform z-10 -translate-x-1/2 -translate-y-1/2 bg-sky-600 rounded-full h-4 w-4 md:hidden">
                            </div>
                            <div v-if="stageStatus.stage3"
                                class="project-stage-description flex place-items-center md:ps-4 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base md:absolute md:translate-y-14 bottom-0 md:w-20">
                                Attachment Verified
                            </div>
                            <div v-else
                                class="project-stage-description flex place-items-center md:grid md:ps-4 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base md:absolute md:translate-y-14 bottom-0 md:w-20">
                                Verification on Queue
                            </div>
                        </div>
                        <!-- third status stage three -->
                        <div class="circle-stage-three-wrapper z-10 md:space-y-3 grid grid-cols-2 md:grid-cols-none">
                            <div
                                class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid ">
                                <div :class="stageStatus.stage4 ? isChecked : isPending"
                                    class="circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center ">
                                    <div v-if="stageStatus.stage4" class="display-icon-check">
                                        <IconsCheckIcon />
                                    </div>
                                    <div v-else class="display-status-icon-x">
                                        <IconsExIcon />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="absolute top-80 left-1/3 transform z-10 -translate-x-1/2 -translate-y-1/2 bg-sky-600 rounded-full h-4 w-4 md:hidden">
                            </div>
                            <div v-if="stageStatus.stage4"
                                class="project-stage-description flex place-items-center md:ps-4 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base md:absolute md:translate-y-14 bottom-0 md:w-20">
                                Officer Approved
                            </div>
                            <div v-else
                                class="project-stage-description flex place-items-center md:ps-4 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base md:absolute md:translate-y-14 md:-bottom-7 md:w-20">
                                Approval on Queue
                            </div>
                        </div>
                        <!-- Project Final Status -->
                        <div class="circle-stage-approved-wrapper z-10 md:space-y-3 grid grid-cols-2 md:grid-cols-none">
                            <div
                                class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid ">
                                <div :class="isCleared ? 'bg-green-400' : 'bg-orange-400'"
                                    class="circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                                    <div v-if="isCleared" class="display-icon-check">
                                        <IconsCheckIcon />
                                    </div>
                                    <div v-else class="display-status-icon-x">
                                        <IconsExIcon />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="absolute bottom-2 left-1/3 transform z-10 -translate-x-1/2 -translate-y-1/2 bg-sky-600 rounded-full h-4 w-4 md:hidden">
                            </div>
                            <div v-if="isCleared"
                                class="project-stage-description flex place-items-center md:ps-4 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base md:absolute md:translate-y-14 bottom-0 md:w-20">
                                Project Approved
                            </div>
                            <div v-else
                                class="project-stage-description flex place-items-center md:ps-4 tracking-tighter md:tracking-wide text-sm md:font-semibold  md:text-center md:text-base md:absolute md:translate-y-14 md:-bottom-7 md:w-20">
                                Status on Queue
                            </div>
                        </div>
                        <div
                            class="absolute left-1/3 top-0 -translate-x-1/2 -translate-y-10 bg-sky-400 h-full w-1 md:h-4 md:w-10/12 md:top-1/4 rounded-2xl md:translate-y-1/3 md:left-1/2 md:rounded-lg lg:w-8/12 xl:w-6/12">
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-description md:pt-10">
                <div v-if="projectStatus.stages === 'stage1'" class=" p-2 rounded-lg backdrop-blur-md md:pt-10">
                    <div class="flex justify-between ">
                        <fieldset
                            class="flex-col w-full h-full border-2 border-slate-300 rounded-lg shadow-inner grid md:container md:mx-auto">
                            <!-- <legend class="md:text-xl font-semibold text-center uppercase text-slate-700">
                                Upload your document/s
                            </legend> -->
                            <ClientProjectSubmit @isSubmittedRefresh="refreshTracking()"
                                :projectId="route.params.projectId"
                                :submittedDocuments="(projectData.expand && projectData.expand.Documents_tbl_via_Project_rel) ? projectData.expand.Documents_tbl_via_Project_rel.map(doc => doc.Doc_type) : []" />
                        </fieldset>
                    </div>
                </div>
                <div class="pages pt-14">
                    <div
                        class="project-details-wrapper lg:py-5 gap-y-4 lg:flex md:py-5 lg:gap-x-3 md:container md:mx-auto">
                        <Information :organization="projectData"></Information>
                        <MessageBox></MessageBox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>