<template>
    <div class="wrapper">
        <div class="header-wrapper sticky top-0 text-white tracking-widest uppercase font-semibold text-2xl text-center bg-sky-300 p-3 rounded-t-xl">
            Project Status
        </div>
        <div class="project-list-container h-96 md:h-screen space-y-2 overflow-y-scroll py-1 bg-slate-200">
            <ClientProjectsComp :project_info="projects"></ClientProjectsComp>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                projects: [
                    {name: 'Project Recon', status: 'Pending'},
                    {name: 'Project Roshan', status: 'Pending'},
                    {name: 'Project Drawing', status: 'Pending'},
                    {name: 'Project Sniper', status: 'Pending'},
                    {name: 'Project Vengeful', status: 'Pending'},
                    {name: 'Project Loki', status: 'Pending'},
                    {name: 'Project Recon', status: 'Pending'},
                    {name: 'Project Roshan', status: 'Pending'},
                    {name: 'Project Drawing', status: 'Pending'},
                    {name: 'Project Sniper', status: 'Pending'},
                    {name: 'Project Vengeful', status: 'Pending'},
                    {name: 'Project Loki', status: 'Pending'},
                    {name: 'Project Recon', status: 'Pending'},
                    {name: 'Project Roshan', status: 'Pending'},
                    {name: 'Project Drawing', status: 'Pending'},
                    {name: 'Project Sniper', status: 'Pending'},
                    {name: 'Project Vengeful', status: 'Pending'},
                    {name: 'Project Loki', status: 'Pending'},
                    {name: 'Project Recon', status: 'Pending'},
                    {name: 'Project Roshan', status: 'Pending'},
                    {name: 'Project Drawing', status: 'Pending'},
                    {name: 'Project Sniper', status: 'Pending'},
                    {name: 'Project Vengeful', status: 'Pending'},
                    {name: 'Project Loki', status: 'Pending'}
                ]
            }
        },
    }
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