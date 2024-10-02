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
    <div class="project-details-wrapper md:pt-16 gap-y-4 md:flex">
        <fieldset class="border-2 border-orange-500 h-full w-full rounded-md grid md:mx-2  shadow-inner shadow-gray-300">
            <legend class="text-center uppercase text-lg font-semibold tracking-widest">Information</legend>
            <div class="space-y-5 md:space-y-7 p-2 md:text-xl">
                <div class="title-of-activity-wrapper">
                    <label for="" class="font-semibold tracking-tighter uppercase">Title of Activity:</label>
                    <span class="border-b-2 border-b-black w-full px-2">hello world</span>
                </div>
                <div class="when-wrapper">
                    <label for="" class="font-semibold tracking-tighter uppercase">When:</label>
                    <span class="border-b-2 border-b-black w-full px-2"></span>
                </div>
                <div class="where-wrapper">
                    <label for="" class="font-semibold tracking-tighter uppercase">Who:</label>
                    <span class="border-b-2 border-b-black w-full px-2"></span>
                </div>
                <div class="contact-num-wrapper">
                    <label for="" class="font-semibold tracking-tighter uppercase">Contact no.</label>
                    <span class="border-b-2 border-b-black w-full px-2"></span>
                </div>
                <fieldset class=" grid gap-y-3 font-semibold">
                    <div class="document-type-wrapper">
                        Type of document: 
                    </div>
                    <div class="event-classification-wrapper">
                        Type of Event:
                    </div>
                </fieldset>
            </div>
        </fieldset>
        <!-- <div class="project-details-wrapper mx-1 grid border-2 border-black">
            <div class="top-wrapper w-full h-40">
                <div class="project-details-heading font-medium grid place-items-center text-xl md:text-base p-1 text-white tracking-widest bg-sky-400 rounded-t-xl ps-3 uppercase">
                    Details
                </div>
                <div class="project-details-content grid md:h-36">
                    <div class="date-created-container flex border-2">
                        <div class="created-wrapper h-full w-full grid p-5 text-center bg-slate-200 text-blue-800 font-semibold text-sm">
                            DATE CREATED
                        </div>
                        <div class="created-value-wrapper p-5 w-full h-full grid text-center bg-slate-300 font-semibold text-sm text-slate-800">
                            AUG / 21 /2024
                        </div>
                    </div>
                    <div class="date-updated-contianer grid grid-cols-2 justify-around h-full border-2">
                        <div class="created-wrapper h-full w-full grid p-5 text-center bg-slate-200 text-blue-800 font-semibold text-sm">
                            DATA UPDATED
                        </div>
                        <div class="created-value-wrapper p-5 w-full h-full grid text-center bg-slate-300 font-semibold text-sm text-slate-800">
                            AUG / 21 /2024
                        </div>
                    </div>
                </div>
            </div>
            <div class="org-name-wrapper relative shadow-md w-full shadow-gray-400 p-1 h-14 rounded-br-xl rounded-bl-xl grid place-content-center">
                <div class="center-items flex md:p-2">
                    <div class="heading-wrapper uppercase text-amber-700 font-bold text-base md:text-xl">
                        organization: 
                        <span class="text-sky-800 tracking-widest font-bold">
                            {{orgName}}
                        </span>
                    </div>
                </div>
            </div>
        </div> -->
        <MessageBox></MessageBox>
        <!-- <div class="comment-feature mx-2 space-y-3">
            <div class="heading-nav flex justify-between">
                <div class="comment-heading text-xl text-gray-500 font-bold py-1">
                    Comment
                </div>
                
            </div>
            <div class="display-prev-comment h-52 tracking-widest relative shadow-md shadow-slate-500 p-2 rounded-xl">
                <div class="text-response-wrapper overflow-y-scroll h-36">
                    <div class="officer-comment-wrapper">
                        officer comment
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
                        user comment
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
                    TODO: find send icon
                    <div class="btn-submit border-2 border-green-400 grid place-items-center p-1 bg-green-200 rounded-xl">
                        Submit
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>