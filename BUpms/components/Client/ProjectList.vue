<script setup>
const { $pb} = useNuxtApp()
const props = defineProps(['project'])

// const projectStatus = await pb.collection('Status_tbl').getOne(props.project.Status)

// hide project archived in list

const isProjectArchived = reactive({
    'hidden': true
})

async function archiveProject(project_id) {
    await $pb.collection('Projects_tbl').update(project_id, {
        isArchived: true
    })
    console.log(project_id)
}

async function rejectProject() {
    await $pb.collection('Projects_tbl').update(props.project.id, {
        isRejected: true
    })
}

</script>
<template>
    <ClientOnly>
        <div v-for="(project, index) in props.project" :key="index">
            <!-- {{ project.Status }} -->
            <div v-if="project.User === $pb.authStore.model?.id" >
                <div class="project-container grid md:flex md:justify-between gap-x-2 md:place-content-center md:gap-x-5">
                    <div class="left-flex-container grid justify-between gap-y-2 md:flex shadow-md bg-slate-200 md:rounded-b-xl rounded-t-xl p-2 shadow-gray-500 gap-x-4 md:w-full">
                        <div class="project-name text-blue-700 font-semibold  text-base grid md:items-center md:-space-y-14 md:mx-5 md:w-full">
                            <div class="capitalize tracking-wider font-bold md:text-2xl">
                                project Title
                            </div>
                            <div class="font-semibold text-gray-700 ps-2 md:text-lg">
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
                            <div class="status-wrapper text-xs md:text-base md:grid">
                                <span class="text-gray-800 font-semibold">
                                    Status:
                                </span>
                                {{ project.Status === 'stage1' ? "Pending" : project.Status === 'stage2' ?
                                    "In Progress" : "Completed" }}
                            </div>
                            <div v-if="project.isRejected" class="text-red-600 font-bold">
                                Rejected
                            </div>
                            <div v-else-if="project.isArchived" class="text-gray-600 font-bold">
                                Archived
                            </div>
                            <div v-else class="text-green-600 font-bold">
                                Active
                            </div>
                        </div>
                    </div>
                    <div class="flex-wrapper flex shadow-md shadow-gray-500 md:rounded-tl-xl md:rounded-t-xl w-full rounded-bl-xl rounded-br-xl md:w-2/5">
                        <nuxt-link v-if="$pb.authStore.model?.role === 'student'" :to="'/client/projects/' + project.id"
                                class="gap-x-5 grid p-3 project-view-wrapper cursor-pointer md:rounded-tl-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 place-content-center px-3 text-white font-semibold w-full">
                                <div class="btn-label-wrapper flex gap-x-3">
                                    <IconsMagnifyingGlass></IconsMagnifyingGlass>
                                    View
                                </div>
                        </nuxt-link>
                        <nuxt-link v-if="$pb.authStore.model?.role === 'officer'" :to="'/review/forms/' + project.id"
                                class="gap-x-5 grid p-3 project-view-wrapper cursor-pointer md:rounded-tl-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 place-content-center px-3 text-white font-semibold w-full">
                            <div class="btn-label-wrapper flex gap-x-3">
                                <IconsMagnifyingGlass></IconsMagnifyingGlass>
                                Review
                            </div>
                        </nuxt-link>
                        <button v-if="$pb.authStore.model?.role === 'student'" @click="archiveProject(project.id)"
                                class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                            <div class="btn-label-wrapper flex gap-x-3">
                                <IconsArchieveBox></IconsArchieveBox>
                                Cancel
                            </div>
                        </button>
                        <nuxt-link v-if="$pb.authStore.model?.role === 'officer'" :to="'/review/forms/' + project.id"
                                class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                            <div class="btn-label-wrapper flex gap-x-3">
                                <IconsArchieveBox></IconsArchieveBox>
                                Reject
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>