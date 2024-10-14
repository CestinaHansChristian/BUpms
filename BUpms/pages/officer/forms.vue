<template>
    <div class="pb-5">
        <div class="container mx-auto space-y-2 grid pt-5  place-content-center">
            <fieldset class="wrapper-one mx-3 md:mx-5 grid border-2 rounded-xl md:gap-y-4 space-y-4">
                <legend class="card-heading p-1 rounded-t-xl ps-3 uppercase font-medium md:text-xl text-center">
                    Project Information
                </legend>
                <div class="project-content md:mx-3 space-y-3 md:space-y-4">
                    <div class="project-name-wrapper mx-2 md:space-y-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            Title of Actvity:
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            Random Project
                        </div>
                    </div>
                    <div class="when-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            When
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            October 17,2024
                        </div>
                    </div> 
                    <div class="who-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            Who
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            Students
                        </div>
                    </div>
                    <div class="contact-num-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            Contact num:
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            0987654321
                        </div>
                    </div>
                    <div class="event-details-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            Event Classification
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            Type
                        </div>
                    </div>
                    <div class="document-details-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            document type
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            Type
                        </div>
                    </div>
                    <div class="btn-controller-wrapper pb-5">
                        <div class="approve-btn-wrapper flex justify-between mx-2 md:mx-5">
                            <nuxt-link to="/officer/projects">
                                <div class="reject-design-btn bg-orange-400 cursor-pointer hover:bg-orange-600  uppercase p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 text-slate-50 tracking-wider">
                                    Go Back
                                </div>
                            </nuxt-link>
                           <div class="control-btn flex lg:gap-x-5 gap-x-2">
                                <nuxt-link to="/officer/project_name">
                                    <div @click="approveProposal" class="approve-design-btn uppercase cursor-pointer bg-blue-400 hover:bg-sky-700 text-slate-50 p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 hover:text-white tracking-wider">
                                        Approve
                                    </div>
                                </nuxt-link>
                                <nuxt-link to="/officer/projects">
                                    <div class="reject-design-btn bg-red-400 cursor-pointer hover:bg-red-700  uppercase p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 text-slate-50 tracking-wider">
                                        Reject
                                    </div>
                                </nuxt-link>
                           </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="wrapper-two grid gap-4 md:flex md:mx-5 mx-3">
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

    function approveProposal() {
        console.log('Approved')
    }
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