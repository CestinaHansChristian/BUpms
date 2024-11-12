<template>
    <div class="actions-container md:gap-y-10 space-y-5 tracking-widest uppercase ">
        <div class="actions-first-col flex m-2 gap-x-5">
            <nuxt-link to="client/submission"
                class="md:text-2xl py-2 text-center bg-white md:h-52 text-sky-600 font-semibold shadow-sm shadow-gray-400 rounded-xl h-full w-full grid place-items-center hover:bg-sky-200">
                <div class="top-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#0ea5e9" class=" md:h-32 md:w-32 h-20 w-full object-contain">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </div>
                <div class="card-desc mx-5">
                    Submit projects
                </div>
            </nuxt-link>
            <nuxt-link to="/client/projects"
                class="md:text-2xl py-2 bg-white text-center md:h-52 text-sky-600 font-semibold shadow-sm shadow-gray-400 rounded-xl h-full w-full grid place-items-center hover:bg-sky-200">
                <div class="top-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#0ea5e9" class=" md:h-32 h-20 w-full object-contain">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <div class="card-desc mx-5">
                    Aprroval Tracker
                </div>
            </nuxt-link>
        </div>
        <div class="actions-first-col flex m-2 gap-x-3 grid-cols-3 ">
            <nuxt-link to="/profile"
                class="md:text-2xl bg-white hover:bg-sky-200 py-2 text-sm text-sky-600 font-semibold md:h-52 shadow-sm shadow-gray-400 rounded-xl h-full w-full grid place-items-center">
                <div class="top-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#0ea5e9" class="md:h-32 h-24 w-full object-contain">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
                Profile
            </nuxt-link>
            <nuxt-link to="../../contact"
                class="md:text-2xl bg-white hover:bg-sky-200 md:h-52 py-2 text-sm text-sky-600 font-semibold shadow-sm shadow-gray-400 rounded-xl h-full w-full grid place-items-center">
                <div class="top-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#0ea5e9" class=" md:h-32 h-24 w-full object-contain">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                Contacts
            </nuxt-link>
            <button @click="logout"
                class="md:text-2xl bg-white py-2 hover:bg-sky-200 md:h-52 uppercase text-sky-600 font-semibold shadow-sm shadow-gray-400 rounded-xl h-full w-full grid place-items-center">
                <div class="top-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#0ea5e9" class=" md:h-32 h-24 w-full object-contain">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                </div>
                Logout
            </button>
        </div>
    </div>
</template>
<script setup>
    const $pb = useNuxtApp()
const logout = () => {
    
    const { $pb } = useNuxtApp()
    $pb.authStore.clear()
    navigateTo('/')
}

</script>