<template>
    <div class="bg-slate-100">
        <!-- <nav class="">
            <header class="space-x-3">
              <nuxt-link to="/">Home</nuxt-link>
              <nuxt-link to="Client">client</nuxt-link>
              <nuxt-link to="Admin">admin</nuxt-link>
              <nuxt-link to="Officer">officer</nuxt-link>
            </header>
        </nav> -->
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
                    <div @click="show_alert_notify" class="notification-container cursor-pointer relative ">
                        <IconsNotification></IconsNotification>
                        <div class="notification h-3 w-3 bg-orange-500 rounded-full absolute top-0 right-0"></div>
                        <div v-if="alertIsClicked" class="notif_list fixed right-0 z-10">
                            <div class="list-container p-4 bg-slate-300 w-48 md:w-72 me-5 rounded-lg shadow-md shadow-gray-400 relative">
                                <div class="notif-wrapper p-1 text-sm md:text-xl bg-slate-500 h-60 overflow-y-scroll space-y-2">
                                    <!-- one notif sample -->
                                    <div class="project-notif flex justify-between gap-x-5 p-1 border-2 rounded-md">
                                        <div class="icon-wrapper grid place-items-center">
                                            <div class="img-icon h-10 w-10 bg-orange-400 rounded-full"></div>
                                        </div>
                                        <div class="notif-info">
                                            Lorem ipsum dolor sit amet.
                                        </div>
                                    </div>
                                    <div class="project-notif flex justify-between gap-x-5 p-1 border-2 rounded-md">
                                        <div class="icon-wrapper grid place-items-center">
                                            <div class="img-icon h-10 w-10 bg-orange-400 rounded-full"></div>
                                        </div>
                                        <div class="notif-info">
                                            Lorem ipsum dolor sit amet.
                                        </div>
                                    </div>
                                    <div class="project-notif flex justify-between gap-x-5 p-1 border-2 rounded-md">
                                        <div class="icon-wrapper grid place-items-center">
                                            <div class="img-icon h-10 w-10 bg-orange-400 rounded-full"></div>
                                        </div>
                                        <div class="notif-info">
                                            Lorem ipsum dolor sit amet.
                                        </div>
                                    </div>
                                    <div class="project-notif flex justify-between gap-x-5 p-1 border-2 rounded-md">
                                        <div class="icon-wrapper grid place-items-center">
                                            <div class="img-icon h-10 w-10 bg-orange-400 rounded-full"></div>
                                        </div>
                                        <div class="notif-info">
                                            Lorem ipsum dolor sit amet.
                                        </div>
                                    </div>
                                </div>
                                <div @click="logout" class="logout-btn absolute right-0 bg-red-300 px-3 rounded-md text-sky-500 hover:text-white">
                                    logout
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
</style>
<script setup>

    const pb = usePocketbase();
    const alertIsClicked = ref(false);
    const userIsClicked = ref(false)

    const user = reactive({
        username: pb.authStore.model
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