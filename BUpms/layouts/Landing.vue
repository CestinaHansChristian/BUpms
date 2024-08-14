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
                    <div class="name-container flex place-items-center text-sky-500 font-semibold text-sm md:text-2xl ">
                        Welcome, User
                    </div>
                    <div @click="show_alert_notify" class="notification-container cursor-pointer relative ">
                        <IconsNotification></IconsNotification>
                        <div class="notification h-3 w-3 bg-orange-500 rounded-full absolute top-0 right-0"></div>
                        <div v-if="alertIsClicked" class="notif_list fixed right-0 z-10">
                            <div class="list-container bg-slate-300 w-48 md:w-72 me-5 rounded-lg shadow-md shadow-gray-400">
                                <div class="notif-wrapper p-3 text-sm md:text-xl">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nesciunt impedit provident illo, ipsum cumque iusto illum harum eaque, accusamus nemo veritatis molestiae optio temporibus sapiente. Id rerum nobis quidem!
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
<script>
    export default {
        name: 'Landing',
        data() {
            return {
                alertIsClicked: false
            }
        },
        methods: {
            show_alert_notify() {
                this.alertIsClicked = !this.alertIsClicked
            }
        }
    }
</script>