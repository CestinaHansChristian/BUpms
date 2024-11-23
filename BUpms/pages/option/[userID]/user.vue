<template>
    <div class="bg-slate-200">
        <div class="h-screen grid place-items-center md:-my-11 mx-2 ">
            <div class="first-row-col shadow-inner shadow-slate-400 rounded-xl space-y-3 p-5 md:mx-5 lg:mx-0">
                <header
                    class="text-center pt-2 text-base md:py-5 uppercase md:text-2xl tracking-wider font-bold text-slate-700 mx-2">
                    Update Details
                </header>
                <hr class="border-b-2 border-slate-300">
                <div @submit.prevent="createUser" class="inputfield md:flex md:gap-x-10 md:mx-10">
                    <div @click="addProfile" class="img-profile-container grid place-content-center gap-y-4">
                        <div class="img-wrapper bg-slate-100 rounded-full shadow-md">
                            <div v-if="userRole == 'admin'"
                                class=" bg-orange-300 p-5 rounded-3xl border-2 border-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1"
                                    stroke="gray" class="size-24 md:size-32">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div v-if="userRole == 'student'"
                                class=" bg-slate-200 p-5 rounded-3xl border-2 border-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1"
                                    stroke="gray" class="size-24 md:size-32">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div v-if="userRole == 'officer1' || userRole == 'officer2' || userRole == 'officer3'"
                                class="border-2 border-sky-500 bg-sky-300 p-5 rounded-3xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1"
                                    stroke="gray" class="size-24 md:size-32">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                        </div>
                        <span v-if="displayUser == ''"
                            class="text-slate-700 text-center font-semibold tracking-wider opacity-0">
                            Username
                        </span>
                        <span v-else class="text-slate-700 text-center font-semibold tracking-wider">
                            {{ displayUser }}
                        </span>
                    </div>
                    <form @submit.prevent="updateUserInfo"
                        class="field-wrapper space-y-5 md:py-10 md:w-full md:space-y-5">
                        <div class="input-fields space-y-5 pt-5 mx-2">
                            <div class="username-wrapper">
                                <input v-model="username" type="text" placeholder="Username"
                                    class="w-full bg-slate-50 rounded-md p-2 placeholder:font-semibold tracking-widest shadow-md"
                                    required>
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{ displayError.username[0] }}
                                </div>
                            </div>
                            <div class="password-wrapper space-y-2">
                                <input v-model="password" type="password" placeholder="Password" required
                                    class="w-full bg-slate-50 rounded-md p-2 placeholder:font-semibold tracking-widest shadow-md">
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{ displayError.password[0] }}
                                </div>
                                <div class="password-guideline text-sm md:ml-3 text-red-500">
                                    <i>
                                        *Password must be 8 characters
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div class="btn-controller space-y-7 md:flex md:space-y-0 md:justify-between">
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
// variables 
const { $pb } = useNuxtApp()
const route = useRoute()
userLandingGreet()
definePageMeta({
    layout: 'landing'
})
import * as zod from 'zod'

// fetch username and userID
let userID = ref('')
let userNamveValue = ref('')
let userRole = ref('')
let displayUser = ref('')
const displayError = ref({})

// vmodel data
let username = ref('')
let password = ref('')
let role = ref('')

//fetch username to dbase
onMounted(async () => {
    // get url params
    userID.value = route.params.userID
    try {
        userNamveValue.value = await $pb.collection('Users_tbl').getOne(userID.value)
        displayUser.value = userNamveValue.value.username
        userRole.value = userNamveValue.value.role
    } catch (error) {

    }
})

//validation
const formSchema = zod.object({
    username: zod.string().min(3, 'Invalid Username'),
    password: zod.string().min(8, 'Password must be 8 characters'),
    passwordConfirm: zod.string().min(8, 'Password must be 8 characters'),
    role: zod.string().min(5, 'Select what type of user')
})

// update user details
async function updateUserInfo() {
    try {
        const validatedData = formSchema.parse({
            username: username.value,
            password: password.value,
            passwordConfirm: password.value,
            role: role.value
        })

        console.log('pre creation')
        // check if user already exists
        if (checkIfUserIDExist()) {
            try {
                // create new user
                await $pb.collection('Users_tbl').update(userID.value, validatedData)
                console.log('Updated user account')
                username.value = ''
                password.value = ''
                role.value = ''
                const userAddedPrev = setTimeout(() => {
                    console.log(`user: ${username} created`)
                    clearTimeout(userAddedPrev)
                }, 2000);
                navigateTo('/admin')
            } catch (error) {
                // if user already exists display error
                console.log(error, 'user already exists')
                username.value = ''
                password.value = ''
                role.value = ''
                const errorPrev = setTimeout(() => {
                    modalError.value = !modalError.value
                    clearTimeout(errorPrev)
                }, 2000)
            }
        } else {
            console.log('invalid email')
            username.value = ''
            password.value = ''
            role.value = ''
            const invalidEmailPrev = setTimeout(() => {
                clearTimeout(invalidEmailPrev)
            }, 3000)
        }
    } catch (error) {
        if (error instanceof zod.ZodError) {
            displayError.value = error.flatten().fieldErrors
            console.log('invalid fields')
            const errorPrev = setTimeout(() => {
                displayError.value = ''
                username.value = ''
                password.value = ''
                role.value = ''
                clearTimeout(errorPrev)
            }, 2000);
        }
    }
}

// check if user already exists
function checkIfUserIDExist() {
    if ($pb.collection('Users_tbl').getFirstListItem(`id = "${userID.value}"`)) {
        return true
    } else {
        return false
    }
}
</script>