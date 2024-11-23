<template>
    <ClientOnly>
        <!-- modal success  -->
        <teleport to='#modal'>
            <div v-if="isModalToggle"
                class="h-screen backdrop-blur-md z-10 w-full fixed grid place-content-center border-2 border-black">
                <div
                    class=" card-container grid place-content-center bg-slate-200 shadow-md shadow-slate-400 border-2 border-slate-300 h-72 w-60 gap-y-5 rounded-lg md:h-80 md:w-96">
                    <div class="card-heading grid place-content-center">
                        <div class="border-8 border-green-400 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="6"
                                stroke="green" class="checkedicon h-20 w-20">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                    <div class="information-wrapper text-center space-y-5 text-xs tracking-widest md:text-lg">
                        <div class="card-description text-lg uppercase font-semibold">
                            User added
                        </div>
                        <div class="redirection-notice uppercase text-sm">
                            redirecting to homepage
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
        <!-- modal error user exist -->
        <teleport to='#modal'>
            <div v-if="modalError" class="h-screen backdrop-blur-md z-10 w-full fixed grid place-content-center">
                <div
                    class=" card-container grid place-content-center bg-slate-200 shadow-md shadow-slate-400 border-2 border-slate-300 h-72 w-60 gap-y-5 rounded-lg md:h-80 md:w-96">
                    <div class="card-heading grid place-content-center">
                        <div class="border-8 border-red-400 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="6"
                                stroke="white" class="h-20 w-20 border-red-500 errorDisplay">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class="information-wrapper text-center space-y-5 text-xs tracking-widest md:text-lg">
                        <div class="card-description text-lg uppercase font-semibold">
                            An error occured existing user conflict
                        </div>
                        <div class="redirection-notice uppercase text-sm">
                            try again
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
        <!-- modal invalid email -->
        <teleport to='#modal'>
            <div v-if="isInvalidEmail" class="h-screen backdrop-blur-md z-10 w-full fixed grid place-content-center">
                <div
                    class=" card-container grid place-content-center bg-slate-200 shadow-md shadow-slate-400 border-2 border-slate-300 h-72 w-60 gap-y-5 rounded-lg md:h-80 md:w-96">
                    <div class="card-heading grid place-content-center">
                        <div class="border-8 border-red-400 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="6"
                                stroke="white" class="h-20 w-20 border-red-500 errorDisplay">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class="information-wrapper text-center space-y-5 text-xs tracking-widest md:text-lg">
                        <div class="card-description text-lg uppercase font-semibold text-red-500">
                            Invalid email format
                        </div>
                        <div class="redirection-notice text-sm space-x-2">
                            <span class="text-red-500">Please use</span>
                            <span class="text-slate-800">@bicol-u.edu.ph</span>
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
    </ClientOnly>
    <div class="bg-slate-200">
        <div class="h-screen grid place-items-center ">
            <div class="first-row-col shadow-inner shadow-slate-400  rounded-xl space-y-3 p-5 md:mx-5 lg:mx-0">
                <header
                    class="text-center pt-2 text-base md:py-5 md:text-2xl uppercase tracking-wider font-bold text-slate-700 grid place-content-center">
                    Create User
                </header>
                <hr class="border-b-2 border-slate-300">
                <div @submit.prevent="createUser" class="inputfield md:flex md:gap-x-10 md:mx-10">
                    <div @click="addProfile" class="img-profile-container grid place-content-center">
                        <div class="img-wrapper bg-slate-100 p-10 rounded-3xl shadow-md border-2 border-slate-500/5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1"
                                stroke="gray" class="size-24 md:size-32">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>
                    <form class="field-wrapper space-y-5 md:py-10 md:w-full md:space-y-5">
                        <div class="input-fields space-y-5 pt-5 mx-2">
                            <div class="username-wrapper">
                                <input v-model="username" type="text" placeholder="Username"
                                    class="w-full bg-slate-50 rounded-md p-2 placeholder:font-semibold tracking-widest shadow-md"
                                    required>
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{ displayError.username[0] }}
                                </div>
                            </div>
                            <div class="email-wrapper">
                                <input v-model="email" type="email" placeholder="@bicol-u.edu.ph" required
                                    class="w-full rounded-md p-2 bg-slate-50 placeholder:font-semibold tracking-widest shadow-md">
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{ displayError.email[0] }}
                                </div>
                            </div>
                            <div class="password-wrapper">
                                <input v-model="password" type="password" placeholder="Password" required
                                    class="w-full rounded-md p-2 bg-slate-50 placeholder:font-semibold tracking-widest shadow-md">
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{ displayError.password[0] }}
                                </div>
                            </div>
                        </div>
                        <div class="btn-controller space-y-7 md:flex md:space-y-0">
                            <div class="role-selection mx-2 md:w-full">
                                <select v-model="role" name="" id=""
                                    class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest bg-slate-50"
                                    required>
                                    <option value="" class="font-bold tracking-widest">Select Role</option>
                                    <option value="student" class="font-semibold tracking-widest">Client</option>
                                    <option value="officer1" class="font-semibold tracking-widest">Officer1</option>
                                    <option value="officer2" class="font-semibold tracking-widest">Officer2</option>
                                    <option value="admin" class="font-semibold tracking-widest">Admin</option>
                                </select>
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{ displayError.role[0] }}
                                </div>
                            </div>
                            <div class="btn-bg-wrapper flex justify-between md:w-full md:gap-x-3 text-sm mx-2 gap-x-4">
                                <button type="submit"
                                    class="btn-value bg-orange-400 p-2 rounded-lg border-orange-500 shadow-md text-white uppercase tracking-wider font-semibold cursor-pointer hover:bg-orange-600">
                                    Save Changes
                                </button>
                                <button
                                    class="btn-value bg-slate-400 p-2 rounded-lg  border-orange-500 shadow-md text-white uppercase tracking-wider font-semibold cursor-pointer hover:bg-orange-600">
                                    <nuxt-link to="/admin">
                                        Go back
                                    </nuxt-link>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'landing'
})
useHead({
    title: "Create User"
})

