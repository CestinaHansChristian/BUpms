<template>
    <div class="bg-slate-100">
        <div id="modal"></div>
        <nav class="h-20 p-3 shadow-md flex sticky top-0 bg-slate-100 z-50">
            <div class="relative justify-between flex  w-full">
                <img src="assets/BU_title.png" alt="" class="object-contain min-w-32">
                <div class="header-2-wrapper flex place-self-center gap-x-5 px-3 min-w-32 ">
                    <clientOnly>
                        <div @click="show_user_option" class="name-container grid place-items-center text-sky-500 font-semibold text-sm md:text-2xl tracking-widest">
                            Welcome,
                            {{ ifLoggedIn.username }}
                        </div>
                    </clientOnly>
                    <div :class="displayNotif" @click="show_alert_notify" class=" notification-container cursor-pointer relative ">
                        <IconsNotification></IconsNotification>
                        <div class="notification h-3 w-3 bg-orange-500 rounded-full absolute top-0 right-0"></div>
                        <div v-if="alertIsClicked" class="notif_list fixed right-0 z-10 pt-2">
                            <div class="list-container p-4 bg-slate-200 w-48 md:w-72 me-5 rounded-lg shadow-md shadow-gray-400 relative">
                                <div class="notif-wrapper p-1 text-sm md:text-xl bg-slate-300 h-60 overflow-y-scroll space-y-2 rounded-md">
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
                </div>
            </div>
        </nav>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>
<style scoped>
    .router-link-active {
        background-color: skyblue;
    }

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

    const pb = usePocketbase();
    const alertIsClicked = ref(false);
    const userIsClicked = ref(false)

    // get current logged in user role
    const isLoggedUserAdmin = reactive({
        userRole: pb.authStore.model?.role
    })

    // do not remove 
    const user = reactive({
        username: pb.authStore.model
    })

    // hide notif class
    const isNotifHidden = reactive({
        active: true,
        'hidden': true
    })

    // display notif class
    const isNotifShow = reactive({
        active: true,
        'block': true
    })

    // hides if role is admin
    const displayNotif = computed(()=> {
        return isLoggedUserAdmin.userRole === 'admin'  ? isNotifHidden :  isNotifShow
    })

    // display user option window
    const show_user_option = () => {
        userIsClicked.value = !userIsClicked.value
    }
    // username display on top
    const ifLoggedIn = computed(()=> {
        return pb.authStore.model ? user.username : 'Not registered'
    })

    // display alert window
    const show_alert_notify = () => {
        alertIsClicked.value = !alertIsClicked.value;
    };

    const logout = () => {
        const pb = usePocketbase();
        const router = useRouter();
        pb.authStore.clear();
        router.push('/');
    };

    defineExpose({
        alertIsClicked,
        show_alert_notify,
        logout
    });
</script>