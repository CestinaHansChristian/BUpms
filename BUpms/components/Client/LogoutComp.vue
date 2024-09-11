<template>
    <button @click="logout"
        class="md:text-2xl py-2 md:h-52 text-sm text-sky-600 font-semibold shadow-md shadow-gray-400 rounded-2xl h-full w-full grid place-items-center">
        <div class="top-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38bdf8"
                class=" md:h-32 h-20 w-full object-contain">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
        </div>
        Logout
    </button>
</template>

<script setup>
const store = useMyAuthStoreStore()
const pb = usePocketbase()

const logout = () => {
    pb.authStore.clear()
    store.setIsLoggedIn(pb.authStore.isValid)
    navigateTo('/')
}

</script>