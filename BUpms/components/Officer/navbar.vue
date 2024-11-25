<template>
    <nav class="heading-wrapper flex justify-between">
        <div class="btn-controller flex gap-x-2 md:gap-x-5">
            <div class="heading-wrapper text-xl text-sky-500 font-bold tracking-wider uppercase py-3 md:text-3xl">
                <!-- officer 1 -->
                <div v-if="$pb.authStore.model?.role === 'officer1'" class="">
                    <nuxt-link to="/officer1/projects" class="text-lg md:text-2xl">
                        Projects
                    </nuxt-link>
                </div>
                <!-- officer 2 -->
                <div v-if="$pb.authStore.model?.role === 'officer2'" class="">
                    <nuxt-link to="/officer2/projects" class="text-lg md:text-2xl">
                        Projects
                    </nuxt-link>
                </div>
            </div>
            <div class="heading-wrapper text-xl text-sky-500 font-bold tracking-wider uppercase py-3 md:text-3xl">
                <!-- officer 1 -->
                <div v-if="$pb.authStore.model?.role === 'officer1'" class="">
                    <nuxt-link to="/officer1/archive" class="text-lg md:text-2xl">
                        Reports
                    </nuxt-link>
                </div>
                <!-- officer 2 -->
                <div v-if="$pb.authStore.model?.role === 'officer2'" class="">
                    <nuxt-link to="/officer2/archive" class="text-lg md:text-2xl">
                        Archive
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div @click="logoutOfficer" class="return-btn-wrapper btn-wrapper text-xl text-red-400 font-bold tracking-wider uppercase py-2 grid place-items-center">
            <div class="logout-wrapper grid place-items-center bg-red-400 px-3 rounded-lg  hover:bg-red-500 p-1">
                <div class="logout-btn md:text-xl rounded-md md:tracking-widest text-sm uppercase font-semibold text-white cursor-pointer p-1">
                    Logout
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .router-link-active, .router-link-exact-active {
        color: white;
        background-color: #fb923c;
        padding: 7px;
        border-radius: 10px;
    }
</style>

<script setup>
    const { $pb } = useNuxtApp()
    // logout officer
    function logoutOfficer() {
        $pb.authStore.clear()
        navigateTo('/')
    }
</script>