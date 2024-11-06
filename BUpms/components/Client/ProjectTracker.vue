<template>
    <div class="wrapper">
        <div class="header-wrapper sticky top-0 text-white tracking-widest uppercase font-semibold text-2xl text-center bg-sky-300 p-3 rounded-t-xl">
            Recent Projects
        </div>
        <div class="project-list-container h-96 md:h-screen space-y-2 overflow-y-scroll py-1 bg-slate-200">
            <ClientProjectsComp :project_info="projects"></ClientProjectsComp>
        </div>
    </div>
</template>
<script setup>
    const pb = usePocketbase()
    const projects = await pb.collection('Projects_tbl').getFullList({
        sort: '-created',
        expand: 'User_tbl'
    })
</script>
<style scoped>
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-thumb {
    background-color: #358cf0;
    border-radius: 3px;
    
}

::-webkit-scrollbar-track {
    background-color: #7dd3fc;
}

::-webkit-scrollbar-thumb:hover {
    background: #daa61a; 
}
</style>