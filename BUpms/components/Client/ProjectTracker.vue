<template>
    <div class="wrapper border-4 rounded-2xl w-full h-fit md:h-[530px] lg:h-[600px]">
        <div
            class="header-wrapper sticky top-0 text-sky-500 tracking-widest py-5 uppercase font-semibold text-xl text-center bg-gray-200 p-3 rounded-t-xl">
            Project Status
        </div>
        <div v-if="status === 'success'"
            class="project-list-container h-72 md:h-[450px] lg:h-[500px] space-y-2 overflow-y-scroll py-1 bg-slate-100 rounded-md">
            <!-- <ClientProjectsComp :project_info="projects"></ClientProjectsComp> -->
            <div v-for="(item, index) in projects" :key="index" class="py-1">
                <ClientOnly>
                    <div v-if="item.User === $pb.authStore.model?.id"
                        class="project-quick-status grid grid-cols-3 md:grid-cols-1 gap-y-2 py-2 place-content-start lg:grid-cols-3 border-2 border-slate-300 rounded-md bg-slate-200 mx-3">
                        <div class="project-name grid px-2 text-slate-500 font-semibold md:text-lg capitalize">
                            <span class=" text-slate-800 md:text-base ">Project:</span>
                            <div class="wrapper md:text-sm text-slate-500 w-full break-words ">
                                {{ item.Title }}
                            </div>
                        </div>
                        <div class="project-description grid px-2 font-semibold md:text-lg">
                            <span class=" text-slate-800 md:text-base">Status:</span>
                            <div class="text-sm"
                                :class="item.isArchived ? 'text-red-500' : item.isCompleted ? 'text-green-600' : 'text-blue-700'">
                                {{ item.isArchived ? 'Canceled' : item.isCompleted ? 'Completed' : 'Active' }}
                            </div>
                        </div>
                        <div class="project-description grid px-2 text-slate-500 font-semibold lg:text-xl">
                            <span class="text-base text-slate-800">Created:</span>
                            <span class="text-sm text-slate-500 font-normal ">{{ new Date(item.created).toLocaleString()
                                }}</span>
                        </div>
                    </div>
                    <div v-if="projects.length === 0">
                        <div
                            class="there-are-no-archive-wrapper grid place-items-center capitalize font-italic p-5 tracking-widest border-2 border-slate-300 rounded-md bg-slate-100 mx-3 text-slate-400 text-base text-center">
                            you currently have no project/s yet
                        </div>
                    </div>
                </ClientOnly>
            </div>
        </div>
        <div v-else
            class="project-list-container h-72 md:h-screen flex flex-col gap-4 p-4 items-center space-y-2 overflow-y-scroll py-1 bg-slate-200">
            <div class="flex min-w-full">
                <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
                <div class="space-y-2">
                    <USkeleton class="h-4 w-[250px]" />
                    <USkeleton class="h-4 w-[200px]" />
                </div>
            </div>
            <div class="flex min-w-full">
                <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
                <div class="space-y-2">
                    <USkeleton class="h-4 w-[250px]" />
                    <USkeleton class="h-4 w-[200px]" />
                </div>
            </div>
            <div class="flex min-w-full">
                <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
                <div class="space-y-2">
                    <USkeleton class="h-4 w-[250px]" />
                    <USkeleton class="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const { data: projects, status, refresh } = useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getFullList({
    sort: '-created',
    expand: 'User,Status_tbl',
    filter: `User="${nuxtApp.$pb.authStore.model?.id}"`
}))

// const projects = await pb.collection('Projects_tbl').getFullList({
//     sort: '-created',
//     expand: 'User_tbl'
// })
</script>
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
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #0369a1;
}
</style>