<script setup>
    const {organization} = defineProps({
        organization: Object,
        require: true
    })

    // return organization name
    const orgName = computed(()=> {
        return organization.orgName
    })

    // return date sent
    const dateSentAt = computed(()=> {
        return organization.dateSent
    })
</script>

<template>
    <div class="project-details-wrapper grid gap-y-4 md:gap-x-2 md:flex md:container md:mx-auto md:w-3/4 pb-3">
        <div class="project-details-wrapper place-items-center mx-1 space-y-3">
            <div class="project-details-heading font-medium text-xl p-1 text-blue-900 tracking-wide">
                Project Details
            </div>
            <div class="project-details-content space-y-1">
                <div class="border-2 border-gray-300 shadow-inner shadow-gray-400 rounded-tl-xl rounded-tr-xl">
                    <div class="date-created-container flex border-b-4 border-gray-300">
                        <div class="created-wrapper h-14 w-full grid p-1 place-items-center bg-slate-200 rounded-tl-xl text-blue-800 font-semibold text-sm">
                            DATE CREATED
                        </div>
                        <div class="created-value-wrapper p-1 w-full h-14 grid place-items-center bg-slate-300 rounded-tr-xl font-semibold text-sm text-slate-800">
                            AUG / 21 /2024
                        </div>
                    </div>
                    <div class="date-updated-contianer grid grid-cols-2 justify-around">
                        <div class="created-wrapper h-14 w-full grid p-1 place-items-center bg-slate-200 text-blue-800 font-semibold text-sm">
                            DATA UPDATED
                        </div>
                        <div class="created-value-wrapper p-1 w-full h-14 grid place-items-center bg-slate-300 font-semibold text-sm text-slate-800">
                            AUG / 21 /2024
                        </div>
                    </div>
                </div>
            </div>
            <div class="org-name-wrapper relative shadow-md shadow-gray-400 p-1 rounded-br-xl rounded-bl-xl flex">
                <div class="text-lg text-gray-700 font-bold tracking-wide p-1">
                    Organization Involve: 
                    <span class="text-sky-800 tracking-widest font-bold">
                        {{orgName}}
                    </span>
                </div>
            </div>
        </div>
        <div class="comment-feature mx-2 space-y-3">
            <div class="heading-nav flex justify-between">
                <div class="comment-heading text-xl text-gray-500 font-bold py-1">
                    Comment
                </div>
                <div class="return-btn bg-red-400 text-center font-medium tracking-widest text-xl rounded-md p-1 px-2 text-white mx-2">
                    Return
                </div>
            </div>
            <div class="display-prev-comment h-52 tracking-widest relative shadow-md shadow-slate-500 p-2 rounded-xl">
                <div class="text-response-wrapper overflow-y-scroll h-36">
                    <div class="officer-comment-wrapper">
                        <!-- officer comment -->
                        <div class="from-officer border-2 border-b-slate-100 p-1 rounded-xl space-y-2">
                            <div class="message-wrapper flex gap-x-4">
                                <div class="user-icon">
                                    <div class="user-img bg-sky-500 h-10 w-10 rounded-full grid place-items-center text-xs">
                                        O
                                    </div>
                                </div>
                                <div class="message-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nesciunt!
                                </div>
                            </div>
                            <div class="sent-date-wrapper grid place-items-center font-thin text-xs">
                                Sent {{ dateSentAt }}
                            </div>
                        </div>
                    </div>
                    <div class="user-comment-wrapper border-2">
                        <!-- user comment -->
                        <div class="from-officer grid gap-x-4 relative m-1">
                            <div class="message-wrapper flex gap-x-4 mx-2">
                                <div class="message-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nesciunt!
                                </div>
                                <div class="user-icon">
                                    <div class="user-img bg-orange-500 h-10 w-10 rounded-full grid place-items-center text-xs">
                                        U
                                    </div>
                                </div>
                            </div>
                            <div class="sent-date-wrapper grid place-items-center font-thin text-xs">
                                Sent {{ dateSentAt }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-send-controller bottom-0 flex gap-1 py-2">
                    <input type="text" name="" id="" class="border-2 border-gray-300 rounded-xl p-1 md:w-full">
                    <div class="btn-submit border-2 border-green-400 grid place-items-center p-1 bg-green-200 rounded-xl">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>