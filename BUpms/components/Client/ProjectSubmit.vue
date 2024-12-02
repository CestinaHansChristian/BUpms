<template>
    <div v-if="!submittedAllDocs"
        class="w-full h-full grid md:flex p-1 gap-2 justify-center lg:flex-row md:container md:mx-auto">
        <div class="border-2 border-slate-300 rounded-lg p-1 md:p-4 md:w-1/4">
            <h2
                class="scroll-m-20 border-b text-lg pb-2 border-slate-400 md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Required Documents
            </h2>
            <ul class="my-6 ml-3 md:ml-6 list-disc [&>li]:mt-2">
                <li v-for="doc in requiredDocs" :key="doc.value"
                    class="flex items-center justify-between p-2 rounded hover:bg-slate-100">
                    <div class="flex items-center gap-x-5 md:grid">
                        <span class="font-medium">{{ doc.label }}</span>
                        <div class="flex gap-1">
                            <span v-if="submittedDocuments.includes(doc.value)"
                                class="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                Submitted
                            </span>
                            <span v-if="isDocumentUploaded(doc.value)"
                                class="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700">
                                Pending
                            </span>
                            <span v-if="!submittedDocuments.includes(doc.value) && !isDocumentUploaded(doc.value)"
                                class="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">
                                Required
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <p class="leading-7 [&:not(:first-child)]:mt-6 italic">
                Please ensure all documents are up-to-date and clearly scanned.
            </p>
        </div>
        <div class="w-full min-h-full flex flex-col">
            <div ref="dropzoneRef" class="border-2 border-slate-300 rounded-lg relative flex-grow p-4 w-full h-full">
                <input type="file" class="absolute top-0 left-0 min-w-full min-h-full opacity-0 z-10" multiple
                    @change="manualUpload" />
                <div :class="[
                    'flex justify-center items-center h-full rounded-lg border-dashed transition-all duration-200 relative',
                    isOverDropZone ? 'border-4 border-blue-500 bg-blue-50' : 'border-2 border-slate-300'
                ]">
                    <div v-if="confirmUploadFiles.length === 0" class="text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <h3 class="mt-2 text-sm font-medium text-gray-900">Drop files here</h3>
                        <p class="mt-1 text-xs text-gray-500">or click to select files</p>
                    </div>
                    <div v-else
                        class="w-full p-4 grid gap-4 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto h-80 md:max-h-[60vh] md:absolute top-0">
                        <div v-for="(file, index) in confirmUploadFiles" :key="index"
                            class="relative grid items-center p-4 space-x-4 z-20 bg-white rounded-lg h-28 md:h-full md:w-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <div class="wrapper grid md:place-content-center md:space-y-3">
                                <div class="flex-shrink-0 grid place-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-14 md:size-20 text-blue-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                        {{ file.file.name }}
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        {{ (file.file.size / 1024).toFixed(1) }} KB
                                    </p>
                                </div>
                            </div>
                            <button @click="removeFile(index)"
                                class="flex-shrink-0 p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 absolute top-0 right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="bg-blue-500 disabled:brightness-75 mt-4 text-white p-2 rounded-md"
                :disabled="confirmUploadFiles.length === 0" @click="uploadFiles">Confirm These Files?</button>
        </div>
    </div>
    <div v-else class="w-full h-full grid place-content-center">
        <h2 class="text-2xl font-semibold text-black">All documents have been submitted!
        </h2>
    </div>
    <ClientOnly>
        <Teleport to="#modal">
            <div v-if="confirmUpload"
                class="w-full h-full fixed bg-black/50 grid place-content-center z-20 backdrop-blur-md">
                <div class="card relative bg-white rounded-lg p-2 shadow-lg mx-1 gap-y-3 mt-10">
                    <div class="text-center font-semibold tracking-tight mb-4">
                        <div class="first-paragraph text-red-500 text-xl">
                            This process is irreversable!
                        </div>
                        <div class="second-paragraph text-sm">
                            Are you sure you want to include these files?
                        </div>
                    </div>
                    <div
                        class="flex flex-col gap-y-3 h-60 w-full overflow-y-auto  md:w-full bg-slate-300 p-2 rounded-lg ">
                        <div v-for="(fileObj, index) in initialFiles" :key="fileObj.file.name"
                            class="flex w-full md:justify-between bg-gray-100 rounded-md relative">
                            <div class="doc-info grid place-content-center gap-y-4 p-4">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span class="text-sm font-medium">{{ fileObj.file.name }}</span>
                                </div>
                                <select v-model="fileObj.documentType" class="w-full bg-slate-50"
                                    @change="updateAvailableTypes">
                                    <option value="" disabled>Select document type</option>
                                    <option v-for="doc in getAllDocumentTypes(fileObj)" :key="doc?.value"
                                        :value="doc?.value">
                                        {{ doc?.label }}
                                    </option>
                                </select>
                            </div>
                            <button @click="removeFile(index)"
                                class="ml-2 text-red-500 hover:text-red-700 absolute top-0 right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="btn-wrapper flex justify-between p-3">
                        <button @click="confirmUploadFunc()"
                            class="p-1 md:mt-4 md:px-4 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                            Confirm Upload
                        </button>
                        <button @click="confirmUpload = false"
                            class="p-1 md:mt-4 md:px-4 md:py-2 bg-gray-400 text-white rounded-md hover:bg-blue-600 transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </Teleport>
    </ClientOnly>
</template>

