<script setup>
const { organization } = defineProps({
    organization: Object,
    require: true
})

const option1 = ref('Convention, Seminar, etc.')
</script>

<template>
    <fieldset
        class="md:space-y-3 relative text-slate-700 comment-box-wrapper grid border-2 border-slate-200 rounded-md gap-y-2 w-full h-full md:pb-1 md:gap-y-0">
        <legend class=" text-base md:text-xl indent-5 font-semibold tracking-widest uppercase md:pt-0 lg:text-center">
            Project Details
        </legend>
        <div class="space-y-3 md:space-y-2 p-2 md:text-xl md:mx-3 mx-1 lg:mx-0 lg:space-y-0">
            <div class="general-info-wrapper md:space-y-3 border-2 p-4 rounded-md bg-slate-200">
                <div class="first-row md:grid md:grid-cols-2">
                    <div class="project-name-wrapper mx-2 md:space-y-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            Title of Activity:
                        </div>
                        <div
                            class="project-name-wrapper text-sm text-slate-500 p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.Title }}
                        </div>
                    </div>
                    <div class="when-wrapper mx-2 md:space-y-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            When:
                        </div>
                        <div
                            class="project-name-wrapper text-sm text-slate-500 p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.When }}
                        </div>
                    </div>
                </div>
                <div class="second-row md:grid md:grid-cols-2">
                    <div class="who-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            Involved People:
                        </div>
                        <div
                            class="project-name-wrapper text-sm text-slate-500 p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.Who }}
                        </div>
                    </div>
                    <div class="contact-num-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            Contact number:
                        </div>
                        <div
                            class="project-name-wrapper text-sm text-slate-500 p-2 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.Contact_num }}
                        </div>
                    </div>
                </div>
                <div class="grid xl:grid-cols-2">
                    <div class="contact-num-wrapper mx-2 space-y-2">
                        <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                            Description:
                        </div>
                        <div
                            class="project-name-wrapper text-sm text-slate-500 p-3 border-2 rounded-xl overflow-y-auto max-h-52 md:h-36 font-medium md:text-lg bg-white shadow-inner tracking-tight">
                            {{ organization.Description }}
                        </div>
                    </div>
                    <div class="event-information mx-2 space-y-2">
                        <div class="space-y-2">
                            <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-xl">
                                Event Classification:
                            </div>
                            <div id="eventInformation"
                                class="text-sm text-slate-500 p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                                {{ organization.Event_Classification === "Convention or Seminar" ? option1 :
                                    organization.Event_Classification }}
                            </div>
                        </div>
                        <div v-if="organization.Others" class="others_file_information">
                            <div class="project-label ps-2 text-base text-slate-700 font-semibold uppercase md:text-sm">
                                Others:
                            </div>
                            <div
                                class="text-sm text-slate-500 p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-tight">
                                {{ organization.Others }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
</template>
<style scoped>
::-webkit-scrollbar {
    width: 5px;
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