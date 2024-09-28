<template>
    <!-- todo modal display -->
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
                            <div @click="submit_doc" class="confirm-btn bg-sky-300 p-1 px-5 rounded-md cursor-pointer">Yes</div>
                            <div @click="close_modal" class="cancel-btn bg-red-300 px-3 p-1 rounded-lg cursor-pointer">Return</div>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </ClientOnly>
    <div class=" md:space-y-4" :class="{blur: isBlur}">
        <div class="card-container grid place-items-center">
            <IconsDocument @fileUploaded="display_file"></IconsDocument>
        </div>
        <div class="card-container rounded-lg md:mx-5 mx-2 md:space-y-3">
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
                    <fieldset class="border-2 border-orange-500 rounded-md">
                        <legend class="text-center font-semibold uppercase tracking-widest">Event classification</legend>
                        <div class="m-2 space-y-2">
                            <div class="classification-wrapper-row2 space-x-3">
                                <input type="checkbox" name="" id="">
                                <label for="">Mission Based</label>
                            </div>
                            <div class="classification-wrapper-row2 space-x-3">
                                <input type="checkbox" name="" id="">
                                <label for="">Convention, Seminar, etc.</label>
                            </div>
                            <div class="classification-wrapper-row2 space-x-3">
                                <input type="checkbox" name="" id="">
                                <label for="">Volunteer Work</label>
                            </div>
                            <div class="classification-wrapper-row2 space-x-3">
                                <input type="checkbox" name="" id="">
                                <label for="">Advocacy Project Campaigns</label>
                            </div>
                            <div class="classification-wrapper-row2 space-x-3">
                                <input type="checkbox" name="" id="">
                                <label for="">Sports Activities</label>
                            </div>
                            <div class="classification-wrapper-row2 space-x-3">
                                <input type="checkbox" name="" id="">
                                <label for="">Interschool Competitions / Tournaments</label>
                            </div>
                            <div class="classification-wrapper-row2 space-x-3">
                                <input type="checkbox" name="" id="">
                                <label for="">Culture & Arts Competitions</label>
                            </div>
                            <div class="classification-wrapper-row2 space-x-3 flex">
                                <input type="checkbox" name="" id="">
                                <label for="">Others:</label>
                                <input type="text" class="border-b-2 border-black bg-slate-100">
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="type-of-documents-wrapper">
                <fieldset class="border-2 border-orange-500 rounded-md">
                    <legend class="text-center font-semibold uppercase tracking-widest">document type</legend>
                    <div class="m-2 space-y-2">
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <label for="">Letter to the President</label>
                        </div>
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <label for="">Activity Proposal</label>
                        </div>
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <label for="">Endorsement from the College Crisis Mgt. Committee</label>
                        </div>
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <label for="">List of Participants duly certified officially enrolled</label>
                        </div>
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <label for="">Parent Cosent/ Jurat</label>
                        </div>
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <label for="">Health Clearance from UHS</label>
                        </div>
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <label for="">Proof of Insurance Coverage</label>
                        </div>
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <label for="">Designation of Faculty/Personel-in-charge</label>
                        </div>
                        <div class="mission-based-wrapper space-x-3">
                            <input type="checkbox" name="" id="">
                            <i><label for="">Other Documents that the approving authority may require</label></i>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
        <div class="btn-controller grid place-items-center grid-cols-2 py-4">
            <button @click="submit_doc" class="bg-orange-500 text-white p-2 rounded-lg md:text-2xl font-normal hover:bg-green-500">SUBMIT</button>
            <button class="bg-sky-500 text-white p-2 rounded-lg md:text-2xl font-normal hover:bg-red-400">Return</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Submission_client',
        emits:['fileUploaded'],
        data() {
            return {
                isModalClicked: false,
                isBlur: false
            }
        },
        beforeMount() {
            definePageMeta({
                layout: 'landing'
            })
        },
        methods: {
            submit_doc(e) {
                this.isBlur = !this.isBlur
                this.isModalClicked = !this.isModalClicked
                console.log(e)
            },
            close_modal(){
                this.isBlur = !this.isBlur
                this.isModalClicked = !this.isModalClicked
            },
            display_file(event) {
                console.log(event)
            }
        }
    }
</script>

<style scoped>
    textarea {
        resize: none
    }
</style>