<template>
    <div class="bg-slate-200">
        <div class="h-screen grid place-items-center ">
            <div class="first-row-col shadow-inner shadow-slate-400 rounded-xl space-y-3 p-5 md:mx-5 lg:mx-0 border-2">
                <header class="text-center pt-2 text-base md:py-5 md:text-2xl uppercase tracking-wider font-bold text-slate-700 grid place-content-center">
                    Your profile
                </header>
                <div class="inputfield space-y-3 md:flex md:gap-x-10 md:mx-10">
                    <div class="img-profile-container grid place-content-center">
                        <div class="img-wrapper bg-slate-100 p-10 rounded-full shadow-md border-2 border-slate-500/5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1" stroke="gray" class="size-24 md:size-32">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>              
                    </div>
                    <div class="border-b-2 md:border-s-2 border-slate-300"></div>
                    <div class="field-wrapper grid space-y-5 md:py-3 md:w-full md:space-y-5 ">
                        <div class="username-wrapper">
                            <label for="" class="font-semibold lg:text-2xl">Username:</label>
                            <div class="name-wrapper text-slate-500 md:text-xl">
                                {{ userProfile.username }}
                            </div>
                        </div>
                        <div class="email-wrapper">
                            <label for="" class="font-semibold lg:text-2xl">Email:</label>
                            <div class="email-wrapper text-slate-500 md:text-xl">
                                {{ userProfile.email }}
                            </div>
                        </div>
                        <div class="role-wrapper">
                            <label for="" class="font-semibold lg:text-2xl">Role:</label>
                            <div class="email-wrapper text-slate-500 md:text-xl">
                                {{ userProfile.role }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const {$pb} = useNuxtApp()
    userLandingGreet()
    definePageMeta({
        layout: 'landing'
    })

    let userProfile = ref([])
    onBeforeMount(() => {
        userProfile.value = $pb.authStore.model
    })
</script>