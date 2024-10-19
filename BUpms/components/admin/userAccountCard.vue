<template>
    <ClientOnly>
        <!-- {{data.userInfo}} -->
        <div v-for="(user, index) in data.userInfo" :key="index" class="card-wrapper ">
            <div class="card shadow-inner shadow-slate-400 p-2 rounded-md border-y-2 bg-slate-100 md:flex md:justify-between">
                <div class="top-wrapper grid rounded-t-lg border-b-2 md:border-2  md:flex md:w-full border-slate-300 md:rounded-md md:rounded-e-none md:border-e-0">
                    <div class="image-col grid place-content-center py-2 w-full  md:min-w-40 md:w-1/5 bg-slate-300 rounded-s-md">
                        <div class="border bg-slate-200 p-5 rounded-full">
                            <IconsUserprofile></IconsUserprofile>
                        </div>                          
                    </div>
                    <div class="description-wrapper w-full gap-y-2 md:mx-10 md:m-5">
                        <div class="col grid px-2 border-t-2 border-e-2 rounded-md gap-y-4 w-full md:flex md:justify-between md:gap-x-5 md:border-0 md:w-full">
                            <div class="name-wrapper text-base grid md:grid md:content-center md:text-base">
                                <div class="userName font-semibold">
                                    Name:
                                </div>
                                <div class="name-value-wrapper">
                                    {{ user.username }}
                                </div>
                            </div>
                            <div class="role-wrapper text-base grid gap-x-4  md:grid md:content-center md:text-base">
                                <div class="userRole-wrapper font-semibold">
                                    Role: 
                                </div>
                                <div class="userValue-wrapper md:w-full">
                                    {{ user.role }}
                                </div>
                            </div>
                        </div>
                        <div class="email-wrapper px-2 border-e-2 md:border-e-0 py-5">
                            <div class="role-wrapper text-base grid gap-x-4 md:pt-6 md:text-base">
                                <div class="userRole-wrapper font-semibold">
                                    Email: 
                                </div>
                                <div class="userValue-wrapper">
                                    {{ user.email }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row2 md:flex border-y-2 border-slate-300">
                    <div class="grid place-content-center rounded-b-lg p-5 bg-slate-200 border-slate-300 md:flex md:rounded-e-md md:rounded-s-none md:border-s-0 md:border-2">
                        <div class="bottom-controller-wrapper flex gap-x-4 md:my-10">
                            <div class="edit-wrapper bg-sky-500 p-3 uppercase text-white rounded-lg tracking-widest font-semibold place-content-center md:px-3">
                                edit
                            </div>
                            <div class="delete-wrapper bg-red-500 p-3 uppercase text-white rounded-lg tracking-widest font-semibold place-content-center md:px-3">
                                delete
                            </div>
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