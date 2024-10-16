<template>
    <ClientOnly>
        <teleport to='#modal' >
            <div v-if="isModalToggle" class="h-screen z-10 w-full fixed grid place-content-center border-2 border-black">
                <div  class=" card-container grid place-content-center bg-slate-200 shadow-md shadow-slate-400 border-2 border-slate-300 h-72 w-60 gap-y-5 rounded-lg md:h-80 md:w-96">
                    <div class="card-heading grid place-content-center">
                        <div class="border-8 border-green-400 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="6" stroke="green" class="checkedicon h-20 w-20">
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
    </ClientOnly>
    <div class="bg-slate-200" :class="blurForm">
        <div class="md:h-screen md:grid md:place-items-center md:-my-11 m-4 pb-5">
            <div class="first-row-col md:container shadow-inner shadow-slate-400 rounded-xl space-y-3 pb-5 mb:pb-0">
                <header class="text-center pt-2 text-base md:py-5 md:text-2xl uppercase tracking-wider font-bold text-slate-700 grid place-content-center">
                    Create User
                </header>
                <hr class="border-b-2 border-slate-300">
                <div @submit.prevent="createUser" class="inputfield md:flex md:gap-x-10 md:mx-10">
                    <div @click="addProfile" class="img-profile-container grid place-content-center">
                        <div class="img-wrapper bg-slate-100 p-10 rounded-full shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-24 md:size-32">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <div class="absolute top-2 right-6">
                                <!-- <div class="border bg-slate-300 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg> 
                                </div> -->
                            </div>  
                        </div>                   
                    </div>
                    <form class="field-wrapper space-y-5 md:py-10 md:w-full md:space-y-5">
                        <div class="input-fields space-y-5 pt-5 mx-2">
                            <div class="username-wrapper">
                                <input v-model="username" type="text" placeholder="Username" class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest shadow-md" required>
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{displayError.username[0]}}
                                </div>
                            </div>
                            <div class="email-wrapper">
                                <input v-model="email" type="email"  placeholder="Email@bicol-u.edu.ph" required class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest shadow-md">
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{displayError.email[0]}}
                                </div>
                            </div>
                            <div class="password-wrapper">
                                <input v-model="password" type="password" placeholder="Password" required class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest shadow-md">
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{displayError.password[0]}}
                                </div>
                            </div>
                        </div>
                        <div class="btn-controller space-y-7 md:flex md:space-y-0">
                            <div class="role-selection mx-2 md:w-full">
                                <select v-model="role" name="" id="" class="w-full rounded-md p-2 placeholder:font-semibold tracking-widest" required>
                                    <option value="" class="font-bold tracking-widest">Select Role</option>
                                    <option value="student" class="font-semibold tracking-widest">Student</option>
                                    <option value="officer1" class="font-semibold tracking-widest">Officer1</option>
                                    <option value="officer2" class="font-semibold tracking-widest">Officer2</option>
                                    <option value="officer3" class="font-semibold tracking-widest">Officer3</option>
                                    <option value="admin" class="font-semibold tracking-widest">Admin</option>
                                </select>
                                <div class="text-red-700 font-semibold" v-if="displayError.username">
                                    {{displayError.role[0]}}
                                </div>
                            </div>
                            <div class="btn-bg-wrapper grid place-content-center md:w-full">
                                <button type="submit" @click="createUser" class="btn-value bg-orange-400 p-2 rounded-lg border-orange-500 shadow-md text-white uppercase tracking-wider font-semibold cursor-pointer hover:bg-orange-600">
                                    Save Changes
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
        layout:'landing'
    })

    import * as zod from 'zod'

    // variables
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const role = ref('')
    const pb = usePocketbase()
    const displayError = ref({})
    const isModalToggle = ref(false)

    // blur effect
    const bgBlur = reactive({
        'blur': 100,
        'active': true
    })

    // remove blur effect
    const bgNotBlur = reactive({
        'blur': 0,
        'active': true
    })


    const blurForm = computed(()=>{
        return isModalToggle.value ? bgBlur : bgNotBlur
    })

    //validation
    const formSchema = zod.object({
        username: zod.string().min(3,'Invalid Username'),
        email: zod.string().email('use @bicol-u.edu.ph'),
        password: zod.string().min(8,'Password must be 8 characters'),
        passwordConfirm: zod.string().min(8,'Password must be 8 characters'),
        role: zod.string().min(5,'Select what type of user')
    })

    async function createUser() {
        try {
            const validtedData = formSchema.parse({
                username: username.value,
                email:email.value,
                password:password.value,
                passwordConfirm:password.value,
                role:role.value
            })

            if(await pb.collection('Users_tbl').create(validtedData)) {
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
            }
        } catch (error) {
            if(error instanceof zod.ZodError) {
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
</script>

<style scoped>
    .checkedicon {
        stroke: rgb(120, 218, 75);
    }
</style>