<template>
    <div v-for="(item, index) in project_info" :key="index" class=" project-quick-status flex place-content-around border-2 border-orange-500 rounded-md bg-slate-100 mx-3">
        <div class="project-name grid place-items-center p-1 text-slate-500 font-semibold md:text-lg ">
            {{ item.name }}
        </div>
        <div class="project-description grid place-items-center p-1 text-sky-600 font-semibold md:text-xl">
            {{ item.status }}
        </div>
    </div>
</template>
<script>
    export default {
        props:['project_info']
    }
</script>