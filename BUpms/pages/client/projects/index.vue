<script setup>

const { $pb } = useNuxtApp()
const { data: projects, status, refresh } = useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getFullList({
    sort: '-created',
    expand: 'User_tbl,Status'
}))

definePageMeta({
    layout: 'landing',
    middleware: 'guard'
})

async function archiveProject(project_id) {
    try {
        await $pb.collection('Projects_tbl').update(project_id, {
            isArchived: true
        })
        console.log(project_id)
        refresh()
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
    <div class="mx-2">
        <div class="heading-wrapper flex justify-between">
            <div class="return-btn-wrapper btn-wrapper text-xl text-red-400 font-bold tracking-wider uppercase py-3">
                <nuxt-link to="/client" class=" md:text-3xl cursor-pointer hover:text-red-600">
                    Return
                </nuxt-link>
            </div>
            <div class="heading-wrapper text-xl text-sky-500 font-bold tracking-wider uppercase py-3 md:text-3xl">
                Project List
            </div>
        </div>
        <div v-if="status === 'success'"
            class="project-list-wrapper space-y-4 overflow-y-scroll h-screen py-2 p-2 bg-slate-300 rounded-lg">
            <!-- add project list here -->
            <div v-for="(project, index) in projects" :key="index">
                <!-- {{ project.Status }} -->
                <div v-if="project.User === $pb.authStore.model?.id">
                    <!-- add !project.isCompleted to display completed -->
                    <div v-if="!project.isArchived "
                        class="project-container grid md:flex md:justify-between gap-x-2 md:place-content-center md:gap-x-5">
                        <div
                            class="left-flex-container grid justify-between gap-y-2 md:flex shadow-md bg-slate-200 md:rounded-b-xl rounded-t-xl p-2 shadow-gray-500 gap-x-4 md:w-full">
                            <div
                                class="project-name text-blue-700 font-semibold uppercase text-base grid md:items-center md:ps-10 md:w-full md:gap-x-5 relative">
                                <div class="capitalize tracking-wider font-bold text-gray-700 md:absolute md:top-0 md:pt-5 md:text-xl">
                                    Project Title:
                                </div>
                                <div class="font-semibold  md:pt-8">
                                    {{ project.Title }}
                                </div>
                            </div>
                            <div class="meta-info-wrapper grid md:w-2/12 md:mx-2 text-sky-600 font-bold">
                                <div class="date-wrapper text-xs md:text-base">
                                    <span class="text-gray-800 font-semibold">
                                        Date Created:
                                    </span>
                                    {{ new Date(project.created).toLocaleDateString() }}
                                </div>
                                <div class="status-wrapper text-xs md:text-base grid">
                                    <span class="text-gray-800 font-semibold">
                                        Remarks:
                                    </span>
                                    <div v-if="project.isCompleted && project.expand.Status.stages === 'stage4'" class="text-green-600 font-bold">
                                        Completed
                                    </div>
                                    <div v-else :class="project.expand.Status.stages === 'stage1' ? 'text-red-600 text-sm' : project.expand.Status.stages === 'stage2' ? 'text-orange-600 text-sm' : project.expand.Status.stages === 'stage3'? 'text-yellow-600 text-sm': 'text-green-600'">
                                        {{project.expand.Status.stages === 'stage1'? 'Attachment Pending': project.expand.Status.stages === 'stage2'? 'Verifying Documents': project.expand.Status.stages === 'stage3'? 'Waiting for approval': 'Completed'}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- {{project}} -->
                        <div class="flex-wrapper flex shadow-md shadow-gray-500 md:rounded-tl-xl md:rounded-t-xl w-full rounded-bl-xl rounded-br-xl md:w-2/5">
                            <button v-if="project.isCompleted" :class="{'pointer-events-none': project.isCompleted}" class="gap-x-5 grid p-3 project-view-wrapper cursor-pointer rounded-lg bg-green-500 hover:bg-lime-500 place-content-center px-3 text-white font-semibold w-full">
                                <div class="btn-label-wrapper flex gap-x-3">
                                    <div>
                                        <IconsCheckIcon></IconsCheckIcon>
                                    </div>
                                </div>
                            </button>
                            <button v-else class="gap-x-5 grid p-3 project-view-wrapper cursor-pointer md:rounded-tl-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 place-content-center px-3 text-white font-semibold w-full">
                                <nuxt-link
                                    :to="'/client/projects/' + project.id">
                                    <div class="btn-label-wrapper flex gap-x-3">
                                        <IconsMagnifyingGlass></IconsMagnifyingGlass>
                                        <div>
                                            Review
                                        </div>
                                    </div>
                                </nuxt-link>
                            </button>
                            <button :class="{ 'hidden': project.isCompleted }" @click="archiveProject(project.id)"
                                class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                                <div class="btn-label-wrapper flex gap-x-3">
                                    <IconsArchieveBox></IconsArchieveBox>
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
</template>
<style scoped>
::-webkit-scrollbar {
    width: 10px;
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