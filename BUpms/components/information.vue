<script setup>
const { organization } = defineProps({
    organization: Object,
    require: true
})
</script>

<template>
    <fieldset
        class="md:space-y-3 relative text-slate-700 comment-box-wrapper grid border-2 border-slate-200 rounded-md gap-y-2 w-full md:pb-1">
        <legend
            class=" text-xl font-semibold tracking-widest text-center uppercase md:pt-0 md:text-xl">
            Information
        </legend>
        <div class="space-y-3 md:space-y-2 p-2 md:text-xl md:mx-3 mx-1">
            <div class="general-info-wrapper md:space-y-3 border-2 p-4 rounded-md bg-slate-200">
                <div class="first-row md:grid md:grid-cols-2">
                    <div class="project-name-wrapper mx-2 md:space-y-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            Title of Activity:
                        </div>
                        <div
                            class="project-name-wrapper text-slate-500 p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.Title }}
                        </div>
                    </div>
                    <div class="when-wrapper mx-2 md:space-y-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            When:
                        </div>
                        <div
                            class="project-name-wrapper text-slate-500 p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.When }}
                        </div>
                    </div>
                </div>
                <div class="second-row md:grid md:grid-cols-2">
                    <div class="who-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            Who:
                        </div>
                        <div
                            class="project-name-wrapper text-slate-500 p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.Who }}
                        </div>
                    </div>
                    <div class="contact-num-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            Contact number:
                        </div>
                        <div
                            class="project-name-wrapper text-slate-500 p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.Contact_num }}
                        </div>
                    </div>
                </div>
                <div class="contact-num-wrapper mx-2 space-y-2">
                    <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                        Description:
                    </div>
                    <div
                        class="project-name-wrapper text-slate-500 p-3 border-2 rounded-xl overflow-y-scroll max-h-52 md:h-36 font-medium md:text-lg bg-white shadow-inner tracking-tight">
                        {{ organization.Description }}
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
</template>
<style scoped>
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: #0369a1;
    border-radius: 5px;
}

::-webkit-scrollbar-track {
    background-color: #7dd3fc;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #0369a1;
}
</style>