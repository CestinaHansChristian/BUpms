<script setup>

const { $pb } = useNuxtApp()
const { data: projects, status, refresh } = useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getFullList({
    sort: '-created',
    expand: 'User_tbl,Status',
    filter: `User="${$pb.authStore.model?.id}"`
}))

userLandingGreet()
definePageMeta({
    layout: 'landing',
    middleware: ['guard', 'client']
})

async function archiveProject(project_id) {
    try {
        await $pb.collection('Projects_tbl').update(project_id, {
            isArchived: true
        })
        // console.log(project_id)
        refresh()
    } catch (error) {
        // console.log(error)
    }
}
</script>
<template>
    <div class="md:mx-5 lg:mx-20 xl:mx-32">
        <div class="mx-2">
            <div class="heading-wrapper flex justify-between">
                <div
                    class="return-btn-wrapper btn-wrapper text-xl text-red-400 font-bold tracking-wider uppercase py-3">
                    <nuxt-link to="/client" class=" md:text-3xl cursor-pointer hover:text-red-600">
                        Return
                    </nuxt-link>
                </div>
                <div class="heading-wrapper text-xl text-sky-500 font-bold tracking-wider uppercase py-3 md:text-3xl">
                    Project List
                </div>
            </div>
            <div v-if="status === 'success'"
                class="project-list-wrapper space-y-4 overflow-y-scroll py-2 p-2 bg-slate-300 rounded-lg md:max-h-screen">
                <!-- add project list here -->
                <div v-for="(project, index) in projects" :key="index">
                    <!-- {{ project.Status }} -->
                    <div v-if="project.User === $pb.authStore.model?.id">
                        <!-- add !project.isCompleted to display completed -->
                        <div v-if="!project.isArchived"
                            class="project-container grid md:flex md:justify-between gap-x-2 md:place-content-center md:gap-x-5 ">
                            <div
                                class="left-flex-container grid justify-between gap-y-2 md:flex shadow-md bg-slate-200 md:rounded-b-xl rounded-t-xl p-2 shadow-gray-500 gap-x-4 md:w-full">
                                <div
                                    class="project-name text-blue-700 font-semibold uppercase text-base md:flex md:gap-x-5 md:ps-5 relative">
                                    <div
                                        class="uppercase tracking-wider font-bold text-gray-700 md:text-xl md:content-center">
                                        Project Name:
                                    </div>
                                    <div class="font-semibold md:content-center">
                                        {{ project.Title }}
                                    </div>
                                </div>
                                <div class="meta-info-wrapper grid md:w-2/12 md:mx-2 text-sky-600 font-bold">
                                    <div class="date-wrapper text-xs md:text-base">
                                        <span class="text-gray-800 font-semibold">
                                            Date Created:
                                        </span>
                                        {{ new Date(project.created).toLocaleString() }}
                                    </div>
                                    <div class="status-wrapper text-xs md:text-base grid">
                                        <span class="text-gray-800 font-semibold">
                                            Remarks:
                                        </span>
                                        <div v-if="project.isCompleted && project.expand.Status.stages === 'stage4'"
                                            class="text-green-600 font-bold">
                                            Completed
                                        </div>
                                        <div v-else
                                            :class="project.expand.Status.stages === 'stage1' ? 'text-red-600 text-sm' : project.expand.Status.stages === 'stage2' ? 'text-orange-600 text-sm' : project.expand.Status.stages === 'stage3' ? 'text-yellow-600 text-sm' : project.expand.Status.stages === 'returned' ? 'text-red-700 text-sm' : 'text-green-600'">
                                            {{ project.expand.Status.stages === 'stage1' ? 'Attachment Pending' :
                                                project.expand.Status.stages === 'stage2' ? 'Verifying Documents' :
                                                    project.expand.Status.stages === 'stage3' ? 'Waiting for approval' :
                                                        project.expand.Status.stages === 'returned' ? "Returned" :
                                                            'Completed'
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- {{project}} -->
                            <div
                                class="flex-wrapper flex shadow-md shadow-gray-500 md:rounded-tl-xl md:rounded-t-xl w-full rounded-bl-xl rounded-br-xl md:w-2/5">
                                <button v-if="project.isCompleted"
                                    :class="{ 'pointer-events-none': project.isCompleted }"
                                    class="gap-x-5 grid p-3 project-view-wrapper cursor-pointer rounded-lg bg-green-500 hover:bg-lime-500 place-content-center px-3 text-white font-semibold w-full">
                                    <div class="btn-label-wrapper gap-x-3 grid">
                                        <span class="text-lg font-bold uppercase">Completed</span><span
                                            class="text-sm">Please bring the attached document hardcopy for OSAS
                                            verification</span>
                                    </div>
                                    <div
                                        class="last-updated-at-wrapper text-xs text-slate-100 lg:flex lg:place-content-center lg:pt-3">
                                        <div class="label-wrapper">Updated At:</div>
                                        <div class="updated-wrapper-date">
                                            {{ new Date(project.updated).toLocaleString() }}
                                        </div>
                                    </div>
                                </button>
                                <nuxt-link :to="'/client/projects/' + project.id" v-else
                                    class="gap-x-5 grid p-1 project-view-wrapper cursor-pointer md:rounded-tl-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 place-content-center px-3 text-white font-semibold w-full">
                                    <div class="wrapper flex justify-center">
                                        <IconsMagnifyingGlass></IconsMagnifyingGlass>
                                    </div>
                                    <div>
                                        Review
                                    </div>
                                </nuxt-link>
                                <button :class="{ 'hidden': project.isCompleted }" @click="archiveProject(project.id)"
                                    class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                                    <div class="btn-label-wrapper grid place-content-center gap-x-3">
                                        <div class="wrapper flex justify-center">
                                            <IconsArchieveBox></IconsArchieveBox>
                                        </div>
                                        Cancel
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else
                class="project-list-wrapper space-y-4 overflow-y-scroll h-screen flex justify-center items-center py-2 p-2 bg-slate-300 rounded-lg">
                <h1>Loading...</h1>
            </div>
        </div>
    </div>
</template>
<style>
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: #0369a1;
    border-radius: 20px;
}

::-webkit-scrollbar-track {
    background-color: #7dd3fc;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #0369a1;
}
</style>