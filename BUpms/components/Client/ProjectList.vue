<template>
    <div v-for="(item, index) in project_info" :key="index" class=" project-quick-status flex place-content-around border-2 border-gray-500 rounded-md ">
        <div class="project-name grid place-items-center p-1 text-slate-500 font-semibold md:text-2xl ">
            {{ item.name }}
        </div>
        <div class="project-description grid place-items-center p-1 text-sky-600 font-semibold md:text-2xl">
            {{ item.status }}
        </div>
    </div>
</template>
<script>
    export default {
        props:['project_info']
    }
</script>