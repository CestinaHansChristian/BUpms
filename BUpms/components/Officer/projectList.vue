<script setup>
    const { $pb } = useNuxtApp()
    const props = defineProps(['project_info'])
</script>
<template>
    <div v-for="(project, index) in props.project_info" :key="index">
        <div class="project-container grid md:flex md:justify-between gap-x-2 md:place-content-center md:gap-x-5">
            <div class="left-flex-container grid md:justify-around md:flex shadow-md px-5 bg-slate-100 md:rounded-b-xl rounded-t-xl p-2 shadow-gray-500 gap-x-4 md:w-full">
                <div class="project-name text-blue-700 font-semibold uppercase text-base grid md:place-items-center md:flex md:w-full md:gap-x-5">
                    <div class=" font-bold text-gray-700">
                        Activity Title:
                    </div>
                    <div class="activity-value">
                        {{ project.Title }}
                    </div>
                </div>
                <div class="meta-info-wrapper grid md:w-2/12 md:mx-2 text-sky-600 font-bold ">
                    <div class="date-wrapper text-xs md:text-base">
                        <span class="text-gray-800 font-semibold">
                            Date Created: 
                        </span>
                        {{ new Date(project.created).toLocaleDateString() }}
                    </div>
                    <div class="status-wrapper text-xs md:text-base md:grid">
                        <span class="text-gray-800 font-semibold">
                            Status:
                        </span>
                        Pending
                    </div>
                </div>
            </div>
            <div class="flex-wrapper flex shadow-md shadow-gray-500 md:rounded-tl-xl md:rounded-t-xl w-full rounded-bl-xl rounded-br-xl md:w-2/5">
                <ClientOnly>
                    <div class="project-view-wrapper cursor-pointer md:rounded-tl-xl rounded-bl-md bg-sky-500 hover:bg-sky-600 grid place-content-center px-3 text-white font-semibold w-full md:place-content-center">
                        <!-- officer 1 -->
                        <nuxt-link v-if="$pb.authStore.model?.role === 'officer1'" :to="'/officer1/' + project.id" class="gap-x-5 flex p-2">
                            <IconsMagnifyingGlass></IconsMagnifyingGlass>
                            Review
                        </nuxt-link>
                        <!-- officer 2 -->
                        <nuxt-link v-if="$pb.authStore.model?.role === 'officer2'" to="/officer2/forms" class="gap-x-5 flex p-2">
                            <IconsMagnifyingGlass></IconsMagnifyingGlass>
                            Review
                        </nuxt-link>
                    </div>
                    <div class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                        <!-- officer 1 -->
                        <div v-if="$pb.authStore.model?.role === 'officer1'" class="gap-x-5 flex md:place-items-center p-2">
                            <IconsArchieveBox></IconsArchieveBox>
                            Reject
                        </div>
                        <!-- officer 2 -->
                        <div v-if="$pb.authStore.model?.role === 'officer2'" class="gap-x-5 flex md:place-items-center p-2">
                            <IconsArchieveBox></IconsArchieveBox>
                            Reject
                        </div>
                    </div>
                </ClientOnly>
            </div>
        </div>        
    </div>
</template>