<template>
    <div class="comment-box-wrapper grid h-full border-2 rounded-xl gap-y-2 w-full md:mx-4 md:h-80">
        <div class="comment-box-wrapper bg-sky-400 text-white tracking-widest p-1 rounded-t-xl ps-3 uppercase font-medium md:grid md:place-content-center">
            Comment Box
        </div>
        <div class="comment-content-wrapper mx-2">
            <div class="display-message overflow-y-scroll h-32 bg-sky-400 rounded-md space-y-2 py-1">
                <!-- component for reciever -->
                <div class="from-client-msg-wrapper m-1 p-2 bg-slate-100 rounded-md space-y-2">
                    <div class="top-message flex gap-x-5">
                        <div class="icon-wrapper grid place-content-center ps-2">
                            <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                        </div>
                        <div class="text-msg grid place-items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                        </div>
                    </div>
                    <hr>
                    <div class="message-details-wrapper text-center text-xs tracking-widest">
                        08/24/2024
                    </div>
                </div>
                <div class="from-client-msg-wrapper justify-between gap-x-3 m-1 bg-slate-100 rounded-md space-y-2">
                    <div class="top-message flex">
                        <div class="text-msg w-full ps-2 grid place-items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                        </div>
                        <div class="icon-wrapper grid place-content-center pe-2 p-2">
                            <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                        </div>
                        <hr>
                    </div>
                    <hr>
                    <div class="message-details-wrapper text-center text-xs tracking-widest">
                        08/24/2024
                    </div>
                </div>
                <!-- component for sender -->
                <div class="from-client-msg-wrapper justify-between gap-x-3 m-1 bg-slate-100 rounded-md space-y-2">
                    <div class="top-message flex">
                        <div class="text-msg w-full ps-2 grid place-items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa?
                        </div>
                        <div class="icon-wrapper grid place-content-center pe-2 p-2">
                            <div class="icon bg-orange-300 h-10 w-10 rounded-full"></div>
                        </div>
                        <hr>
                    </div>
                    <hr>
                    <div class="message-details-wrapper text-center text-xs tracking-widest">
                        08/24/2024
                    </div>
                </div>
            </div>
        </div>
        <div class="send-btn-control grid p-3 bg-orange-400 rounded-b-lg">
            <div class="text-wrapper flex justify-between gap-x-5">
                <input type="text" name="" id="" class="rounded-md w-full p-1 ps-2 tracking-widest font-medium">
                <div class="cursor-pointer submit-btn bg-sky-400 grid place-items-center hover:bg-sky-600 hover:border-sky-700 border-2 px-2 p-1 rounded-lg tracking-widest uppercase text-white font-medium">
                    submit
                </div>
            </div>
        </div>
    </div> 
</template>