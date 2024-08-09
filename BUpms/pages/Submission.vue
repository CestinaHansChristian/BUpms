<template>
    <!-- todo modal display -->
    <Teleport to='body'>
        <div v-if="isModalClicked" class="h-screen w-screen absolute grid place-items-center border-2 border-black">
            <div class="wrapper grid place-items-center">
                <div class="sun-wrapper h-20 w-20 bg-yellow-300 rounded-full">
                </div>
            </div>
        </div>
    </Teleport>
    <div class="h-screen grid grid-rows-2">
        <ClientGoBackButtonClient></ClientGoBackButtonClient>
        <div class="card-container grid place-items-center">
            <IconsDocument></IconsDocument>
        </div>
        <div class="card-container grid shadow-inner shadow-gray-400 rounded-lg md:flex mx-1">
            <div class="project-name mx-2 py-2 space-y-3  md:w-1/2">
                <label for="" class="text-lg font-semibold" >PROJECT NAME</label><br>
                <input type="text" name="" id="" class="p-2 size-10 w-full rounded-md shadow-inner shadow-gray-300">
            </div>
            <div class="description-container  mx-2 py-1 space-y-3  md:w-full">
                <label for="" class="text-lg font-semibold">DESCRIPTION</label><br>
                <textarea name="" id="" cols="0" rows="0" class="p-2 md:h-52 h-20 w-full shadow-inner shadow-gray-300 rounded-md"></textarea>
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
                isModalClicked: false
            }
        },
        beforeMount() {
            definePageMeta({
                layout: 'landing'
            })
        },
        methods: {
            submit_doc() {
                this.isModalClicked = !this.isModalClicked
            }
        },
    }
</script>

<style scoped>
    textarea {
        resize: none
    }
</style>