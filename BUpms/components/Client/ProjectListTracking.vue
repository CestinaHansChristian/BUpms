<template>
    <div>
        <div class="project-container flex justify-between gap-x-2 md:place-content-center md:gap-x-5" >
            <div class="left-flex-container flex justify-between  shadow-md rounded-xl p-2 shadow-gray-500 gap-x-4 md:w-full">
                <div class="project-name text-blue-700 font-semibold uppercase text-base grid place-items-center md:flex md:mx-5 md:w-full">
                    <span class="pe-3 font-bold text-gray-700">Project Name:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="meta-info-wrapper grid md:w-2/12 md:mx-2 text-sky-600 font-bold">
                    <div class="date-wrapper text-xs md:text-base">
                        <span class="text-gray-800 font-semibold">
                            Date Created: 
                        </span>
                        09/02/2024
                    </div>
                    <div class="status-wrapper text-xs md:text-base md:grid">
                        <span class="text-gray-800 font-semibold">
                            Status:
                        </span>
                        Pending
                    </div>
                </div>
            </div>
            <div class="flex-wrapper flex shadow-xl shadow-gray-300 rounded-br-xl md:w-2/5">
                <div class="project-view-wrapper cursor-pointer rounded-tl-xl rounded-bl-md bg-sky-500 grid place-content-center px-3 text-white font-semibold md:w-full md:place-content-center">
                    <nuxt-link to="/tracking/status" class="md:flex">
                        <IconsMagnifyingGlass></IconsMagnifyingGlass>
                        View
                    </nuxt-link>
                </div>
                <div class="project-remove-wrapper cursor-pointer rounded-br-xl rounded-tr-md bg-red-500 grid place-content-center px-2 text-white font-semibold md:w-full md:place-content-center">
                    <div class="md:flex">
                        <IconsArchieveBox></IconsArchieveBox>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>