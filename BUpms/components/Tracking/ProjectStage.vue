<script setup>
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
        return projectStage.stageOne ? isChecked : isPending
    })

    const projectTwoIsActive = computed(()=> {
        return projectStage.stageTwo ? isChecked : isPending
    })

    const projectThreesActive = computed(()=> {
        return projectStage.stageThree ? isChecked : isPending
    })


</script>
<template>
    {{ projectOneIsActive }}
    <div class="main-container grid place-items-center">
        <div class="gap-x-2 relative flex place-items-center">
            <div class="circle-stage-success-wrapper z-10">
                <div class="circle bg-sky-600 h-14 w-14 rounded-full  place-content-center grid">
                    <div class="circle-inner h-12 w-12 bg-sky-400 rounded-full grid place-items-center">
                        Start
                    </div>
                </div>
                <div class="project-stage-description absolute w-20 text-xs uppercase">
                    Proposal Recieved
                </div>
            </div>
            <div class="circle-stage-one-wrapper z-10">
                <div class="circle bg-sky-600 h-14 w-14 rounded-full  place-content-center grid">
                    <div :class="projectOneIsActive" class="circle-inner h-12 w-12 rounded-full grid place-items-center">
                        1
                    </div>
                </div>
                <div class="project-stage-description ps-2 absolute w-16 text-xs uppercase">
                    Under Review Stage One
                </div>
            </div>
            <div class="circle-stage-two-wrapper z-10">
                <div class="circle bg-sky-600 h-14 w-14 rounded-full  place-content-center grid">
                    <div :class="projectTwoIsActive" class="circle-inner h-12 w-12  rounded-full grid place-items-center">
                        2
                    </div>
                </div>
                <div class="project-stage-description ps-2 absolute w-16 text-xs uppercase">
                    Under Review Stage Two
                </div>
            </div>
            <div class="circle-stage-three-wrapper z-10">
                <div class="circle bg-sky-600 h-14 w-14 rounded-full  place-content-center grid">
                    <div :class="projectThreesActive" class="circle-inner h-12 w-12 rounded-full grid place-items-center">
                        3
                    </div>
                </div>
                <div class="project-stage-description ps-2 absolute w-16 text-xs uppercase">
                    Under Review Stage Three
                </div>
            </div>
            <div class="circle-stage-approved-wrapper z-10">
                <div class="circle bg-sky-600 h-14 w-14 rounded-full  place-content-center grid">
                    <div class="circle-inner h-12 w-12 bg-sky-800 rounded-full grid place-items-center">
                        Final
                    </div>
                </div>
                <div class="project-stage-description absolute h-12 w-12 text-xs uppercase">
                    Project Approved
                </div>
            </div>
            <div class="absolute bg-sky-700 h-3 w-full rounded-xl"></div>
        </div>
    </div>
</template>
