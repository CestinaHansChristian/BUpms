<script setup>
    defineProps(['organization'])
</script>

<template>
    <div class="">
        <div class="project-details-wrapper grid gap-y-2">
            <div class="project-details-heading font-medium text-xl p-1 text-blue-900 tracking-wide">
                Project Details
            </div>
            <div class="project-details-content space-y-1">
                <div class="border-2 border-gray-300 shadow-inner shadow-gray-400 rounded-xl">
                    <div class="date-created-container flex border-b-4 border-gray-300">
                        <div class="created-wrapper h-14 w-full grid p-2 place-items-center bg-slate-200 rounded-tl-xl text-blue-800 font-semibold text-sm">
                            DATE CREATED
                        </div>
                        <div class="created-value-wrapper p-2 w-full h-14 grid place-items-center bg-slate-300 rounded-tr-xl font-semibold text-sm text-slate-800">
                            AUG / 21 /2024
                        </div>
                    </div>
                    <div class="date-updated-contianer grid grid-cols-2 justify-around">
                        <div class="created-wrapper h-14 w-full grid p-2 place-items-center bg-slate-200 rounded-bl-xl text-blue-800 font-semibold text-sm">
                            DATA UPDATED
                        </div>
                        <div class="created-value-wrapper p-2 w-full h-14 grid place-items-center bg-slate-300 rounded-br-xl font-semibold text-sm text-slate-800">
                            AUG / 21 /2024
                        </div>
                    </div>
                </div>
            </div>
            <div class="org-name-wrapper relative  shadow-md border-2 shadow-gray-400 p-7 rounded-lg">
                <div class="absolute top-0 left-0 text-sm text-gray-700 font-bold tracking-wide p-1">
                    Organization Involve:
                </div>
                <div class="org-wrapper grid place-content-center text-xl text-blue-800 font-bold tracking-widest">
                    {{ organization }}
                </div>
            </div>
            <div class="return-btn-wrapper">
                <div class="return-btn bg-red-400 text-center font-medium tracking-widest text-xl rounded-md p-1 text-white">
                    Return
                </div>
            </div>
        </div>
    </div>
</template>