<template>
    <div class="wrapper-main bg-slate-100">
        <div class="w-fit px-4 py-2 font-bold text-lg text-slate-400 bg-white fixed top-0 left-1/2 rounded-b-xl shadow-md z-[100]"
            v-if="isLoading">
            Loading {{ progress.toFixed() }}%
        </div>
        <div class=" text-slate-700">
            <div id="modal"></div>
            <nav class="h-20 p-3 shadow-md flex sticky top-0 bg-slate-100 z-50">
                <div class="relative justify-between flex w-full">
                    <img @click="goToHome" src="assets/BU_title.png" alt=""
                        class="object-contain min-w-32 cursor-pointer">
                    <div class="header-2-wrapper flex place-self-center gap-x-5 px-3 min-w-32">
                        <ClientOnly>
                            <div @click="show_user_option"
                                class="hidden name-container md:grid place-items-center text-sky-500 font-semibold text-sm md:text-2xl tracking-widest">
                                Welcome,
                                {{ $pb.authStore.model?.username }}
                            </div>
                            <div class="absolute top-3 right-0 md:relative md:top-0">
                                <div v-if="displayNotif" @click="show_alert_notify"
                                    class="notification-container cursor-pointer relative">
                                    <IconsNotification></IconsNotification>
                                    <div v-if="ifNotifisRead"
                                        class="notification h-3 w-3 bg-orange-500 rounded-full absolute top-0 right-0">
                                    </div>
                                    <div v-if="alertIsClicked" class="notif_list fixed right-0 z-10 pt-2">
                                        <div
                                            class="list-container p-1 md:p-2 bg-slate-200 w-48 md:w-72 me-5 rounded-md shadow-md shadow-gray-400">
                                            <div
                                                class="notif-wrapper p-1 text-sm md:text-xl bg-slate-300 max-h-60 overflow-y-scroll space-y-2 rounded-md">
                                                <!-- one notif sample -->
                                                <div v-if="notificationMessage.length > 0" class="if-with-notification space-y-1 py-1">
                                                    <div v-for="(item, index) in notificationMessage" :key="index"
                                                        class="project-notif flex p-1 border-2 rounded-md relative xl:w-full xl:h-28 bg-sky-100">
                                                        <div
                                                            class="icon-wrapper h-full w-36 ps-2">
                                                            <div
                                                                class="img-icon h-10 w-10 xl:h-16 xl:w-16 bg-green-400 rounded-full grid place-content-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                    viewBox="0 0 24 24" stroke-width="6" stroke="white"
                                                                    class="size-7">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="m4.5 12.75 6 6 9-13.5" />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                class="passed-status font-medium text-xs md:text-base xl:text-xl ps-1 md:ps-0">
                                                                Passed
                                                            </div>
                                                        </div>
                                                        <div class="col-2 relative xl:ps-4">
                                                            <div
                                                                class="notif-infotracking-widertracking-wide text-xs md:text-base xl:text-xl">
                                                                {{ item.Short_desc }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="wrapper text-center text-slate-400 py-5">
                                                    No Notification
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="typeOfUser.userRole === 'admin'" class="admin-logout-btn pt-1">
                                    <div @click="logout"
                                        class="btn-wrapper uppercase bg-red-500 p-2 tracking-widest font-semibold rounded-md text-white cursor-pointer hover:bg-red-600">
                                        Log out
                                    </div>
                                </div>
                            </div>
                        </ClientOnly>
                    </div>
                </div>
            </nav>
            <slot />
        </div>
        <Footer></Footer>
    </div>
    <UNotifications />
</template>
<style scoped>
::-webkit-scrollbar {
    width: 12px;
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
    background: #198ecc;
}
</style>
<script setup>

const { $pb } = useNuxtApp()
const alertIsClicked = ref(false);
const userIsClicked = ref(false)
let orangeDot = ref('')
let ifNotifisRead = ref(false)

// get current logged in user role
const typeOfUser = reactive({
    userRole: $pb.authStore.model?.role
})


// get full notification
const notificationMessage = await $pb.collection('Notifications_tbl').getFullList({
    filter: `ForUser="${$pb.authStore.model?.id}"`,
})

// get one notification only
try {
    orangeDot = await $pb.collection('Notifications_tbl').getFirstListItem(`ForUser="${$pb.authStore.model?.id}"`, {
    })
    ifNotifisRead.value = !ifNotifisRead.value
} catch (error) {
    console.log(error)
}
console.log(orangeDot)

console.log(notificationMessage)

// hides if role is admin / officer
const displayNotif = computed(() => {
    return (typeOfUser.userRole === 'admin') || (typeOfUser.userRole === 'officer1') || (typeOfUser.userRole === 'officer2') ? false : true
})

// if bupms logo is clicked go to homescreen
function goToHome() {
    return typeOfUser.userRole === 'student' ? navigateTo('/client') : typeOfUser.userRole === 'admin' ? navigateTo('/admin') : typeOfUser.userRole === 'officer1' ? navigateTo('/officer1/projects') : typeOfUser.userRole === 'officer2' ? navigateTo('/officer2/projects') : false
}

// display user option window
const show_user_option = () => {
    userIsClicked.value = !userIsClicked.value
}

// display alert window
const show_alert_notify = () => {
    alertIsClicked.value = !alertIsClicked.value;
    ifNotifisRead.value = false
};

const logout = () => {
    $pb.authStore.clear()
    navigateTo('/')
};

const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
    duration: 1000,
    throttle: 200,
    // This is how progress is calculated by default
    estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
})

defineExpose({
    alertIsClicked,
    show_alert_notify,
    logout
});
</script>