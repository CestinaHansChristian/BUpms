<script setup>
userLandingGreet()
definePageMeta({
    layout: 'landing',
    middleware: ['guard','officer1']
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
    <div class="mx-2 overflow-hidden">
        <OfficerNavbar></OfficerNavbar>
        <div class="history-content-wrapper">
            <div class="project-list-wrapper space-y-4 h-screen overflow-y-scroll py-2 p-2 bg-slate-200 rounded-lg">
                <div v-for="(project, index) in fetchProjects" :key="index">
                    <div v-if="project.isArchived === false && project.expand.Status.stages === 'stage2'"
                        class="project-container grid md:flex md:justify-between gap-x-2 md:place-content-center md:gap-x-5">
                        <div
                            class="left-flex-container grid md:justify-around md:flex shadow-md px-5 bg-slate-100 md:rounded-b-xl rounded-t-xl p-2 shadow-gray-500 gap-x-4 md:w-full">
                            <div
                                class="project-name text-blue-700 font-semibold uppercase md:flex text-base md:w-full md:gap-x-2">
                                <div
                                    class="uppercase tracking-wider font-bold text-gray-700 md:text-xl md:content-center md:w-28 lg:w-auto">
                                    Project Name:
                                </div>
                                <div class="font-semibold md:content-center">
                                    {{ project.Title }}
                                </div>
                            </div>
                            <div class="meta-info-wrapper grid md:w-2/12 md:mx-2 text-sky-600 font-bold ">
                                <div class="date-wrapper text-xs md:text-base">
                                    <span class="text-gray-800 font-semibold">
                                        Date Created:
                                    </span>
                                    {{ new Date(project.created).toLocaleDateString() }}
                                </div>
                                <div class="status-wrapper text-xs md:text-base md:grid">
                                    <span class="text-gray-800 font-semibold">
                                        Remarks:
                                    </span>
                                    <div :class="project.expand.Status.stages === 'stage1' ? 'text-red-400 text-xs' : project.expand.Status.stages === 'stage2' ? 'text-yellow-600 text-sm' : ''">
                                        {{ project.expand.Status.stages === 'stage1' ? "Missing Documents" :
                                        project.expand.Status.stages === 'stage2' ? "Pending" :
                                            project.expand.Status.stages === 'stage3' ? "For Final Approval" : 'Completed' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex-wrapper flex shadow-md shadow-gray-500 md:rounded-tl-xl md:rounded-t-xl w-full rounded-bl-xl rounded-br-xl md:w-2/5">
                            <ClientOnly>
                                <div
                                    class="project-view-wrapper cursor-pointer md:rounded-tl-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 grid place-content-center px-3 text-white font-semibold w-full md:place-content-center">
                                    <!-- officer 1 -->
                                    <button>
                                        <nuxt-link v-if="$pb.authStore.model?.role === 'officer1'"
                                            :to="'/officer1/project/' + project.id" class="gap-x-5 grid place-content-center">
                                            <div class="wrapper flex justify-center">
                                                <IconsMagnifyingGlass></IconsMagnifyingGlass>
                                            </div>
                                            <div class="wrapper">
                                                Review
                                            </div>
                                        </nuxt-link>
                                    </button>
                                </div>
                                <div
                                    class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                                    <!-- officer 1 -->
                                    <button @click="officerRejectThisProject(project.id)"
                                        v-if="$pb.authStore.model?.role === 'officer1'"
                                        class="gap-x-5 md:place-content-center-center py-3 grid place-content-center">
                                        <div class="wrapper flex justify-center">
                                            <IconsArchieveBox></IconsArchieveBox>
                                        </div>
                                        <div class="wrapper">
                                            Reject
                                        </div>
                                    </button>
                                </div>
                            </ClientOnly>
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