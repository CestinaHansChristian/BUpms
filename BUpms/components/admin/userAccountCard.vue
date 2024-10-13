<template>
    
    <ClientOnly>
        <!-- {{ userInfo }} -->
        <div v-for="(user, index) in userInfo" :key="index" class="card-wrapper ">
            <div class="card shadow-inner shadow-slate-400 p-2 rounded-md border-y-2 bg-slate-100 md:flex md:justify-between">
                <div class="top-wrapper flex rounded-t-lg border-b-2 md:border-2 md:w-full border-slate-300 md:rounded-md md:rounded-e-none md:border-e-0">
                    <div class="image-col">
                        <img :src="user.picture.large" alt="" class="h-36 w-60 md:rounded-s-md rounded-tl-md">
                    </div>
                    <div class="description-wrapper grid place-content-center gap-y-7 w-full md:flex md:gap-x-5 ">
                        <div class="name-wrapper flex gap-x-4 md:grid md:place-content-center md:w-full">
                            <div class="usersName">
                                Name:
                            </div>
                            <div class="name-value-wrapper">
                                {{ user.name.first }}
                            </div>
                        </div>
                        <div class="role-wrapper flex gap-x-4 md:grid md:place-content-center md:w-full">
                            <div class="userRole-wrapper">
                                Role: 
                            </div>
                            <div class="userValue-wrapper">
                                {{ user.gender }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid place-content-center rounded-b-lg p-5 bg-slate-200 border-slate-300 md:flex md:rounded-e-md md:rounded-s-none md:border-s-0 md:border-2">
                    <div class="bottom-controller-wrapper flex gap-x-4">
                        <div class="edit-wrapper bg-sky-500 p-5 uppercase text-white rounded-lg tracking-widest font-semibold place-content-center">
                            edit
                        </div>
                        <div class="delete-wrapper bg-red-500 p-3 uppercase text-white rounded-lg tracking-widest font-semibold place-content-center">
                            delete
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>
<script setup>
    const data = defineProps({
        userInfo: Array
    })

    console.log(data)
</script>