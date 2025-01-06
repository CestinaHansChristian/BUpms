<template>
    <div class="px-4 md:grid md:align-middle">
        <form @submit.prevent="submit_doc"
            class=" shadow-inner p-5 border-b-2 border-slate-300 shadow-slate-400 my-10 rounded-xl pb-5 mb:pb-0">
            <h1 class="text-3xl font-bold mb-6">Submit New Activity</h1>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <div>
                        <label for="activityTitle" class="block text-sm font-medium text-gray-700 md:text-xl">Title of
                            Activity</label>
                        <input v-model="clientActivityTitle" type="text" id="activityTitle" required
                            class="mt-1 block w-full rounded-md bg-black text-slate-300 invert capitalize shadow-md border-2 border-slate-800 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3">
                        <p v-if="validationErrors.clientActivityTitle" class="text-red-500 text-sm mt-1">
                            {{ validationErrors.clientActivityTitle[0] }}
                        </p>
                    </div>

                    <div>
                        <label for="description"
                            class="block text-sm font-medium text-gray-700 md:text-xl">Description</label>
                        <textarea v-model="clientDescription" id="description" rows="4" required
                            placeholder="Description"
                            class="mt-1 block invert bg-black text-slate-300 border-slate-800 shadow-md border-2 w-full rounded-md  focus:border-indigo-300 focus:ring placeholder:tracking-wider focus:ring-indigo-200 focus:ring-opacity-50 p-3 resize-none md:h-72"></textarea>
                        <p v-if="validationErrors.clientDescription" class="text-red-500 text-sm mt-1">
                            {{ validationErrors.clientDescription[0] }}
                        </p>
                    </div>

                    <div>
                        <label for="whoInput" class="block text-sm font-medium text-gray-700 md:text-xl">Who</label>
                        <input v-model="whoInput" type="text" id="whoInput" required
                            class="mt-1 block invert bg-black text-slate-300 w-full rounded-md border-slate-800 shadow-md border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3">
                        <p v-if="validationErrors.whoInput" class="text-red-500 text-sm mt-1">
                            {{ validationErrors.whoInput[0] }}
                        </p>
                    </div>

                    <div>
                        <label for="whenInput" class="block text-sm font-medium text-gray-700 md:text-xl">When</label>
                        <div class="wrapper relative">
                            <input v-model="whenInput" type="date" id="whenInput" required
                                class="mt-1 block bg-black invert w-full text-slate-300 rounded-md shadow-md border-2 border-slate-800 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3">
                        </div>
                        <p v-if="validationErrors.whenInput" class="text-red-500 text-sm mt-1">
                            {{ validationErrors.whenInput[0] }}
                        </p>
                    </div>
                </div>
                <div class="space-y-4">
                    <div>
                        <label for="eventClassification"
                            class="block text-sm font-medium text-gray-700 md:text-xl">Event
                            Classification</label>
                        <select v-model="eventClassification" id="eventClassification" required
                            class="mt-1 block bg-black w-full rounded-md text-slate-300 invert border-slate-800 shadow-md border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3">
                            <option value="" class="bg-slate-50 text-slate-800">Select an Item</option>
                            <option value="Convention, Seminar, etc." class="bg-slate-50 text-slate-800">Convention,
                                Seminar, etc.
                            </option>
                            <option value="Volunteer Work" class="bg-slate-50 text-slate-800">Volunteer Work</option>
                            <option value="Advocacy Project Campaigns" class="bg-slate-50 text-slate-800">Advocacy
                                Project Campaigns
                            </option>
                            <option value="Sports Activities" class="bg-slate-50 text-slate-800">Sports Activities
                            </option>
                            <option value="Interschool Competitions / Tournaments" class="bg-slate-50 text-slate-800">
                                Interschool
                                Competitions /
                                Tournaments</option>
                            <option value="Culture & Arts Competitions" class="bg-slate-50 text-slate-800">Culture &
                                Arts Competitions
                            </option>
                            <option value="Others" class="bg-slate-50 text-slate-800">Others</option>
                        </select>
                        <p v-if="validationErrors.eventClassification" class="text-red-500 text-sm mt-1">
                            {{ validationErrors.eventClassification[0] }}
                        </p>
                    </div>

                    <div>
                        <label for="contactNumber" class="block text-sm font-medium text-gray-700 md:text-xl">Contact
                            Number</label>
                        <input v-model="contactNumber" type="text" inputmode="numeric" pattern="[0-9]*"
                            id="contactNumber" required
                            class="mt-1 block w-full bg-black text-slate-300 rounded-md invert border-slate-800 shadow-md border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3">
                        <p v-if="validationErrors.contactNumber" class="text-red-500 text-sm mt-1">
                            {{ validationErrors.contactNumber[0] }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-end space-x-4 pt-7 md:pt-2">
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
                <nuxt-link to="/client"
                    class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cancel</nuxt-link>
            </div>
        </form>
    </div>

    <!-- Modals -->
    <ClientOnly>
        <Teleport to="#modal">
            <div v-if="showConfirmModal"
                class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-md mx-4">
                <div class="bg-white p-6 rounded-lg max-w-sm w-full">
                    <h2 class="text-xl font-bold mb-4">Confirm Submission</h2>
                    <p class="mb-4">Are you sure you want to submit this activity?</p>
                    <div class="flex justify-end space-x-4">
                        <button @click="showConfirmModal = false"
                            class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cancel</button>
                        <button @click="confirmSubmission"
                            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Confirm</button>
                    </div>
                </div>
            </div>
        </Teleport>

        <Teleport to="#modal">
            <div v-if="isPosted"
                class="fixed inset-0 bg-opacity-50 flex items-center justify-center mx-4 backdrop-blur-md z-10">
                <div class="bg-white p-6 rounded-lg max-w-sm w-full text-center">
                    <IconsDocument class="mx-auto mb-4" />
                    <p class="mb-2 font-bold">Your submission has been posted successfully.</p>
                    <p class="text-sm text-gray-500 ">Redirecting to Tracking Page after 3 seconds...</p>
                </div>
            </div>
        </Teleport>

        <Teleport to="#modal">
            <div v-if="missingFields" class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-6 rounded-lg max-w-sm w-full text-center">
                    <IconsWarningIcon class="mx-auto mb-4" />
                    <p class="mb-4">Please correct the following errors:</p>
                    <ul class="text-left list-disc pl-5 mb-4">
                        <li v-for="(errors, field) in validationErrors" :key="field" class="text-red-500">
                            {{ errors[0] }}
                        </li>
                    </ul>
                    <button @click="missingFields = false"
                        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
                </div>
            </div>
        </Teleport>
    </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { z } from 'zod'

const { $pb } = useNuxtApp()
const router = useRouter()

userLandingGreet()
definePageMeta({
    layout: 'landing',
    middleware: ['guard', 'client']
})

const clientActivityTitle = ref('')
const clientDescription = ref('')
const eventClassification = ref('')
const whoInput = ref('')
const whenInput = ref('')
const contactNumber = ref('')
const showConfirmModal = ref(false)
const isPosted = ref(false)
const missingFields = ref(false)
const loading = ref(false)

const submissionSchema = z.object({
    clientActivityTitle: z.string().min(1, "Title is required"),
    clientDescription: z.string().min(1, "Description is required"),
    eventClassification: z.string().min(1, "Event classification is required"),
    whoInput: z.string().min(1, "Who is required"),
    whenInput: z.string().min(1, "When is required"),
    contactNumber: z.coerce.number({
        required_error: "Contact number is required",
        invalid_type_error: "Contact number must be a number"
    })
        .int("Contact number must be an integer")
        .min(1000000000, "Contact number must be at least 10 digits")
        .max(99999999999, "Contact number must not exceed 11 digits")
})

const validationErrors = ref({})

function submit_doc() {
    try {
        submissionSchema.parse({
            clientActivityTitle: clientActivityTitle.value,
            clientDescription: clientDescription.value,
            eventClassification: eventClassification.value,
            whoInput: whoInput.value,
            whenInput: whenInput.value,
            contactNumber: contactNumber.value
        })
        validationErrors.value = {}
        showConfirmModal.value = true
    } catch (error) {
        if (error instanceof z.ZodError) {
            validationErrors.value = error.flatten().fieldErrors
            missingFields.value = true
        }
    }
}

async function confirmSubmission() {
    showConfirmModal.value = false
    isPosted.value = true
    loading.value = true
    const createdProject = {
        "User": $pb.authStore.model.id,
        "Title": clientActivityTitle.value,
        "When": whenInput.value,
        "Who": whoInput.value,
        "Contact_num": contactNumber.value,
        'Description': clientDescription.value
    }
    // console.log(createdProject)
    try {
        const newProject = await $pb.collection('Projects_tbl').create(createdProject, {
            requestKey: 'createProject'
        })
        // console.log(newProject)
        const data = {
            "Project_id": newProject.id,
            "stages": "stage1"
        };
        const relStatus = await $pb.collection('Status_tbl').create(data, {
            requestKey: 'createStatus'
        })
        if (!relStatus) {
            $pb.cancelRequest('createProject')
            $pb.cancelRequest('createStatus')
            await $pb.collection('Projects_tbl').delete(newProject.id)
        }
        const relActivity = await $pb.collection('Projects_tbl').update(newProject.id, {
            "Status": relStatus.id
        })


        setTimeout(() => {
            loading.value = false
            router.push('/client/projects')
        }, 3000)
    } catch (error) {
        // console.log(error)
    }

    // Redirect after a delay
}
</script>

<style scoped>
/* ... (keep any existing styles) */
</style>
