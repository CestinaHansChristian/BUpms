<template>
    <div class="wrapper">
        <div
            class="header-wrapper sticky top-0 text-white tracking-widest uppercase font-semibold text-2xl text-center bg-blue-300 p-3 rounded-t-xl">
            Recent Projects
        </div>
        <div v-if="status === 'success'"
            class="project-list-container h-72 md:h-screen space-y-2 overflow-y-scroll py-1 bg-slate-200">
            <!-- <ClientProjectsComp :project_info="projects"></ClientProjectsComp> -->
            <div v-for="(item, index) in projects" :key="index">
                <ClientOnly>
                    <div v-if="item.User === $pb.authStore.model?.id"
                        class="project-quick-status grid grid-cols-3 md:grid-cols-1 gap-y-2 py-3 place-content-start lg:grid-cols-3 border-2 border-slate-300 rounded-md bg-slate-100 mx-3">
                        <div class="project-name grid px-2 text-slate-500 font-semibold md:text-lg capitalize">
                            <span class="text-sm text-slate-500">Title:</span>{{ item.Title }}
                        </div>
                        <div class="project-description grid px-2 text-sky-600 font-semibold md:text-lg">
                            <span class="text-sm text-slate-500">Status</span>{{ item.isArchived ? 'Archived' : 'Active'
                            }}
                        </div>
                        <div class="project-description grid px-2 text-sm text-slate-500 font-semibold lg:text-xl">
                            <span class="text-sm text-slate-500">Date Created:</span>
                            <span class="text-base">{{ new Date(item.created).toLocaleDateString() }}</span>
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
    expand: 'Users_tbl,Status_tbl'
}))

// const projects = await pb.collection('Projects_tbl').getFullList({
//     sort: '-created',
//     expand: 'User_tbl'
// })
</script>
<style scoped>
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-thumb {
    background-color: #63a1e7;
    border-radius: 3px;
}

::-webkit-scrollbar-track {
    background-color: #92c0d5;
}
</style>