<template>
    <ClientOnly>
        <Teleport to='#modal'>
            <div v-if="isModalClicked" class="fixed grid place-items-center h-full w-full  z-10">
                <div class="wrapper grid place-items-center shadow-md rounded-xl shadow-gray-400 h-64 w-64 md:h-96 md:w-96 bg-slate-50 relative">
                    <div class="card grid place-items-center gap-y-5">
                        <div class="card-info grid place-items-center tracking-wider">
                            <div class="warning-icon">
                                <IconsWarningIcon></IconsWarningIcon>                              
                            </div>
                            <div class="card-top-heading">
                                Actions here are 
                                <i class="font-bold text-red-500 text-lg">
                                    irreversable
                                </i>
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
                <div v-if="inputChecker()" class="wrapper grid place-items-center shadow-md rounded-xl shadow-gray-400 h-64 w-64 md:h-96 md:w-96 bg-slate-50 relative">
                    <!-- display file name and redirection to homepage client -->
                    <div  class="card grid place-items-center gap-y-5">
                        <div class="icon-wrapper">

                        </div>
                        <div class="description-wrapper">
                            {{ attachedFile.name }} is Posted
                        </div>
                        <div class="information-wrapper">
                            Redirecting you to Tracking Page
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
        <Teleport to="#modal">
            <div v-if="missingFields" class="fixed grid place-items-center h-full w-full z-10">
                <div class="wrapper grid place-items-center shadow-md rounded-xl shadow-gray-400 h-64 w-64 md:h-96 md:w-96 bg-slate-50 relative">
                    <!-- missing fields warning display modal -->
                    <div class="card grid place-items-center gap-y-5">
                        <div class="icon-wrapper">
                            <IconsWarningIcon></IconsWarningIcon>
                        </div>
                        <div class="description">
                            Some fields are missing, try again.
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </ClientOnly>
    <div class="md:space-y-4 overflow-hidden md:container md:mx-auto" :class="{blur: isBlur}">
        <div class="card-container relative grid place-items-center py-12">
            <div v-if="hideDefault" class="card-border h-60 w-64 md:w-3/4 md:h-80 grid place-items-center rounded-2xl shadow-gray-400 shadow-inner relative text-sky-600 font-semibold md:text-xl" >
                <div class="file-upload-wrapper grid place-content-center gap-y-10">
                    <div class="uploadfile-wrapper grid place-content-center">
                        <IconsDocument></IconsDocument>
                    </div>
                    Select or Drag a File to Upload
                </div>
                <input @change="fetchFile" required type="file" name="" id="" class=" cursor-pointer absolute border-2 h-full w-full opacity-0" accept="application/pdf">
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
                    <fieldset class="border-2 border-slate-300 rounded-md">
                        <legend class="text-center font-semibold uppercase tracking-widest">General Information</legend>
                        <div class="m-2 space-y-6 p-1.5">
                            <div class="title-of-activity-wrapper mt-2">
                                <input required v-model="clientActiviyTitle" type="text" name="" id="" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300" placeholder="Title of Activity">
                            </div>
                            <div class="when-wrapper">
                                <input required v-model="clientwhenDateTime" type="text" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300" placeholder="When">
                            </div>
                            <div class="where-wrapper">
                                <input required v-model="clientWho" type="text" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300" placeholder="Who">
                            </div>
                            <div class="contact-num-wrapper">
                                <input required v-model="clientContactNum" type="text" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300" placeholder="Contact No.">
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="classification-wrapper w-full">
                    <div class="event-classification-wrapper lg:container lg:mx-auto">
                        <fieldset class="border-2 border-slate-300 rounded-md px-2">
                            <legend class="text-center font-semibold uppercase tracking-widest">Event classification</legend>
                            <select v-model="eventClassification" name="" id="" class="p-3 rounded-md text-xs md:text-lg my-3 w-full shadow-inner shadow-gray-300">
                                <option value="">Select an Item</option>
                                <option value="Convention, Seminar, etc." class="">Convention, Seminar, etc.</option>
                                <option value="Volunteer Work" class="">Volunteer Work</option>
                                <option value="Advocacy Project Campaigns" class="">Advocacy Project Campaigns</option>
                                <option value="Sports Activities" class="">Sports Activities</option>
                                <option value="Interschool Competitions / Tournaments" class="">Interschool Competitions / Tournaments</option>
                                <option value="Culture & Arts Competitions" class="">Culture & Arts Competitions</option>
                                <option value="Others" class="">Others</option>
                            </select>
                        </fieldset>
                    </div>
                    <div class="event-classification-wrapper space-y-3">
                        <div class="doc-type-wrapper">
                            <fieldset class="border-2 border-slate-300 rounded-md relative px-2">
                                <legend class="text-center font-semibold uppercase tracking-widest">Document Type</legend>
                                <select v-model="docType" name="" id="" class="p-3 text-xs md:text-lg rounded-md my-3 w-full shadow-inner shadow-gray-300">
                                    <option value="">Select an Item</option>
                                    <option value="Letter to the President" class="">Letter to the President</option>
                                    <option value="Activity Proposal" class="">Activity Proposal</option>
                                    <option value="Endorsement from the College Crisis Mgt. Committee" class="">Endorsement from the College Crisis Mgt. Committee</option>
                                    <option value="List of Participants duly certified officially enrolled" class="">List of Participants duly certified officially enrolled</option>
                                    <option value="Parent Cosent/ Jurat" class="">Parent Cosent/ Jurat</option>
                                    <option value="Health Clearance from UHS" class="">Health Clearance from UHS</option>
                                    <option value="Proof of Insurance Coverage" class="">Proof of Insurance Coverage</option>
                                    <option value="Designation of Faculty/Personel-in-charge" class="">Designation of Faculty/Personel-in-charge</option>
                                    <option value="Other Documents approving authority may require" class="">Other Documents approving authority may require</option>   
                                </select>
                            </fieldset>
                        </div>
                        <fieldset class="btn-controller grid place-items-center grid-cols-2 py-4 border-2 border-slate-300 rounded-md">
                            <button @click="submit_doc" class="bg-orange-400 text-white p-2 rounded-lg md:text-2xl font-normal hover:bg-green-500">SUBMIT</button>
                            <button class="bg-sky-400 text-white p-2 rounded-lg md:text-2xl font-normal hover:bg-red-400">Return</button>    
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

    //warning modal dislay
    let missingFields = ref(false)

    // for file attachment
    let attachedFile = ref(null)
    let isPosted = ref(false)

    // client added information
    let clientActiviyTitle = ref('')
    let clientwhenDateTime = ref('')
    let clientWho = ref('')
    let clientContactNum = ref('')

    // document attachment
    let docType = ref('')
    let eventClassification = ref('')

    const hideDefault = computed(()=> {
        return attachedFile.value ? false : true 
    }) 

    const hideUploadFile = computed(()=> {
        return attachedFile.value ? true : false 
    }) 

    function inputChecker() {
        if(attachedFile.value != null && clientActiviyTitle.value != '' && clientwhenDateTime.value != '' && clientWho.value != '' && clientContactNum.value != '' && docType != '' && eventClassification != '' ) {
            console.log('not exist')
            return true
        } else {
            console.log(' exist')
            return false
        }
    }

    // modal confimation function
    function confirmSubmit() {
        // success interval display modal
        isPosted.value = !isPosted.value
        if(isPosted.value) {

            // auto close modal after 2sec or execute this command after 2sec
            const counter = setInterval(() => {
                isPosted.value = !isPosted.value
                isModalClicked.value = !isModalClicked.value
                isBlur.value = !isBlur.value
                missingFields.value = false
                clearInterval(counter)
                clientActiviyTitle.value = ''
                clientwhenDateTime.value = ''
                clientWho.value = ''
                clientContactNum.value = ''
                attachedFile.value = ''
                docType = ''
                eventClassification = ''
                console.log('counter')
            }, 2000);

            // submit to pocketbase
            if(inputChecker()) {
                const createdProject = {
                'Activity': clientActiviyTitle.value,
                'When': clientwhenDateTime.value,
                'Who': clientWho.value ,
                'ClientContactNum': clientContactNum.value,
                'File': attachedFile.value,
                'Document Type': docType,
                'Event Classification': eventClassification
                }
                const redirectTracking = setInterval(() => {
                    navigateTo('/track/projects')
                    clearInterval(redirectTracking)
                }, 2000);
                console.log(createdProject)
            } else {
                warnMissingFields()
                clientActiviyTitle.value = ''
                clientwhenDateTime.value = ''
                clientWho.value = ''
                clientContactNum.value = ''
                attachedFile.value = ''
                docType = ''
                eventClassification = ''
                console.log('Fields need to be filled')
            }
        } else {
            console.log('An error occured')
        }
    }

    // submit button first modal
    function submit_doc(e) {
        isModalClicked.value = !isModalClicked.value 
        isBlur.value = !isBlur.value
        console.log(e)
    }

    // close modal
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
    
    // error handling for missing field
    function warnMissingFields() {
        missingFields.value = !missingFields.value
    }
</script>

<style scoped>
    textarea {
        resize: none
    }
</style>