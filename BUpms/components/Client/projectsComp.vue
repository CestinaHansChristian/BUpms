<template>
    <div v-for="(item, index) in project_info" :key="index" >
        <ClientOnly>
            <div v-if="item.User === $pb.authStore.model?.id" class="project-quick-status grid grid-cols-3 md:grid-cols-1 gap-y-2 py-3 place-content-start lg:grid-cols-3 border-2 border-slate-300 rounded-md bg-slate-100 mx-3">
                <div class="project-name grid px-2 text-slate-500 font-semibold md:text-lg capitalize">
                    <span class="text-sm text-slate-500">Title:</span>{{ item.Title }}
                </div>
                <div class="project-description grid px-2 text-sky-600 font-semibold md:text-lg">
                    <span class="text-sm text-slate-500">Status</span>{{ item.isArchived ? 'Archived' : 'Active' }}
                </div>
                <div class="project-description grid px-2 text-sm text-slate-500 font-semibold lg:text-xl">
                    <span class="text-sm text-slate-500">Date Created:</span>
                    <span class="text-base">{{  new Date(item.created).toLocaleDateString() }}</span>
                </div>
            </div>
            <div v-if="project_info.length === 0">
                <div class="there-are-no-archive-wrapper grid place-items-center capitalize font-italic p-5 tracking-widest border-2 border-slate-300 rounded-md bg-slate-100 mx-3 text-slate-400 text-base text-center">
                    you currently have no project/s yet
                </div>
            </div>
        </ClientOnly>
    </div>
</template>
<script setup>
    defineProps({
        project_info: Array
    })
    const {$pb} = useNuxtApp()
</script>