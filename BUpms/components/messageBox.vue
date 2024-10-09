<template>
    <fieldset class="md:space-y-3 comment-box-wrapper grid h-full border-2 border-slate-300 rounded-md gap-y-2 w-full md:pb-1 shadow-inner shadow-gray-300">
        <legend class="text-center font-semibold text-lg uppercase">
            Comment Box
        </legend>
        <div class="comment-content-wrapper mx-2 h-full">
            <div class="display-message overflow-y-scroll h-32 md:h-52 bg-slate-300 rounded-md space-y-2 py-1">
                <!-- component for reciever -->
                <div class="from-client-msg-wrapper mx-1 p-2 bg-slate-100 rounded-md space-y-2">
                    <div class="top-message flex gap-x-5">
                        <div class="icon-wrapper grid place-content-center ps-2">
                            <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                        </div>
                        <div class="text-msg grid place-items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                        </div>
                    </div>
                    <hr class="border-b-2 border-slate-200">
                    <div class="message-details-wrapper text-center text-xs tracking-widest">
                        08/24/2024
                    </div>
                </div>
                <!-- component from sender -->
                <div class="from-client-msg-wrapper justify-between gap-x-3 m-1 p-2 bg-slate-100 rounded-md space-y-2">
                    <div class="top-message flex">
                        <div class="text-msg w-full ps-2 grid place-items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                        </div>
                        <div class="icon-wrapper grid place-content-center pe-2 p-2">
                            <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                        </div>
                        <hr>
                    </div>
                    <hr class="border-b-2 border-slate-200">
                    <div class="message-details-wrapper text-center text-xs tracking-widest">
                        08/24/2024
                    </div>
                </div>
                <!-- component for sender -->
                <div class="from-client-msg-wrapper justify-between gap-x-3 m-1 p-2 bg-slate-100 rounded-md space-y-2">
                    <div class="top-message flex">
                        <div class="text-msg w-full ps-2 grid place-items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                        </div>
                        <div class="icon-wrapper grid place-content-center pe-2 p-2">
                            <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                        </div>
                        <hr>
                    </div>
                    <hr class="border-b-2 border-slate-200">
                    <div class="message-details-wrapper text-center text-xs tracking-widest">
                        08/24/2024
                    </div>
                </div>
            </div>
        </div>
        <div class="send-btn-control grid p-1 rounded-b-lg">
            <div class="text-wrapper flex justify-between gap-x-2 relative md:mx-2">
                <textarea name="" id="" class="w-full p-3 h-14 tracking-widest border-2 border-slate-300 rounded-xl ps-3 bg-slate-100" placeholder="Type a message here. . ."></textarea>
                <div class="cursor-pointer submit-btn absolute right-0 border-slate-300 h-full grid place-items-center border-s-2 px-2 p-1 rounded-e-xl text-blue-500 hover:bg-sky-400 hover:text-white">
                    <IconsAirplane></IconsAirplane>
                </div>
            </div>
        </div>
    </fieldset> 
</template>
<style scoped>
    textarea {
        resize: none
    }
</style>