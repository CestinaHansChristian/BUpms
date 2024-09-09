<script setup>
    officerLanding()
    definePageMeta({
        layout: 'landing'
    })
    function logout() {
        console.log('close')
    }
</script>
<template>
    <div class="h-screen mx-2 overflow-hidden">
        <div class="heading-wrapper flex justify-between">
            <div class="heading-wrapper text-xl text-sky-500 font-bold tracking-wider uppercase py-3 md:text-3xl">
                Project List
            </div>
            <div class="return-btn-wrapper btn-wrapper text-xl text-red-400 font-bold tracking-wider uppercase py-2 grid place-items-center">
                <div class="logout-wrapper grid place-items-center bg-red-400 px-3 rounded-lg  hover:bg-red-500 p-1">
                    <div @click="logout" class="logout-btn md:text-xl md:tracki rounded-md tracking-wider text-sm uppercase font-semibold text-white cursor-pointer p-1">
                        Logout
                    </div>
                </div>
            </div>
        </div>
        <div class="project-list-wrapper space-y-4 h-5/6 overflow-y-scroll py-2 p-2 bg-slate-300 rounded-lg">
            <!-- add project list here -->
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
            <ProjectListTracking></ProjectListTracking>
        </div>
    </div>
</template>