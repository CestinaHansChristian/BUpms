<template>
    <div class="md:flex grid ">
        <div class="actions-col w-full relative">
            <div class="actions-container grid md:gap-y-10 md:py-5 ">
                <div class="actions-first-col flex m-5 space-x-5 ">
                    <ClientDocumentComponent class="buttons"></ClientDocumentComponent>
                    <ClientTrackComponent class="buttons"></ClientTrackComponent>
                </div>
                <div class="actions-first-col flex m-5 space-x-5 grid-cols-3 ">
                    <ClientProfileComponent class="buttons"></ClientProfileComponent>
                    <ClientContactComponent class="buttons"></ClientContactComponent>
                    <ClientLogoutComponent class="buttons"></ClientLogoutComponent>
                </div>
            </div>
        </div>
        <div class="status-col w-full md:w-1/2 shadow-md  shadow-gray-400 p-1 rounded-md">
            <ClientProjectTracker></ClientProjectTracker>
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
        layout: 'landing'
    })
</script>

<style scoped>
.buttons:hover {
    background-color: rgb(94, 152, 206);
    color: white
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #4ca5d8;
    border-radius: 30px
}
</style>