import * as zod from 'zod'

// variables
const username = ref('')
const email = ref('')
const password = ref('')
const role = ref('')
const { $pb } = useNuxtApp()
const displayError = ref({})
const isModalToggle = ref(false)
const modalError = ref(false)
const isInvalidEmail = ref(false)

//validation
const formSchema = zod.object({
    username: zod.string().min(3, 'Invalid Username'),
    email: zod.string().email('use @bicol-u.edu.ph'),
    password: zod.string().min(8, 'Password must be 8 characters'),
    passwordConfirm: zod.string().min(8, 'Password must be 8 characters'),
    role: zod.string().min(5, 'Select what type of user')
})

async function createUser() {
    try {
        const validatedData = formSchema.parse({
            username: username.value,
            email: email.value,
            password: password.value,
            passwordConfirm: password.value,
            role: role.value
        })

        // check if user already exists
        if (checkIfuserExists() && checkifEmailValid()) {
            try {
                // create new user
                await $pb.collection('Users_tbl').create(validatedData)
                console.log('create new user account')
                isModalToggle.value = !isModalToggle.value
                username.value = ''
                email.value = ''
                password.value = ''
                role.value = ''
                const userAddedPrev = setTimeout(() => {
                    console.log(`user: ${username} created`)
                    isModalToggle.value = !isModalToggle.value
                    clearTimeout(userAddedPrev)
                }, 2000);
                navigateTo('/admin')
            } catch (error) {
                // if user already exists display error
                modalError.value = !modalError.value
                console.log(error, 'user already exists')
                username.value = ''
                email.value = ''
                password.value = ''
                role.value = ''
                const errorPrev = setTimeout(() => {
                    modalError.value = !modalError.value
                    clearTimeout(errorPrev)
                }, 2000)
            }
        } else {
            isInvalidEmail.value = !isInvalidEmail.value
            username.value = ''
            email.value = ''
            password.value = ''
            role.value = ''
            const invalidEmailPrev = setTimeout(() => {
                isInvalidEmail.value = !isInvalidEmail.value
                clearTimeout(invalidEmailPrev)
            }, 3000)
        }
    } catch (error) {
        if (error instanceof zod.ZodError) {
            displayError.value = error.flatten().fieldErrors
            const errorPrev = setTimeout(() => {
                displayError.value = ''
                username.value = ''
                email.value = ''
                password.value = ''
                role.value = ''
                clearTimeout(errorPrev)
            }, 2000);
        }
    }
}

// check if user already exists
function checkIfuserExists() {
    if ($pb.collection('Users_tbl').getFirstListItem(`username = "${username.value}" || email = "${email.value}"`)) {
        return true
    } else {
        return false
    }
}

// check if email is valid
function checkifEmailValid() {
    const regex = /\b@bicol-u\.edu\.ph\b/gi
    if (email.value.match(regex)) {
        console.log('has bicol-u email')
        return true
    } else {
        console.log('does not have bicol email')
        return false
    }
}
</script>

<style scoped>
.checkedicon {
    stroke: rgb(120, 218, 75);
}

.errorDisplay {
    stroke: rgb(219, 66, 66)
}
</style>