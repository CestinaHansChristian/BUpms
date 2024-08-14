<template>
    <!-- todo modal display -->
    <ClientOnly>
        <Teleport to='#modal'>
            <div v-if="isModalClicked" class="fixed grid place-items-center h-full w-full  z-10">
                <div class="wrapper grid place-items-center shadow-md rounded-xl shadow-gray-400 h-64 w-64 md:h-96 md:w-96 bg-slate-100 border-2 border-black relative">
                    <div class="card grid place-items-center gap-y-5">
                        <div class="card-info grid place-items-center">
                            <div class="card-top-heading">
                                Actions here are irreversable
                            </div>
                            <div class="bottom-heading text-center">
                                Are you sure you want to submit now?
                            </div>
                        </div>
                        <div class="card-btn-controller flex justify-evenly w-full">
                            <div @click="submit_doc" class="confirm-btn bg-sky-300 p-1 px-5 rounded-md cursor-pointer">Yes</div>
                            <div @click="close_modal" class="cancel-btn bg-red-300 px-3 p-1 rounded-lg cursor-pointer">Return</div>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </ClientOnly>
    <div class="grid grid-rows-2 relative" :class="{blur: isBlur}">
        <div class="card-container grid place-items-center relative">
            <IconsDocument @fileUploaded="display_file"></IconsDocument>
        </div>
        <div class="card-container shadow-inner shadow-gray-400 rounded-lg md:flex mx-2 pb-3">
            <div class="project-name mx-2 py-1 space-y-3 md:w-1/2  ">
                <div class="project-name-wrapper mt-2">
                    <label class="text-lg font-semibold" >PROJECT NAME</label><br>
                    <input type="text" name="" id="" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300">
                </div>
                <div class="selection-wrapper ">
                    <label for="" class="text-lg font-semibold">Select Category Type:</label>
                    <select name="" id="" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300">
                        <option value=""></option>
                        <option value="" class="md:text-lg font-semibold text-sm">Medical Certificate</option>
                        <option value="" class="md:text-lg font-semibold text-sm">Department Based Organization Event</option>
                        <option value="" class="md:text-lg font-semibold text-sm">College Based Organization Event</option>
                        <option value="" class="md:text-lg font-semibold text-sm">Jurat</option>
                    </select>
                </div>
            </div>
            <div class="description-container py-1 space-y-3 lg:h-full md:w-full">
                <div class="project-desc-wrapper m-2">
                    <label for="" class="text-lg font-semibold">DESCRIPTION</label><br>
                    <textarea name="" id="" cols="0" rows="0" class="p-2 md:h-40 lg:h-52 h-20 w-full shadow-inner shadow-gray-300 rounded-md placeholder:text-lg md:placeholder:text-xl" placeholder="Give brief information for the attached document."></textarea>
                </div>
                <div class="btn-controller grid place-items-center grid-cols-2">
                    <button @click="submit_doc" class="bg-orange-500 text-white p-2 rounded-lg md:text-2xl font-normal hover:bg-green-500">SUBMIT</button>
                    <button class="bg-sky-500 text-white p-2 rounded-lg md:text-2xl font-normal hover:bg-red-400">Return</button>
                </div>
            </div>
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