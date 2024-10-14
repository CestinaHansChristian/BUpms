<script setup>
    const pb = usePocketbase()
</script>
<template>
    <div class="project-container grid md:flex md:justify-between gap-x-2 md:place-content-center md:gap-x-5" >
            <div class="left-flex-container grid justify-around md:flex shadow-md bg-slate-100 md:rounded-b-xl rounded-t-xl p-2 md:pe-5 shadow-gray-500 gap-x-4 md:w-full">
                <div class="project-name text-blue-700 font-semibold uppercase text-base grid place-items-center md:flex md:w-full md:gap-x-5">
                    <div class=" font-bold text-gray-700 text-center">
                        Activity Title:
                    </div>
                    <div class="activity-value">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div class="meta-info-wrapper grid md:w-2/12 md:mx-2 text-sky-600 font-bold ">
                    <div class="date-wrapper text-xs md:text-base">
                        <span class="text-gray-800 font-semibold">
                            Date Created: 
                        </span>
                        09/02/2024
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
                        <nuxt-link v-if="pb.authStore.model?.role === 'officer'" to="/officer/forms" class="gap-x-5 flex p-2">
                            <IconsMagnifyingGlass></IconsMagnifyingGlass>
                            Review
                        </nuxt-link>
                        <nuxt-link v-if="pb.authStore.model?.role === 'student'" to="/track/status/project_name" class="gap-x-5 flex p-2">
                            <IconsMagnifyingGlass></IconsMagnifyingGlass>
                            View
                        </nuxt-link>
                    </div>
                    <div class="project-remove-wrapper cursor-pointer md:rounded-tr-xl rounded-br-xl hover:bg-red-600 bg-red-500 grid place-content-center px-2 text-white font-semibold w-full md:place-content-center">
                        <div v-if="pb.authStore.model?.role === 'officer'" class="gap-x-5 flex md:place-items-center p-2">
                            <IconsArchieveBox></IconsArchieveBox>
                            Reject
                        </div>
                        <div v-if="pb.authStore.model?.role === 'student'" class="gap-x-5 flex md:place-items-center p-2">
                            <IconsArchieveBox></IconsArchieveBox>
                            Cancel
                        </div>
                    </div>
                </ClientOnly>
            </div>
        </div>
</template>