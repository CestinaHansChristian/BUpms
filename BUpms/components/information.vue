<script setup>
const { organization } = defineProps({
    organization: Object,
    require: true
})
</script>

<template>
    <fieldset
        class="md:space-y-3 relative text-slate-700 comment-box-wrapper grid h-full border-x-2 border-slate-300 rounded-md gap-y-2 w-full md:pb-1 shadow-inner shadow-gray-300">
        <legend class="scroll-m-20 text-xl font-semibold tracking-tight text-center uppercase pt-16 md:pt-0 md:text-2xl">
            Information
        </legend>
        <div class="space-y-3 md:space-y-2 p-2 md:text-xl md:mx-3 mx-1">
            <div class="general-info-wrapper space-y-3 md:space-y-5 border-2 p-4 rounded-md bg-slate-200">
                <div class="project-name-wrapper mx-2 md:space-y-2">
                    <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                        Title of Activity:
                    </div>
                    <div
                        class="project-name-wrapper p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                        {{ organization.Title }}
                    </div>
                </div>
                <div class="when-wrapper mx-2">
                    <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                        When
                    </div>
                    <div
                        class="project-name-wrapper p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                        {{ organization.When }}
                    </div>
                </div>
                <div class="who-wrapper mx-2">
                    <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                        Who
                    </div>
                    <div
                        class="project-name-wrapper p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                        {{ organization.Who }}
                    </div>
                </div>
                <div class="contact-num-wrapper mx-2">
                    <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                        Contact num:
                    </div>
                    <div
                        class="project-name-wrapper p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                        {{ organization.Contact_num }}
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
</template>