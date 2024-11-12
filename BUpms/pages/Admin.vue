<template>
    <div class="">
        <div class="main-container md:py-2">
            <nav
                class="flex justify-center text-center p-4 sticky top-0 shadow-inner md:mx-2 md:shadow-inner md:shadow-slate-300 md:rounded-md">
                <div class="heading-wrapper hidden md:grid place-content-center md:w-full md:gap-x-1">
                    <header
                        class="list-of-users text-center md:font-extrabold md:text-2xl uppercase text-blue-500 tracking-widest">
                        List of Users
                    </header>
                </div>
                <div class="btn-controller-wrapper mx-1 w-full md:w-auto ">
                    <nuxt-link to="/option/add">
                        <div
                            class="add-user-wrapper bg-blue-400 p-3 uppercase text-white rounded-lg tracking-widest font-semibold md:place-content-center hover:bg-blue-500 md:p-5">
                            Add
                        </div>
                    </nuxt-link>
                </div>
            </nav>
            <div class="users-wrapper overflow-y-scroll mx-2 h-screen p-2 bg-slate-200 space-y-4 rounded-md text-slate-800">
                <AdminUserAccountCard :userInfo=records></AdminUserAccountCard>
            </div>
        </div>
    </div>
</template>
<script setup>

userLandingGreet()
definePageMeta({
    layout: 'landing',
    middleware: ['guard', 'admin']
});

const { $pb } = useNuxtApp()
// pocketbase data 
const records = await $pb.collection('Users_tbl').getFullList({
});

</script>