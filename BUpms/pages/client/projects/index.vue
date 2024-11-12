<script setup>

const { data: projects, status, refresh } = useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getFullList({
    sort: '-created',
    expand: 'User_tbl'
}))

// const projects = await pb.collection('Projects_tbl').getFullList({
//     sort: '-created',
//     expand: 'User_tbl'
// })

definePageMeta({
    layout: 'landing',
    middleware: 'guard'
})
</script>
<template>
    <div class="mx-2">
        <div class="heading-wrapper flex justify-between">
            <div class="return-btn-wrapper btn-wrapper text-xl text-red-400 font-bold tracking-wider uppercase py-3">
                <nuxt-link to="/client" class=" md:text-3xl cursor-pointer hover:text-red-600">
                    Go back
                </nuxt-link>
            </div>
            <div class="heading-wrapper text-xl text-sky-500 font-bold tracking-wider uppercase py-3 md:text-3xl">
                Project List
            </div>
        </div>
        <div v-if="status === 'success'"
            class="project-list-wrapper space-y-4 overflow-y-scroll h-screen py-2 p-2 bg-slate-300 rounded-lg">
            <!-- add project list here -->
            <ClientProjectList :project="projects" />
        </div>
        <div v-else
            class="project-list-wrapper space-y-4 overflow-y-scroll h-screen flex justify-center items-center py-2 p-2 bg-slate-300 rounded-lg">
            <h1>Loading...</h1>
        </div>
    </div>
</template>