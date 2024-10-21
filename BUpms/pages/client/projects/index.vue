<script setup>

const pb = usePocketbase()

const projects = await pb.collection('Projects_tbl').getFullList({
    sort: '-created'
})

definePageMeta({
    layout: 'landing'
})
</script>
<template>
    <div class="mx-2 lg:container lg:mx-auto">
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
        <div class="project-list-wrapper space-y-4 overflow-y-scroll h-screen py-2 p-2 bg-slate-300 rounded-lg ">
            <!-- add project list here -->
            <ClientProjectList v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>