<template>
    <div class="pb-5 ">
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
                            <div class="approve-design-btn uppercase cursor-pointer hover:bg-sky-600 hover:border-sky-700 bg-sky-400 px-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl p-1 text-white tracking-wider  border-2 border-sky-300">
                                Approve
                            </div>
                            <div class="reject-design-btn bg-red-400 cursor-pointer hover:bg-red-600 hover:border-red-700 uppercase px-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl p-1 text-white tracking-wider  border-2 border-red-300">
                                Reject
                            </div>
                            <div class="reject-design-btn bg-orange-600 cursor-pointer hover:bg-orange-600 hover:border-orange-700 uppercase px-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl p-1 text-white tracking-wider  border-2 border-orange-300">
                                Go Back
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper-two grid gap-y-2 md:flex">
                <div class="org-data-wrapper mx-3 grid md:ms-5">
                    <div class="card border-2 rounded-xl">
                        <div class="card-heading bg-sky-400 text-white tracking-widest p-1 rounded-t-xl ps-3 uppercase font-medium">
                            Client Documents
                        </div>
                        <div class="card-body mx-2">
                            <div class="overflow-wrapper h-36 md:h-52 overflow-y-scroll tracking-wider space-y-2 my-2">
                                <!-- component -->
                                <OfficerDownloadDocument></OfficerDownloadDocument>
                                <OfficerDownloadDocument></OfficerDownloadDocument>
                                <OfficerDownloadDocument></OfficerDownloadDocument>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment-box-wrapper grid mx-3 md:me-5 h-full border-2 rounded-xl gap-y-2">
                    <div class="comment-box-wrapper bg-sky-400 text-white tracking-widest p-1 rounded-t-xl ps-3 uppercase font-medium">
                        Comment Box
                    </div>
                    <div class="comment-content-wrapper mx-2">
                        <div class="display-message overflow-y-scroll h-32 bg-sky-400 rounded-md space-y-2 py-1">
                            <!-- message component -->
                            <div class="from-client-msg-wrapper flex grid-cols-2 gap-x-3 m-1 p-2 bg-slate-100 rounded-md">
                                <div class="icon-wrapper grid place-content-center ps-2">
                                    <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                                </div>
                                <div class="text-msg grid place-items-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                                </div>
                            </div>
                            <div class="from-client-msg-wrapper flex justify-between gap-x-3 m-1 bg-slate-100 rounded-md">
                                <div class="text-msg w-full ps-2 grid place-items-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                                </div>
                                <div class="icon-wrapper grid place-content-center pe-2 p-2">
                                    <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                                </div>
                            </div>
                            <div class="from-client-msg-wrapper flex justify-between gap-x-3 m-1 bg-slate-100 rounded-md">
                                <div class="text-msg w-full ps-2 grid place-items-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                                </div>
                                <div class="icon-wrapper grid place-content-center pe-2 p-2">
                                    <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="send-btn-control grid p-3 bg-orange-400 rounded-b-lg">
                        <div class="text-wrapper flex justify-between gap-x-5">
                            <input type="text" name="" id="" class="rounded-md w-full p-1 ps-2 tracking-widest font-medium">
                            <div class="submit-btn bg-sky-400 grid place-items-center hover:bg-sky-600 hover:border-sky-700 border-2 px-2 p-1 rounded-lg tracking-widest uppercase text-white font-medium">
                                submit
                            </div>
                        </div>
                    </div>
                </div>
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