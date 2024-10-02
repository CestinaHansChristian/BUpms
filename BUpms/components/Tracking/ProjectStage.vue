<script setup>
    // project data
    const {projectStage} = defineProps({
        projectStage: Object,
        require: true
    })
    const isChecked = reactive({
        active: true,
        'bg-sky-400': true,
    })
    const isPending = reactive({
        active: true,
        'bg-orange-400': true
    })
    const projectOneIsActive = computed(()=> {
        return projectStage.stageOne ? isChecked : false
    })

    const projectTwoIsActive = computed(()=> {
        return projectStage.stageTwo ? isChecked : false
    })

    const projectThreesActive = computed(()=> {
        return projectStage.stageThree ? isChecked : false
    })

    const isCleared = computed(()=> {
        return projectStage.stageOne && projectStage.stageTwo && projectStage.stageThree ?  isChecked : false

    })

</script>
<template>
    <div class="main-container grid place-items-center pt-10 pb-4">
        <div class="gap-x-2 md:gap-x-4 lg:gap-x-8 2xl:gap-x-20 relative flex place-items-center">
            <div class="circle-stage-success-wrapper z-10 relative lg:space-y-2">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid">
                    <div class="circle-inner h-12 w-12 md:h-24 md:w-24 bg-sky-400 rounded-full grid place-items-center">
                        <IconsDocumentStack></IconsDocumentStack>
                    </div>
                </div>
                <div class="project-stage-description absolute w-16 md:pt-1 md:w-full tracking-tighter md:tracking-wide text-sm md:text-base uppercase md:text-center md:font-semibold">
                    Received
                </div>
            </div>
            <!-- first status stage one -->
            <div class="circle-stage-one-wrapper z-10 relative md:space-y-3">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full place-content-center grid">
                    <div :class="projectOneIsActive" class="bg-orange-400 circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                        <div v-if="projectStage.stageOne" class="display-icon-check">
                            <IconsCheckIcon/>
                        </div>
                        <!-- <div v-if="projectStage.stageOne == false" class="display-status-icon-x">
                            <IconsExIcon/>
                        </div> -->
                    </div>
                </div>
                <div v-if="projectStage.stageOne" class="project-stage-description ps-2 absolute tracking-tighter md:tracking-wide w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Stage One
                </div>
                <div v-if="projectStage.stageOne == false" class="project-stage-description tracking-tighter md:tracking-wide absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Pending on Review Stage One
                </div>
            </div>
            <!-- second status stage two -->
            <div class="circle-stage-two-wrapper z-10 md:space-y-3">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid">
                    <div v-if="projectStage.stageOne === true" :class="projectTwoIsActive" class="bg-orange-400 circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                        <div v-if="projectStage.stageTwo" class="display-icon-check">
                            <IconsCheckIcon/>
                        </div>
                        <!-- <div v-if="projectStage.stageTwo == false" class="display-status-icon-x">
                            <IconsExIcon/>
                        </div> -->
                    </div>
                    <div v-else :class="projectTwoIsActive" class="circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                        <div v-if="projectStage.stageTwo" class="display-icon-check">
                            <IconsCheckIcon/>
                        </div>
                        <div v-if="projectStage.stageTwo == false" class="display-status-icon-x">
                            <IconsExIcon/>
                        </div>
                    </div>
                </div>
                <div v-if="projectStage.stageTwo" class="project-stage-description ps-2 absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Stage Two
                </div>
                <div v-if="projectStage.stageTwo == false" class="project-stage-description tracking-tighter md:tracking-wide absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Pending on Review Stage Two
                </div>
            </div>
            <!-- third status stage three -->
            <div class="circle-stage-three-wrapper z-10 md:space-y-3">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid">
                    <div v-if="projectStage.stageTwo === true" :class="projectThreesActive" class="bg-orange-400 circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                        <div v-if="projectStage.stageThree" class="display-icon-check">
                            <IconsCheckIcon/>
                        </div>
                        <!-- <div v-if="projectStage.stageThree == false" class="display-status-icon-x">
                            <IconsExIcon/>
                        </div> -->
                    </div>
                    <div v-else :class="projectThreesActive" class="circle-inner h-12 w-12 rounded-full md:h-24 md:w-24 grid place-items-center">
                        <div v-if="projectStage.stageThree" class="display-icon-check">
                            <IconsCheckIcon/>
                        </div>
                        <div v-if="projectStage.stageThree == false" class="display-status-icon-x">
                            <IconsExIcon/>
                        </div>
                    </div>
                </div>
                <div v-if="projectStage.stageThree" class="project-stage-description ps-2 absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Stage Three
                </div>
                <div v-if="projectStage.stageThree == false" class="project-stage-description tracking-tighter md:tracking-wide absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Pending on Review Stage Three
                </div>
            </div>
            <!-- Project Final Status -->
            <div class="circle-stage-approved-wrapper z-10 md:space-y-3">
                <div class="circle bg-sky-600 h-14 w-14 md:h-28 md:w-28 rounded-full  place-content-center grid">
                    <div v-if="isCleared"  class="bg-green-400 circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                        <div v-if="isCleared" class="display-icon-check">
                            <IconsCheckIcon/>
                        </div>
                        <!-- <div v-if="isCleared == false" class="display-status-icon-x">
                            <IconsExIcon/>
                        </div> -->
                    </div>
                    <div v-if="isCleared === false" :class="isCleared" class="circle-inner h-12 w-12 md:h-24 md:w-24 rounded-full grid place-items-center">
                        <div v-if="isCleared" class="display-icon-check">
                            <IconsCheckIcon/>
                        </div>
                        <div v-if="isCleared == false" class="display-status-icon-x">
                            <IconsExIcon/>
                        </div>
                    </div>
                </div>
                <div v-if="isCleared" class="project-stage-description ps-2 absolute w-16 text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Passed
                </div>
                <div v-if="isCleared === false" class="project-stage-description absolute w-16 tracking-tighter md:tracking-wide text-sm md:font-semibold md:w-32 uppercase md:text-center md:text-base">
                    Pending
                </div>
            </div>
            <div class="absolute bg-sky-700 h-3 md:h-5 w-full rounded-2xl"></div>
        </div>
    </div>
</template>