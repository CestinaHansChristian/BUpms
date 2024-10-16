<template>
    <div class="bg-slate-200 h-screen ">
        <div class="first-row-col gap-y-6 border-2">
            <div class="inputfield space-y-5 py-10 mx-2">
                <div class="img-profile-container grid place-content-center">
                    <div class="img-wrapper bg-slate-100 p-10 rounded-full shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                </div>
                <div class="username-wrapper">
                    <input v-model="username" type="text" placeholder="Username" class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest placeholder:uppercase shadow-md">
                </div>
                <div class="email-wrapper">
                    <input v-model="email" type="email"  placeholder="email" required class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest placeholder:uppercase shadow-md">
                </div>
                <div class="password-wrapper">
                    <input v-model="password" type="password" placeholder="password" required class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest placeholder:uppercase shadow-md">
                </div>
                <div class="role-selection">
                    <select v-model="role" name="" id="" class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest uppercase">
                        <option value="" class="font-bold tracking-widest uppercase">Select Role</option>
                        <option value="Student" class="font-semibold tracking-widest uppercase">Student</option>
                        <option value="Officer1" class="font-semibold tracking-widest uppercase">Officer1</option>
                        <option value="Officer2" class="font-semibold tracking-widest uppercase">Officer2</option>
                        <option value="Officer3" class="font-semibold tracking-widest uppercase">Officer3</option>
                        <option value="Admin" class="font-semibold tracking-widest uppercase">Admin</option>
                    </select>
                </div>
            </div>
            <div class="btn-controller">
                <div class="btn-bg-wrapper grid place-content-center">
                    <div @click="createUser" class="btn-value bg-orange-400 p-3 rounded-lg border-orange-500 shadow-md text-white uppercase tracking-wider font-semibold">
                        Save Changes
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
        layout:'landing'
    })

    // variables
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const role = ref('')

    function createUser() {
        const createUserData = {
            'username': username.value,
            'email':email.value,
            'password':password.value,
            'role':role.value
        }

        console.log(createUserData)
    }
</script>