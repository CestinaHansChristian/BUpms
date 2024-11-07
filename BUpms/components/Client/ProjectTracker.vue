<template>
    <div class="wrapper">
        <div class="header-wrapper sticky top-0 text-white tracking-widest uppercase font-semibold text-2xl text-center bg-blue-300 p-3 rounded-t-xl">
            Recent Projects
        </div>
        <div class="relative project-list-container h-72 md:h-screen space-y-2 overflow-y-scroll py-1 bg-slate-200">
            <div class="sticky hidden top-0 lg:flex lg:justify-between lg:mx-10 font-semibold text-slate-600 bg-slate-200">
                <div class="project-title-wrapper">
                    Title
                </div>
                <div class="project-status-wrapper">
                    Status
                </div>
                <div class="project-date-created">
                    Generated
                </div>
            </div>
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
    background-color: #63a1e7;
    border-radius: 3px;
}

::-webkit-scrollbar-track {
    background-color: #92c0d5;
}
</style>