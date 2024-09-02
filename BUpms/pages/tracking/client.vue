<script setup>

    definePageMeta({
        layout: 'landing'
    })
</script>
<template>
    <div class="h-screen mx-2 lg:mx-5">
        <div class="heading-wrapper text-xl text-sky-500 font-bold tracking-wider uppercase py-3 md:text-3xl">
            Project List
        </div>
        <div class="project-list-wrapper space-y-4 h-5/6 overflow-y-scroll py-2 p-2 border-2 border-black">
            <!-- add project list here -->
            <ClientProjectListTracking></ClientProjectListTracking>
            <ClientProjectListTracking></ClientProjectListTracking>
            <ClientProjectListTracking></ClientProjectListTracking>
            <ClientProjectListTracking></ClientProjectListTracking>
            <ClientProjectListTracking></ClientProjectListTracking>
            <ClientProjectListTracking></ClientProjectListTracking>
            <ClientProjectListTracking></ClientProjectListTracking>
            <ClientProjectListTracking></ClientProjectListTracking>
        </div>
    </div>
</template>