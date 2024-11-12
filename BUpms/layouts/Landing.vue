<template>
    <div class="w-fit px-4 py-2 font-bold text-lg text-black bg-white fixed top-0 left-1/2 rounded-b-xl shadow-md z-[100]"
        v-if="isLoading">
        Loading {{ progress.toFixed() }}%
    </div>
    <div class="bg-slate-100">
        <div id="modal"></div>
        <nav class="h-20 p-3 shadow-md flex sticky top-0 bg-slate-100 z-50">
            <div class="relative justify-between flex w-full">
                <img @click="goToHome" src="assets/BU_title.png" alt="" class="object-contain min-w-32 cursor-pointer">
                <div class="header-2-wrapper flex place-self-center gap-x-5 px-3 min-w-32">
                    <ClientOnly>
                        <div @click="show_user_option"
                            class="hidden name-container md:grid place-items-center text-sky-500 font-semibold text-sm md:text-2xl tracking-widest">
                            Welcome,
                            {{ $pb.authStore.model?.username }}
                        </div>
                        <div class="absolute top-3 right-0 md:relative md:top-0">
                            <div v-if="displayNotif" @click="show_alert_notify"
                                class="notification-container cursor-pointer relative ">
                                <IconsNotification></IconsNotification>
                                <div class="notification h-3 w-3 bg-orange-500 rounded-full absolute top-0 right-0">
                                </div>
                                <div v-if="alertIsClicked" class="notif_list fixed right-0 z-10 pt-2">
                                    <div
                                        class="list-container p-1 md:p-2 bg-slate-200 w-48 md:w-72 me-5 rounded-md shadow-md shadow-gray-400">
                                        <div
                                            class="notif-wrapper p-1 text-sm md:text-xl bg-slate-300 max-h-60 overflow-y-scroll space-y-2 rounded-md">
                                            <!-- one notif sample -->
                                            <NotifDisplay></NotifDisplay>
                                            <NotifDisplay></NotifDisplay>
                                            <NotifDisplay></NotifDisplay>
                                            <NotifDisplay></NotifDisplay>
                                            <NotifDisplay></NotifDisplay>
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

// get current logged in user role
const typeOfUser = reactive({
    userRole: $pb.authStore.model?.role
})

// do not remove 
// const user = reactive({
//     username: pb.authStore.model
// })

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