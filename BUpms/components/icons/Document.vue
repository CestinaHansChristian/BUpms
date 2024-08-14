<template>
    <div class="card-border h-60 w-64 md:w-3/4 md:h-44 grid place-items-center rounded-2xl shadow-gray-400 shadow-inner relative text-sky-600 font-semibold md:text-xl" >
        <input @change="uploaded_doc" type="file" name="" id="" class=" cursor-pointer absolute h-full w-full opacity-0" accept="application/pdf">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" stroke="1.5" height="100" fill="#4091D6" viewBox="0 0 50 50">
            <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
        </svg>
        Select or Drag a File to Upload
    </div>
</template>
<script>
    export default {
        data() {
            return {
                file_document: ''
            }
        },
        methods: {
            uploaded_doc(event) {
                // send file to parent component
                this.$emit('fileUploaded',event.target.files)
            }
        },
    }
</script>