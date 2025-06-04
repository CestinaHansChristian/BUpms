<script setup>
userLandingGreet()
definePageMeta({
    layout: 'landing',
    middleware: ['guard', 'officer2']
})

const { $pb } = useNuxtApp()

const { data: fetchProjects, status, refresh } = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getFullList({
    sort: '+created',
    expand: 'User_tbl,Status'
}))
function logout() {
    // console.log('close')
}

async function officerRejectThisProject(projectId) {
    try {
        const data = {
            'isArchived': true
        }
        await $pb.collection('Projects_tbl').update(projectId, data)
        // console.log('Archived')
        refresh()
    } catch (error) {
        // console.log(error)
    }
}

// console.log(fetchProjects)
</script>
<template>
    <div class="mx-2 lg:mx-32">
        <div class="mx-0.5 lg:mx-5 lg:-mb-0">
            <OfficerNavbar></OfficerNavbar>
            <div class="history-content-wrapper h-screen lg:h-screen xl:my-3">
                <div class="project-list-wrapper space-y-2 overflow-y-scroll py-2 h-screen p-2 bg-slate-200 rounded-lg">
                    <div v-for="(project, index) in fetchProjects" :key="index">
                        <div v-if="project.isArchived === false && project.expand.Status.stages === 'stage3'"
                            class="project-container grid md:flex md:justify-between gap-x-2 md:place-content-center md:gap-x-5">
                            <div
                                class="left-flex-container grid xl:justify-around xl:flex shadow-md px-2 bg-slate-100 md:rounded-b-xl rounded-t-xl p-2 shadow-gray-500 gap-x-4 md:w-full md:space-y-3">
                                <div
                                    class="project-name text-blue-700 font-semibold uppercase lg:flex lg:items-center md:text-base md:w-full md:gap-x-2">
                                    <div class="wrapper grid content-center xl:gap-y-5">
                                        <div
                                            class="uppercase tracking-wider font-bold text-gray-700 md:text-2xl md:content-center lg:w-auto">
                                            Project Name:
                                        </div>
                                        <div class="font-semibold md:content-center md:text-2xl xl:indent-5">
                                            {{ project.Title }}
                                        </div>
                                    </div>
                                </div>
                                <div class="meta-info-wrapper grid xl:w-2/12 xl:mx-2 text-sky-600 font-bold">
                                    <div class="date-wrapper text-xs md:text-base xl:text-sm">
                                        <div class="creation-date-wrapper">
                                            <span class="text-gray-800 font-semibold">
                                                Date Created:
                                            </span>
                                            {{ new Date(project.created).toLocaleString() }}
                                        </div>
                                        <div class="updated-date-wrapper">
                                            <span class="text-gray-800 font-semibold">
                                                Last Updated:
                                            </span>
                                            {{ new Date(project.updated).toLocaleString() }}
                                        </div>
                                    </div>
                                    <div class="status-wrapper text-xs md:text-base xl:text-sm md:grid">
                                        <span class="text-gray-800 font-semibold">
                                            Remarks:
                                        </span>
                                        <div
                                            :class="project.expand.Status.stages === 'stage1' ? 'text-red-400 text-xs' : project.expand.Status.stages === 'stage2' ? 'text-yellow-600 text-sm' : ''">
                                            {{ project.expand.Status.stages === 'stage1' ? "Missing Documents" :
                                                project.expand.Status.stages === 'stage2' ? "Pending" :
                                                    project.expand.Status.stages === 'stage3' ? "For Final Approval" :
                                                        'Completed'
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex-wrapper flex shadow-md shadow-gray-500 md:rounded-tl-xl md:rounded-t-xl w-full rounded-bl-xl rounded-br-xl md:w-64">
                                <nuxt-link :to="'/officer2/project/' + project.id"
                                    class="project-view-wrapper cursor-pointer md:rounded-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 grid place-content-center p-3 text-white font-semibold w-full md:place-content-center">
                                    <!-- officer 1 -->
                                    <div class="gap-x-5 grid place-content-center">
                                        <div class="wrapper flex justify-center">
                                            <IconsMagnifyingGlass></IconsMagnifyingGlass>
                                        </div>
                                        <div class="wrapper">
                                            View
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<style scoped>
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