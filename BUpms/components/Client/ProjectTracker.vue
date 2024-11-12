<template>
    <div class="wrapper">
        <div
            class="header-wrapper sticky top-0 text-white tracking-widest uppercase font-semibold text-2xl text-center bg-blue-300 p-3 rounded-t-xl">
            Recent Projects
        </div>
        <div v-if="status === 'success'"
            class="project-list-container h-72 md:h-screen space-y-2 overflow-y-scroll py-1 bg-slate-200">
            <ClientProjectsComp :project_info="projects"></ClientProjectsComp>
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
    expand: 'User_tbl'
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