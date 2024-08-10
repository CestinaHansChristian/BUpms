<template>
    <!-- todo modal display -->
    <Teleport to='#modal'>
        <div v-if="isModalClicked" class="fixed grid place-items-center h-full w-full border-2 border-black z-10">
            <div class="wrapper grid place-items-center shadow-md rounded-xl shadow-gray-400 h-64 w-64 bg-slate-100">
                <div class="card border-2 border-black grid place-items-center gap-y-5">
                    <div class="card-info">
                        Success!
                    </div>
                    <div class="card-btn-controller">
                        <div @click="submit_doc" class="confirm-btn bg-sky-300 p-1 px-5 rounded-md cursor-pointer">Ok</div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
    <div class="h-screen grid grid-rows-2" :class="{blur: isBlur}">
        <ClientGoBackButtonClient></ClientGoBackButtonClient>
        <div class="card-container grid place-items-center">
            <IconsDocument></IconsDocument>
        </div>
        <div class="card-container grid shadow-inner shadow-gray-400 rounded-lg md:flex mx-2 md:m-5">
            <div class="project-name mx-2 py-2 space-y-3  md:w-1/2">
                <label for="" class="text-lg font-semibold" >PROJECT NAME</label><br>
                <input type="text" name="" id="" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300">
            </div>
            <div class="description-container  mx-2 py-1 space-y-3  md:w-full">
                <label for="" class="text-lg font-semibold">DESCRIPTION</label><br>
                <textarea name="" id="" cols="0" rows="0" class="p-2 md:h-40 h-20 w-full lg:h-52 shadow-inner shadow-gray-300 rounded-md"></textarea>
                <div class="btn-controller grid place-items-center">
                    <button @click="submit_doc" class="bg-orange-500 text-white p-2 md:px-8 rounded-lg md:text-2xl font-normal">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
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
            }
        }
    }
</script>

<style scoped>
    textarea {
        resize: none
    }
</style>