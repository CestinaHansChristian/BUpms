<script setup>
// project data
const { projectStage } = defineProps(['projectStage'])

onMounted(() => {
    console.log(projectStage)
})

const isChecked = reactive({
    active: true,
    'bg-sky-400': true,
})

const isPending = reactive({
    active: true,
    'bg-orange-400': true
})

const stageStatus = computed(() => ({
    stage1: projectStage === 'stage1' || projectStage === 'stage2' || projectStage === 'stage3' || projectStage === 'stage4',
    stage2: projectStage === 'stage2' || projectStage === 'stage3' || projectStage === 'stage4',
    stage3: projectStage === 'stage3' || projectStage === 'stage4',
    stage4: projectStage === 'stage4'
}))

const isCleared = computed(() => projectStage === 'stage3')

</script>
<template>
    <div class="main-container grid place-items-center pt-8">
        <div class="gap-x-2 md:gap-x-4 lg:gap-x-16 relative flex place-items-center font-medium text-slate-800">
            <div class="circle-stage-success-wrapper z-10 relative lg:space-y-2 ">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid">
                    <div class="circle-inner h-12 w-12 md:h-24 md:w-24 bg-sky-400 rounded-full grid place-items-center">
                        <IconsDocumentStack></IconsDocumentStack>
                    </div>
                </div>
                <div
                    class="project-stage-description absolute  w-16 md:pt-3 lg:pt-1 md:w-full tracking-tighter md:tracking-wide text-sm md:text-base uppercase md:text-center md:font-semibold">
                    Project Created
                </div>
            </div>
            <!-- first status stage one -->
            <div class="circle-stage-one-wrapper z-10 relative md:space-y-3">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full place-content-center grid">
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
                <div v-if="stageStatus.stage2"
                    class="project-stage-description md:ps-0 ps-2 absolute tracking-tighter md:tracking-wide w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Uploaded Documents
                </div>
                <div v-else
                    class="project-stage-description md:pe-5 tracking-tighter md:tracking-wide absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Upload your Documents
                </div>
            </div>
            <!-- second status stage two -->
            <div class="circle-stage-two-wrapper z-10 md:space-y-3">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid">
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
                <div v-if="stageStatus.stage3"
                    class="project-stage-description md:ps-0 ps-2 md:pe-5 absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Review Documents
                </div>
                <div v-else
                    class="project-stage-description md:pe-5 tracking-tighter md:tracking-wide absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Pending
                </div>
            </div>
            <!-- third status stage three -->
            <div class="circle-stage-three-wrapper z-10 md:space-y-3">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid">
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
                <div v-if="stageStatus.stage4"
                    class="project-stage-description md:pe-5 md:ps-0 ps-2 absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Stage Three
                </div>
                <div v-else
                    class="project-stage-description md:pe-5 tracking-tighter md:tracking-wide absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Pending
                </div>
            </div>
            <!-- Project Final Status -->
            <div class="circle-stage-approved-wrapper z-10 md:space-y-3">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid">
                    <div :class="isCleared ? 'bg-green-400' : ''"
                        class="circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                        <div v-if="isCleared" class="display-icon-check">
                            <IconsCheckIcon />
                        </div>
                        <div v-else class="display-status-icon-x">
                            <IconsExIcon />
                        </div>
                    </div>
                </div>
                <div v-if="isCleared"
                    class="project-stage-description md:ps-0 md:pe-5 ps-2 absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Passed
                </div>
                <div v-else
                    class="project-stage-description md:pe-5 absolute w-16 tracking-tighter md:tracking-wide text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Pending
                </div>
            </div>
            <div class="absolute bg-sky-700 h-3 md:h-5 w-full rounded-2xl"></div>
        </div>
    </div>
</template>