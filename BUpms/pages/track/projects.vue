<script setup>
    
    definePageMeta({
        layout: 'landing'
    })
</script>
<template>
    <div class="h-screen mx-2 lg:mx-5">
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
        <div class="project-list-wrapper space-y-4 h-5/6 overflow-y-scroll py-2 p-2 bg-slate-300 rounded-lg">
            <!-- add project list here -->
            <ClientProjectList></ClientProjectList>
            <ClientProjectList></ClientProjectList>
            <ClientProjectList></ClientProjectList>
            <ClientProjectList></ClientProjectList>
            <ClientProjectList></ClientProjectList>
        </div>
    </div>
</template>
<script setup>
    
</script>