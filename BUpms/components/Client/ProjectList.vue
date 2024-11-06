<script setup>
const pb = usePocketbase()
const props = defineProps(['project'])

const projectStatus = await pb.collection('Status_tbl').getOne(props.project.Status)

async function archiveProject() {
    await pb.collection('Projects_tbl').update(props.project.id, {
        isArchived: true
    })
}

async function rejectProject() {
    await pb.collection('Projects_tbl').update(props.project.id, {
        isRejected: true
    })
}

</script>
<template>
    <div>
        <div class="project-container grid md:flex md:justify-between gap-x-2 md:place-content-center md:gap-x-5">
            <div class="left-flex-container grid gap-y-3 justify-between md:flex shadow-md bg-slate-200 md:rounded-b-xl rounded-t-xl p-2 shadow-gray-500 gap-x-4 md:w-full">
                <div class="project-name text-blue-700 font-semibold uppercase place-content-center text-base md:mx-5 md:w-full">
                    <div class="grid md:gap-y-2">
                        <div class="project-title text-gray-800">
                            Project Title
                        </div>
                        <div class="pe-3 font-bold text-sky-600 md:ps-2">
                            {{ project.Title }}
                        </div>
                    </div>
                    <!-- <span class="pe-3 font-bold text-gray-700">{{ project.Title }}</span> -->
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
                        {{ projectStatus.stages === 'stage1' ? "Pending" : projectStatus.stages === 'stage2' ?
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
                <ClientOnly>
                    <nuxt-link v-if="pb.authStore.model?.role === 'student'" :to="'/client/projects/' + project.id"
                        class="gap-x-5 grid p-2 project-view-wrapper cursor-pointer md:rounded-tl-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 place-content-center px-3 text-white font-semibold w-full">
                        <div class="btn-label-wrapper grid place-content-center gap-3">
                            <div class="grid place-content-center">
                                <IconsMagnifyingGlass></IconsMagnifyingGlass>
                            </div>
                            <div class="text">
                                View
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link v-if="pb.authStore.model?.role === 'officer'" :to="'/review/forms/' + project.id"
                        class="gap-x-5 grid p-2 project-view-wrapper cursor-pointer md:rounded-tl-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 place-content-center px-3 text-white font-semibold w-full">
                        <div class="btn-label-wrapper grid place-content-center gap-3">
                            <div class="grid place-content-center">
                                <IconsMagnifyingGlass></IconsMagnifyingGlass>
                            </div>
                            <div class="text">
                                Review
                            </div>
                        </div>
                    </nuxt-link>
                    <button v-if="pb.authStore.model?.role === 'student'" @click="archiveProject"
                        class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                        <div class="btn-label-wrapper grid gap-3">
                            <div class="grid place-content-center">
                                <IconsArchieveBox></IconsArchieveBox>
                            </div>
                            <div class="text">
                                Cancel
                            </div>
                        </div>
                    </button>
                    <nuxt-link v-if="pb.authStore.model?.role === 'officer'" :to="'/review/forms/' + project.id"
                        class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                        <div class="btn-label-wrapper grid gap-3">
                            <div class="grid place-content-center">
                                <IconsArchieveBox></IconsArchieveBox>
                            </div>
                            <div class="text">
                                Reject
                            </div>
                        </div>
                    </nuxt-link>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>