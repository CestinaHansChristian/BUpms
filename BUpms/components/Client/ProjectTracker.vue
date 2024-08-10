<template>
    <div class="sm:grid-cols-1 rounded-lg relative overflow-y-scroll">
        <div class="header-wrapper sticky top-0 text-sky-600 font-semibold text-2xl text-center bg-slate-200 p-3">
            Project Status
        </div>
        <div class="project-list-container md:h-screen h-60 space-y-1">
            <ClientProjectList :project_info="projects"></ClientProjectList>
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
                    {name: 'Project Loki', status: 'Pending'},
                    {name: 'Project Recon', status: 'Pending'},
                    {name: 'Project Roshan', status: 'Pending'},
                    {name: 'Project Drawing', status: 'Pending'},
                    {name: 'Project Sniper', status: 'Pending'},
                    {name: 'Project Vengeful', status: 'Pending'},
                    {name: 'Project Loki', status: 'Pending'},
                    {name: 'Project Recon', status: 'Pending'},
                ]
            }
        },
    }
</script>