<script lang="ts" setup>
const { projectId, submittedDocuments } = defineProps(['projectId', 'submittedDocuments'])
const emit = defineEmits(['isSubmittedRefresh'])

const { $pb } = useNuxtApp()

const dropzoneRef = ref()
const isLoading = ref(false)
let initialFiles = ref<{ file: File; documentType: string }[]>([])
let confirmUploadFiles = ref<{ file: File; documentType: string }[]>([])
const requiredDocs = ref([
    { label: 'JURAT', value: 'jurat' },
    { label: 'Medical Certificate', value: 'medical' },
    { label: 'Endorsement from the CCMC', value: 'endorsement' },
    { label: 'Deans Permit', value: 'deans_permit' },
    { label: 'President\'s Letter', value: 'president_letter' },
    { label: 'Travel Order', value: 'travel_order' },
    { label: 'Risk Management Plan', value: 'risk_management' },
    { label: 'Cert of Insurance', value: 'insurance' },
    { label: 'Designation of Faculty in-Charge', value: 'faculty_designation' },
])
const submittedAllDocs = ref(submittedDocuments.length === requiredDocs.value.length)
const toast = useToast()

onMounted(() => {
    if (submittedDocuments.length === requiredDocs.value.length) {
        toast.add({
            id: 'notify_already_submitted',
            title: 'Already Submitted All documents',
            description: 'All required documents have been submitted. Please wait for approval.',
            icon: 'i-ic-baseline-checklist',
            color: 'blue',
            timeout: 5000
        })
    }
    // console.log(projectId)
    updateAvailableTypes()
})

const confirmUpload = ref(false)

const { isOverDropZone } = useDropZone(dropzoneRef, {
    onDrop,
    dataTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    multiple: true,
})

const availableDocumentTypes = ref(requiredDocs.value)

function getAllDocumentTypes(fileObj: { file: File; documentType: string }) {
    // Get all currently selected document types except the current file's type
    const selectedTypes = new Set([
        ...confirmUploadFiles.value.map(f => f.documentType),
        ...initialFiles.value.map(f => f.documentType),
        ...(submittedDocuments || []) // Add submitted documents directly
    ].filter(Boolean));

    // Return available docs that aren't already selected, plus current file's type
    return requiredDocs.value.filter(doc =>
        !selectedTypes.has(doc.value) || doc.value === fileObj.documentType
    );
}

function updateAvailableTypes() {
    const uploadedTypes = new Set([
        ...confirmUploadFiles.value.map(f => f.documentType),
        ...initialFiles.value.map(f => f.documentType),
        ...(submittedDocuments || []) // Add submitted documents directly
    ].filter(Boolean));
    availableDocumentTypes.value = requiredDocs.value.filter(doc => !uploadedTypes.has(doc.value));
}

function isDocumentUploaded(docType: string): boolean {
    return [...confirmUploadFiles.value, ...initialFiles.value]
        .some(f => f.documentType === docType)
}

function onDrop(files: File[] | null, event: DragEvent): void {
    if (!files) return;
    confirmUpload.value = true
    // console.log(initialFiles.value)
    initialFiles.value = files.map(file => ({ file, documentType: '' }))
    availableDocumentTypes.value = requiredDocs.value // Reset available types on drop
    if (files[0].type.includes('pdf') || files[0].type.includes('jpeg')) {
        // console.log('Valid file type:', files[0].type);
    } else {
        // console.log('Invalid file type:', files[0].type);
    }
    // console.log(files);
}

function manualUpload(e: Event) {
    const input = e.target as HTMLInputElement
    let files = input.files
    if (files) {
        onDrop(Array.from(files), new DragEvent('drop'))
    } else {
        // console.log('null')
    }
}

async function uploadFiles() {
    // Upload files here

    // console.log(confirmUploadFiles.value.map(f => f.file));
    isLoading.value = true
    try {
        for (let file of confirmUploadFiles.value) {
            await $pb.collection('Documents_tbl').create({
                "Project_rel": projectId,
                "Doc_type": file.documentType,
                "Document": file.file
            })
        }
        emit('isSubmittedRefresh')
        initialFiles.value = []
        confirmUploadFiles.value = []
    } catch (error) {
        // console.error(error)
    } finally {
        isLoading.value = false
        confirmUpload.value = false
        initialFiles.value = []
        confirmUploadFiles.value = []
        location.reload()
        updateAvailableTypes()
    }
}

function confirmUploadFunc() {
    if (confirmUploadFiles.value.length === 0) {
        confirmUploadFiles.value = initialFiles.value.filter(f => f.documentType !== '')
        confirmUpload.value = false
        updateAvailableTypes() // Update available types after confirming upload
        // console.log(initialFiles.value)
        // console.log(confirmUploadFiles.value)
    } else {
        confirmUpload.value = false
        confirmUploadFiles.value = [...confirmUploadFiles.value, ...initialFiles.value.filter(f => f.documentType !== '')]
        updateAvailableTypes() // Update available types after confirming upload
        // console.log(confirmUploadFiles.value)
    }
}

function removeFile(index: number) {
    // Remove from initialFiles
    initialFiles.value = initialFiles.value.filter((_, i) => i !== index);

    // Remove from confirmUploadFiles 
    confirmUploadFiles.value = confirmUploadFiles.value.filter((_, i) => i !== index);

    // console.log(index)

    // Close modal if no files left
    if (initialFiles.value.length === 0) {
        confirmUpload.value = false;
    }

    updateAvailableTypes();
}

</script>

<style scoped></style>
