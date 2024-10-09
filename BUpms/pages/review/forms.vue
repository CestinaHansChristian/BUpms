<template>
    <div class="">
        <div class="container mx-auto space-y-2 grid pt-5  place-content-center">
            <div class="wrapper-one mx-3 md:mx-5 grid border-2 rounded-xl md:gap-y-4">
                <div class="card-heading bg-sky-400 text-white tracking-widest p-1 rounded-t-xl ps-3 uppercase font-medium">
                    Project Information
                </div>
                <div class="project-content md:mx-3 space-y-5 ">
                    <div class="project-name-wrapper mx-2">
                        <div class="project-label ps-2 text-base font-semibold uppercase md:text-xl">
                            Project Title:
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg">
                            Random Project
                        </div>
                    </div>
                    <div class="org-wrapper mx-2">
                        <div class="project-label ps-2 text-base font-semibold uppercase md:text-lg">
                            Involved Department
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-xl">
                            Random Department
                        </div>
                    </div>
                    <div class="btn-controller-wrapper pb-5">
                        <div class="approve-btn-wrapper flex justify-between mx-2 md:mx-5">
                            <nuxt-link to="/track/status/project_name">
                                <div class="approve-design-btn uppercase cursor-pointer hover:bg-sky-600 hover:border-sky-700 text-slate-500 px-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl p-1 hover:text-white tracking-wider  border-2 border-slate-300">
                                    Approve
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/officer/projectlist">
                                <div class="reject-design-btn bg-red-400 cursor-pointer hover:bg-red-600 hover:border-red-700 uppercase px-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl p-1 text-white tracking-wider  border-2 border-red-300">
                                    Reject
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/officer/projectlist">
                                <div class="reject-design-btn bg-orange-600 cursor-pointer hover:bg-orange-600 hover:border-orange-700 uppercase px-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl p-1 text-white tracking-wider  border-2 border-orange-300">
                                    Go Back
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper-two grid gap-2 md:flex">
                <OfficerClientDoculist></OfficerClientDoculist>
                <MessageBox></MessageBox>
            </div>
        </div>
    </div>
</template>
<script setup>
    // Admin composable documents
    documentsReview()
    definePageMeta({
        layout: 'landing',
    })
</script>
<style scoped>
    ::-webkit-scrollbar {
        width: 12px;
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