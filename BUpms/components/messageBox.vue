<template>
    <fieldset
        class="md:space-y-3 relative text-slate-700 comment-box-wrapper border-2 border-slate-200 rounded-md gap-y-2 w-full md:pb-1 lg:h-full">
        <legend
            class="text-base md:text-xl indent-5 md:indent-0 font-semibold tracking-widest uppercase md:pt-0 lg:text-center">
            Comment Box
        </legend>
        <div class="heading-wrapper">
            <div class="flex items-center my-3 ps-2 md:my-0">
                <div class="w-10 bg-slate-200 h-1 rounded-full overflow-hidden md:ml-2 md:my-4">
                    <div class="bg-sky-500 h-full transition-all duration-100" :style="{ width: `${progress}%` }"></div>
                </div>
            </div>
        </div>
        <div class="comment-content-wrapper mx-2 md:space-y-2">
            <div class="display-message overflow-y-scroll h-64 xl:h-72 bg-slate-300 rounded-md space-y-4 py-1">
                <div v-for="message of messages">
                    <div v-if="message.FromUser === $pb.authStore.model.id"
                        class="from-client-msg-wrapper justify-between gap-x-3 m-1 p-2 bg-slate-100 rounded-md space-y-2">
                        <div class="name-icon-wrapper flex justify-end font-bold">
                            {{ message.expand.FromUser.role === 'officer1' ? 'Officer' : `Student |
                            ${message.expand.FromUser.username}` }}
                        </div>
                        <div class="top-message flex gap-x-3">
                            <div class="text-msg w-full ps-2 flex justify-end">
                                <div class="grid place-content-center bg-sky-300 px-3 rounded-xl">
                                    {{ message.Message }}
                                </div>
                            </div>
                            <div class="icon-wrapper grid place-content-center pe-2 p-2">
                                <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                            </div>
                            <hr>
                        </div>
                        <hr class="border-b-2 border-slate-200">
                        <div class="message-details-wrapper text-center text-xs tracking-widest">
                            {{ new Date(message.created).toDateString() }}
                            {{ new Date(message.created).toLocaleTimeString('en-US', {
                                hour: 'numeric', minute:
                                    'numeric', hour12: true
                            }) }}
                        </div>
                    </div>
                    <div v-else class="from-client-msg-wrapper mx-1 p-2 bg-slate-100 rounded-md space-y-2">
                        <div class="name-icon-wrapper font-bold">
                            {{ message.expand.FromUser.role === 'student' ? `Student |
                            ${message.expand.FromUser.username}` : 'Officer' }}
                        </div>
                        <div class="top-message flex gap-x-5">
                            <div class="icon-wrapper grid place-content-center ps-2">
                                <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                            </div>
                            <div class="text-msg grid place-items-center bg-sky-300 p-3 px-4 rounded-xl">
                                {{ message.Message }}
                            </div>
                        </div>
                        <hr class="border-b-2 border-slate-200">
                        <div class="message-details-wrapper text-center text-xs tracking-widest">
                            {{ new Date(message.created).toDateString() }}
                            {{ new Date(message.created).toLocaleTimeString('en-US', {
                                hour: 'numeric', minute:
                                    'numeric', hour12: true
                            }) }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="send-btn-control grid py-2 rounded-b-lg">
                <form class="text-wrapper flex justify-between gap-x-2 relative">
                    <textarea v-model="message" name="" id=""
                        class="w-full p-3 max-h-14 tracking-widest border-2 border-slate-300 rounded-xl ps-3 bg-slate-100 overflow-hidden"
                        placeholder="Type a message here. . ."></textarea>
                    <button @click="sendMessage" :disabled="loading || message.length === 0"
                        class="cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-300 z-30 disabled:pointer-events-none submit-btn absolute right-0 border-slate-300 h-full grid place-items-center border-s-2 px-2 p-1 rounded-e-xl text-blue-500 hover:bg-sky-400 hover:text-white">
                        <IconsAirplane></IconsAirplane>
                    </button>
                </form>
            </div>
        </div>
    </fieldset>
</template>
<script setup>
const toast = useToast()

const { $pb } = useNuxtApp()

const route = useRoute()
const message = ref("")
const loading = ref(false)

const progress = ref(100)

const { data: messages, status, refresh } = useAsyncData(async (nuxtApp) => await nuxtApp.$pb.collection('Comments_tbl').getFullList({
    expand: 'ProjectRel',
    expand: 'FromUser',
    filter: `ProjectRel="${route.params.projectId}"`,
    orderBy: 'created_at',
    order: 'asc',
}))

onMounted(() => {
    const REFRESH_INTERVAL = 3000
    const STEP_TIME = 100 // Update progress every 100ms

    const interval = setInterval(async () => {
        await refresh()
        progress.value = 100
    }, REFRESH_INTERVAL)

    // Progress bar countdown
    const progressInterval = setInterval(() => {
        if (progress.value > 0) {
            progress.value -= (STEP_TIME / REFRESH_INTERVAL) * 100
        }
    }, STEP_TIME)

    return () => {
        clearInterval(interval)
        clearInterval(progressInterval)
    }
})

const sendMessage = async () => {

    // console.log($pb.authStore.model.id)
    try {
        const data = {
            "FromUser": $pb.authStore.model.id,
            "Message": message.value,
            "ProjectRel": route.params.projectId,
        };

        loading.value = true
        await $pb.collection('Comments_tbl').create(data)

        toast.add({
            id: 'message_success',
            title: 'Message Sent',
            description: 'Your message has been sent successfully.',
            icon: 'i-ic-baseline-check',
            color: 'green',
            timeout: 1000
        })

        message.value = ""

        refresh()
    } catch (error) {
        // console.log(error)
        toast.add({
            id: 'message_error',
            title: 'Error Sending Message',
            description: 'An error occurred while sending your message. Please try again later.',
            icon: 'i-ic-baseline-error',
            color: 'red',
            timeout: 1000
        })
    }
    loading.value = false

}

</script>
<style scoped>
textarea {
    resize: none
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: #0369a1;
    border-radius: 20px;
}

::-webkit-scrollbar-track {
    background-color: #7dd3fc;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #0369a1;
}
</style>