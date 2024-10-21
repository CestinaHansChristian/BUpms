<template>
    <div class="w-full min-h-72 flex p-4 gap-2 justify-center sm:flex-col lg:flex-row">
        <div class="border-2 rounded-lg p-4 w-1/4">
            <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Required Documents
            </h2>
            <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
                <li v-for="doc in requiredDocuments" :key="doc.value" class="flex items-center justify-between">
                    <span>{{ doc.label }}</span>
                    <span v-if="isDocumentUploaded(doc.value)" class="text-green-500">✓</span>
                    <span v-else class="text-red-500">✗</span>
                </li>
            </ul>
            <p class="leading-7 [&:not(:first-child)]:mt-6">
                Please ensure all documents are up-to-date and clearly scanned.
            </p>
        </div>
        <div ref="dropzoneRef" class="border-2 rounded-lg relative p-4 w-full">
            <input type="file" class="absolute top-0 left-0 w-full h-full opacity-0" multiple @change="manualUpload" />
            <div
                :class="isOverDropZone ? 'border-2 border-dashed rounded-lg flex justify-center items-center border-blue-500 h-full' : 'border-2 flex justify-center items-center border-dashed rounded-lg h-full'">
                <h1 v-if="confirmUploadFiles.length === 0" class="text-xl text-center opacity-50 font-semibold">
                    Click or drag files here to upload
                </h1>
                <div v-else class="w-full h-full grid grid-cols-3 gap-4 p-4">
                    <div v-for="(file, index) in confirmUploadFiles" :key="index"
                        class="flex z-10 items-center justify-between p-3 bg-gray-200 rounded-md">
                        <div class="flex items-center overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0 text-blue-500"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span class="truncate text-sm">{{ file.file.name }}</span>
                        </div>
                        <button @click="removeFile(index)" class="ml-2 text-red-500 hover:text-red-700">
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
    </div>
    <Teleport to="#modal">
        <div v-if="confirmUpload"
            class="w-full h-screen fixed top-0 left-0 bg-black/50 flex z-30 justify-center backdrop-blur-md items-center">
            <div class="w-1/2 h-1/2 relative bg-white rounded-lg p-6 shadow-lg">
                <h1 class="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">
                    Uploading Files
                </h1>
                <div class="flex flex-col gap-3 max-h-[60%] overflow-y-auto">
                    <div v-for="(fileObj, index) in initialFiles" :key="fileObj.file.name"
                        class="flex items-center justify-between p-3 bg-gray-100 rounded-md">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span class="text-sm font-medium">{{ fileObj.file.name }}</span>
                        </div>
                        <select v-model="fileObj.documentType" class="ml-2 p-2 border rounded"
                            @change="updateAvailableTypes">
                            <option value="" disabled>Select document type</option>
                            <option v-for="doc in getAllDocumentTypes(fileObj)" :key="doc.value" :value="doc.value">
                                {{ doc.label }}
                            </option>
                        </select>
                        <button @click="removeFile(index)" class="ml-2 text-red-500 hover:text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <button @click="confirmUploadFunc()"
                    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    Confirm Upload
                </button>
                <button @click="confirmUpload = false"
                    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors absolute bottom-6 right-6">
                    Close
                </button>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>

const dropzoneRef = ref()
const initialFiles = ref<{ file: File; documentType: string }[]>([])
const confirmUploadFiles = ref<{ file: File; documentType: string }[]>([])
const confirmUpload = ref(false)
const { isOverDropZone } = useDropZone(dropzoneRef, {
    onDrop,
    dataTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    multiple: true,
})


const requiredDocuments = [
    { label: 'JURAT', value: 'jurat' },
    { label: 'Medical Certificate', value: 'medical' },
    { label: 'Endorsement from the CCMC', value: 'endorsement' },
    { label: 'Deans Permit', value: 'deans_permit' },
    { label: 'President\'s Letter', value: 'president_letter' },
    { label: 'Travel Order', value: 'travel_order' },
    { label: 'Risk Management Plan', value: 'risk_management' },
    { label: 'Cert of Insurance', value: 'insurance' },
    { label: 'Designation of Faculty in-Charge', value: 'faculty_designation' },
]

const availableDocumentTypes = ref(requiredDocuments)

function getAllDocumentTypes(fileObj: { file: File; documentType: string }) {
    return [
        ...availableDocumentTypes.value,
        ...(fileObj.documentType ? [requiredDocuments.find(doc => doc.value === fileObj.documentType)] : [])
    ].filter(Boolean);
}

function updateAvailableTypes() {
    const uploadedTypes = new Set([...confirmUploadFiles.value, ...initialFiles.value]
        .map(f => f.documentType)
        .filter(Boolean));
    availableDocumentTypes.value = requiredDocuments.filter(doc => !uploadedTypes.has(doc.value));
}

function isDocumentUploaded(docType: string): boolean {
    return [...confirmUploadFiles.value, ...initialFiles.value]
        .some(f => f.documentType === docType);
}

function onDrop(files: File[]) {
    confirmUpload.value = true
    initialFiles.value = files.map(file => ({ file, documentType: '' }))
    availableDocumentTypes.value = requiredDocuments // Reset available types on drop
    if (files[0].type.includes('pdf') || files[0].type.includes('jpeg')) {
        console.log('Valid file type:', files[0].type);
    } else {
        console.log('Invalid file type:', files[0].type);
    }
    console.log(files);
}

function manualUpload(e: Event) {
    const input = e.target as HTMLInputElement
    const files = input.files
    if (files) {
        onDrop(files)
    }
}

function confirmUploadFunc() {
    if (confirmUploadFiles.value.length === 0) {
        confirmUploadFiles.value = initialFiles.value.filter(f => f.documentType !== '')
        confirmUpload.value = false
        updateAvailableTypes() // Update available types after confirming upload
        console.log(confirmUploadFiles.value)
    } else {
        confirmUpload.value = false
        confirmUploadFiles.value = [...confirmUploadFiles.value, ...initialFiles.value.filter(f => f.documentType !== '')]
        updateAvailableTypes() // Update available types after confirming upload
        console.log(confirmUploadFiles.value)
    }
}

function removeFile(index: number) {
    initialFiles.value.splice(index, 1);
    confirmUploadFiles.value = confirmUploadFiles.value.filter(f => f.file !== initialFiles.value[index].file);
    if (initialFiles.value.length === 0) {
        confirmUpload.value = false;
    }
    updateAvailableTypes() // Update available types after removing a file
}

</script>

<style></style>
