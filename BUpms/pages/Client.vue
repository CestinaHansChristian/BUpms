<template>
    <div class="md:flex grid h-screen">
        <div class="actions-col w-full relative ">
            <div class="actions-container grid grid-rows-2 h-full ">
                <div class="actions-first-col flex m-5 space-x-5 ">
                    <ClientDocumentComponent class="buttons" ></ClientDocumentComponent>
                    <ClientTrackComponent class="buttons" ></ClientTrackComponent>
                </div>
                <div class="actions-first-col flex m-5 space-x-5 grid-cols-3 ">
                    <ClientProfileComponent class="buttons"></ClientProfileComponent>
                    <ClientContactComponent class="buttons"></ClientContactComponent>
                    <ClientLogoutComponent class="buttons"></ClientLogoutComponent>
                </div>
            </div>
        </div>
        <div class="status-col w-full md:w-1/2 grid md:h-full overflow-y-scroll shadow-md shadow-gray-400">
            <ClientProjectTracker></ClientProjectTracker>
        </div>
    </div>
</template>
<script>

    export default {
        beforeMount() {
            definePageMeta({
                layout: 'landing'
            })
        }
    }
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