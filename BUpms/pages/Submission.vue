<template>
    <ClientOnly>
        <Teleport to='#modal'>
            <div v-if="isModalClicked" class="fixed grid place-items-center h-full w-full  z-10">
                <div class="wrapper grid place-items-center shadow-md rounded-xl shadow-gray-400 h-64 w-64 md:h-96 md:w-96 bg-slate-50 relative">
                    <div class="card grid place-items-center gap-y-5">
                        <div class="card-info grid place-items-center tracking-wider">
                            <div class="warning-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 text-red-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                  </svg>                                  
                            </div>
                            <div class="card-top-heading">
                                Actions here are irreversable
                            </div>
                            <div class="bottom-heading text-center">
                                Are you sure you want to submit?
                            </div>
                        </div>
                        <div class="card-btn-controller flex justify-evenly w-full uppercase font-semibold tracking-widest">
                            <div @click="confirmSubmit" class="confirm-btn bg-sky-300 p-1 px-5 rounded-md cursor-pointer">Yes</div>
                            <div @click="close_modal" class="cancel-btn bg-red-300 px-3 p-1 rounded-lg cursor-pointer">Return</div>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
        <Teleport to="#modal">
            <div v-if="isPosted" class="fixed grid place-items-center h-full w-full z-10">
                <div class="wrapper grid place-items-center shadow-md rounded-xl shadow-gray-400 h-64 w-64 md:h-96 md:w-96 bg-slate-50 relative">
                    <div class="card grid place-items-center gap-y-5">
                        <div class="icon-wrapper">

                        </div>
                        <div class="description-wrapper">
                            {{ attachedFile.name }} is Posted
                        </div>
                        <div class="information-wrapper">
                            Redirecting you to Home Page
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </ClientOnly>
    
    <div class="md:space-y-4 overflow-hidden md:container md:mx-auto" :class="{blur: isBlur}">
        <!-- {{ hideDefault }}
        {{ hideUploadFile }} -->
        <div class="card-container relative grid place-items-center py-12">
            <div v-if="hideDefault" class="card-border h-60 w-64 md:w-3/4 md:h-80 grid place-items-center rounded-2xl shadow-gray-400 shadow-inner relative text-sky-600 font-semibold md:text-xl" >
                <div class="file-upload-wrapper grid place-content-center gap-y-10">
                    <div class="uploadfile-wrapper grid place-content-center">
                        <IconsDocument></IconsDocument>
                    </div>
                    Select or Drag a File to Upload
                </div>
                <input @change="fetchFile" type="file" name="" id="" class=" cursor-pointer absolute border-2 h-full w-full opacity-0" accept="application/pdf">
            </div>
            <div v-if="hideUploadFile" class="card-border h-60 w-64 md:w-3/4 md:h-80 grid place-items-center rounded-2xl shadow-gray-400 shadow-inner relative text-sky-500 font-semibold md:text-xl">
                <div class="pdf-file-preview-wrapper relative bg-slate-200 px-5 rounded-lg border-2 border-slate-300">
                    <div @click="removeUploaded" class="remove-btn-wrapper absolute right-0 bg-red-400 text-white rounded-md p-0.5 hover:bg-red-500 cursor-pointer">
                        <IconsTrashIcon></IconsTrashIcon>
                    </div>
                    <div class="">
                        <img src="assets/pdf_image_prev.png" alt="" class=" h-52 md:w-full">
                    </div>
                    <div class="description-wrapper text-center">
                        {{ attachedFile.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-container rounded-lg md:mx-5 mx-2 md:space-y-3 py-6">
            <div class="md:flex md:gap-x-5">
                <div class="general-info w-full">
                    <fieldset class="border-2 border-orange-500 rounded-md">
                        <legend class="text-center font-semibold uppercase tracking-widest">General Information</legend>
                        <div class="m-2 space-y-6 p-1.5">
                            <div class="title-of-activity-wrapper mt-2">
                                <input type="text" name="" id="" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300" placeholder="Title of Activity">
                            </div>
                            <div class="when-wrapper">
                                <input type="text" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300" placeholder="When">
                            </div>
                            <div class="where-wrapper">
                                <input type="text" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300" placeholder="Who">
                            </div>
                            <div class="contact-num-wrapper">
                                <input type="text" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300" placeholder="Contact No.">
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="classification-wrapper w-full">
                    <div class="event-classification-wrapper lg:container lg:mx-auto">
                        <fieldset class="border-2 border-orange-500 rounded-md px-2">
                            <legend class="text-center font-semibold uppercase tracking-widest">Event classification</legend>
                            <select name="" id="" class="p-3 rounded-md text-xs md:text-lg my-3 w-full shadow-inner shadow-gray-300">
                                <option value="">Select an Item</option>
                                <option value="" class="">Convention, Seminar, etc.</option>
                                <option value="" class="">Volunteer Work</option>
                                <option value="" class="">Advocacy Project Campaigns</option>
                                <option value="" class="">Sports Activities</option>
                                <option value="" class="">Interschool Competitions / Tournaments</option>
                                <option value="" class="">Culture & Arts Competitions</option>
                                <option value="" class="">Others</option>
                            </select>
                        </fieldset>
                    </div>
                    <div class="event-classification-wrapper space-y-3">
                        <div class="doc-type-wrapper">
                            <fieldset class="border-2 border-orange-500 rounded-md relative px-2">
                                <legend class="text-center font-semibold uppercase tracking-widest">Document Type</legend>
                                <select name="" id="" class="p-3 text-xs md:text-lg rounded-md my-3 w-full shadow-inner shadow-gray-300">
                                    <div class="overflow-y-scroll">
                                        <option value="">Select an Item</option>
                                        <option value="" class="">Letter to the President</option>
                                        <option value="" class="">Activity Proposal</option>
                                        <option value="" class="">Endorsement from the College Crisis Mgt. Committee</option>
                                        <option value="" class="">List of Participants duly certified officially enrolled</option>
                                        <option value="" class="">Parent Cosent/ Jurat</option>
                                        <option value="" class="">Health Clearance from UHS</option>
                                        <option value="" class="">Proof of Insurance Coverage</option>
                                        <option value="" class="">Designation of Faculty/Personel-in-charge</option>
                                        <option value="" class="">Other Documents approving authority may require</option>
                                    </div>    
                                </select>
                            </fieldset>
                        </div>
                        <fieldset class="btn-controller grid place-items-center grid-cols-2 py-4 border-2 border-orange-500 rounded-md">
                            <button @click="submit_doc" class="bg-orange-500 text-white p-2 rounded-lg md:text-2xl font-normal hover:bg-green-500">SUBMIT</button>
                            <button class="bg-sky-500 text-white p-2 rounded-lg md:text-2xl font-normal hover:bg-red-400">Return</button>    
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
        layout: 'landing'
    })

    let isModalClicked = ref(false)
    let isBlur =  ref(false)
    let attachedFile = ref(null)
    let isPosted = ref(false)

    const hideDefault = computed(()=> {
        return attachedFile.value ? false : true 
    }) 

    const hideUploadFile = computed(()=> {
        return attachedFile.value ? true : false 
    }) 

    // const hideUpload = computed(()=> {
    //     return attachedFile.value ? true  : hideFileUploaded
    // })

    function confirmSubmit() {
        // success interval display modal
        isPosted.value = true
        if(isPosted.value) {
            const counter = setInterval(() => {
                isPosted.value = !isPosted.value
                console.log('counter')
                isModalClicked.value = !isModalClicked.value
                isBlur.value = !isBlur.value
                clearInterval(counter)
            }, 2000);
        }
    }

    function submit_doc(e) {
        isModalClicked.value = !isModalClicked.value 
        isBlur.value = !isBlur.value
        console.log(e)
    }
    function close_modal(){
        isBlur.value = !isBlur.value
        isModalClicked.value = !isModalClicked.value
    }

    // fetch file
    function fetchFile(event) {
        attachedFile.value = event.target.files[0]
        console.log(attachedFile)
    }

    // remove uploaded file
    function removeUploaded() {
        attachedFile.value = null
        console.log(attachedFile.value)
    }
    
</script>

<style scoped>
    textarea {
        resize: none
    }
</style>