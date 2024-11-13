<script setup>
    userLandingGreet()
    definePageMeta({
        layout: 'landing'
    })

    const { $pb } = useNuxtApp()

    const {data: fetchProjects} = await useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Projects_tbl').getFullList({
        sort: '-created',
        expand: 'User_tbl'
    }))
    function logout() {
        console.log('close')
    }

    console.log(fetchProjects)
</script>
<template>
    <div class="mx-2 overflow-hidden">
        <OfficerNavbar></OfficerNavbar>
        <div class="history-content-wrapper">
            <div class="project-list-wrapper space-y-4 h-screen overflow-y-scroll py-2 p-2 bg-slate-200 rounded-lg">
                <!-- add project list here -->
                <OfficerProjectList :project_info="fetchProjects"></OfficerProjectList>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<style scoped>
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #0369a1;
        border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: #7dd3fc;
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #0369a1; 
    }
</style>