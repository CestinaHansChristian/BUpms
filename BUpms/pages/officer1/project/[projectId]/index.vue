<template>
    <div class="pb-5 text-slate-800">
        <div class="container mx-auto space-y-2 grid pt-5 max-w-screen-lg">
            <fieldset class="wrapper-one mx-3 md:mx-5 grid border-2 rounded-xl md:gap-y-4 space-y-4">
                <legend class="card-heading p-1 rounded-t-xl uppercase font-medium md:text-xl text-center">
                    Project Information
                </legend>
                <div class="project-content md:mx-3 space-y-3 md:space-y-4">
                    <div class="md:grid md:grid-cols-2">
                        <div class="project-name-wrapper mx-2">
                            <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                                Title of Actvity:
                            </div>
                            <div
                                class="project-name-wrapper text-sm p-3 border-2 rounded-xl font-medium md:text-base bg-white shadow-inner tracking-widest">
                                {{ fetchSingleProject.Title }}
                            </div>
                        </div>
                        <div class="when-wrapper mx-2">
                            <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                                When
                            </div>
                            <div
                                class="project-name-wrapper text-sm p-3 border-2 rounded-xl font-medium md:text-base bg-white shadow-inner tracking-widest">
                                {{ fetchSingleProject.When }}
                            </div>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2">
                        <div class="who-wrapper mx-2">
                            <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                                Who
                            </div>
                            <div
                                class="project-name-wrapper text-sm p-3 border-2 rounded-xl font-medium md:text-base bg-white shadow-inner tracking-widest">
                                {{ fetchSingleProject.Who }}
                            </div>
                        </div>
                        <div class="contact-num-wrapper mx-2">
                            <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                                Contact number:
                            </div>
                            <div
                                class="project-name-wrapper text-sm p-3 border-2 rounded-xl font-medium md:text-base bg-white shadow-inner tracking-widest">
                                {{ fetchSingleProject.Contact_num }}
                            </div>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2">
                        <div class="contact-num-wrapper mx-2">
                            <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                                Created by:
                            </div>
                            <div
                                class="project-name-wrapper text-sm p-3 border-2 rounded-xl font-medium md:text-base bg-white shadow-inner tracking-widest">
                                {{ fetchedUserData.username }}
                            </div>
                        </div>
                        <div class="document-details-wrapper mx-2">
                            <div
                                class="doctype-label ps-2 text-base text-slate-500 font-semibold capitalize md:text-xl">
                                document type:
                            </div>
                            <div
                                class="doctype-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                                <div class="doctype-wrapper">
                                    {{ fetchSingleProject.expand ? 'pdf/jpg' : 'Missing' }}
                                    <!-- <div v-for="(doctype, index) in fetchSingleProject.expand.Documents_tbl_via_Project_rel" :key="index" class="">
                                        {{ doctype.Document.split('.').pop() ? 'pdf/jpg': false  }}
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2">
                        <div class="contact-num-wrapper mx-2">
                            <div
                                class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl md:py-1">
                                Description:
                            </div>
                            <div
                                class="project-name-wrapper text-sm p-2 border-2 rounded-xl overflow-y-auto h-24 font-medium md:text-base bg-white shadow-inner tracking-tight">
                                {{ fetchSingleProject.Description }}
                            </div>
                        </div>
                        <div class="event-details-wrapper mx-2">
                            <div
                                class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl flex justify-between md:pb-2">
                                <label for="">
                                    Submitted Documents:
                                </label>
                            </div>
                            <div
                                class="Doc-label-of-submitted p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                                <div v-if="fetchSingleProject.expand" class="if-user-submit-document">
                                    <div v-for="(eventType, index) in fetchSingleProject.expand.Documents_tbl_via_Project_rel"
                                        :key="index" class="for-doctype-wrapper flex justify-between md:space-y-1">
                                        <div class="event-type-content flex gap-x-5 align-middle">
                                            <div class="list-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="4" stroke="green" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m4.5 12.75 6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <div class="list-type">
                                                {{ eventType.Doc_type }}
                                            </div>
                                        </div>
                                        <div class="remove-specific-file-wrapper">
                                            <button @click="deleteAttachedFile(fetchSingleProject, index)"
                                                class="reject-design-btn text-sm bg-rose-400 px-3 cursor-pointer hover:bg
                                            -red-700  uppercase rounded-md font-semibold md:text-lg text-slate-50 tracking-wider">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="else-user-didnot-submit">
                                    No Attachment
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2">
                        <div class="contact-num-wrapper mx-2">
                            <div
                                class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl md:py-1">
                                Event Classification:
                            </div>
                            <div
                                class="project-name-wrapper text-sm p-3 border-2 rounded-xl overflow-y-auto font-medium md:text-base bg-white shadow-inner tracking-tight">
                                {{ fetchSingleProject.Event_Classification }}
                            </div>
                        </div>
                        <div v-if="fetchSingleProject.Others" class="contact-num-wrapper mx-2">
                            <div
                                class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl md:py-1">
                                Others remarks:
                            </div>
                            <div
                                class="project-name-wrapper text-sm p-3 border-2 rounded-xl overflow-y-auto font-medium md:text-base bg-white shadow-inner tracking-tight">
                                {{ fetchSingleProject.Others }}
                            </div>
                        </div>
                    </div>
                    <div class="btn-controller-wrapper pb-5">
                        <div class="approve-btn-wrapper flex justify-between mx-2 md:mx-5 gap-x-3">
                            <nuxt-link to="/officer1/projects">
                                <div
                                    class="reject-design-btn bg-orange-400 cursor-pointer hover:bg-orange-600  uppercase p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 text-slate-50 tracking-wider">
                                    Go Back
                                </div>
                            </nuxt-link>
                            <div class="control-btn flex lg:gap-x-5 gap-x-2">
                                <nuxt-link @click="approveProposal(fetchSingleProject.id, fetchSingleProject.Status)"
                                    v-if="isApproved.stages === 'stage2'" :to="fetchSingleProject.id + '/approved'">
                                    <div
                                        class="approve-design-btn uppercase cursor-pointer bg-blue-400 hover:bg-sky-700 text-slate-50 p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 hover:text-white tracking-wider">
                                        Approve
                                    </div>
                                </nuxt-link>
                                <nuxt-link v-else-if="isApproved.stages === 'stage3'"
                                    :to="fetchSingleProject.id + '/approved'">
                                    <div
                                        class="approve-design-btn uppercase cursor-pointer bg-blue-400 hover:bg-sky-700 text-slate-50 p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 hover:text-white tracking-wider">
                                        View
                                    </div>
                                </nuxt-link>
                                <nuxt-link @click.stop v-else-if="isApproved.stages === 'stage1'" disabled
                                    :to="fetchSingleProject.id + '/approved'">
                                    <button disabled
                                        class="approve-design-btn uppercase cursor-pointer bg-blue-200 hover:bg-sky-700 text-slate-50 p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 hover:text-white tracking-wider">
                                        Approve
                                    </button>
                                </nuxt-link>
                                <button v-if="isApproved.stages === 'stage3'" disabled
                                    class="disabled:pointer-events-none">
                                    <div
                                        class="reject-design-btn bg-red-300 cursor-pointer hover:bg-red-700  uppercase p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 text-slate-50 tracking-wider">
                                        Reject
                                    </div>
                                </button>
                                <button v-else @click="rejectOfficerProject(fetchSingleProject)">
                                    <div
                                        class="reject-design-btn bg-red-400 cursor-pointer hover:bg-red-700  uppercase p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 text-slate-50 tracking-wider">
                                        Reject
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="wrapper-two grid gap-4 md:grid-cols-2 md:mx-5 mx-3">
                <fieldset class="card border-2 rounded-lg md:w-">
                    <legend
                        class="indent-3 lg:text-center text-base font-semibold tracking-widest uppercase md:text-xl">
                        Attached Documents
                    </legend>
                    <div class="card-body mx-2 grid py-5 ">
                        <div class="overflow-wrapper h-72 md:h-full tracking-wider">
                            <!-- component -->
                            <div v-if="fetchSingleProject.expand" class="overflow-y-auto md:h-96">
                                <div v-for="(document, index) in fetchSingleProject.expand.Documents_tbl_via_Project_rel"
                                    :key="index" class="file-component document-info-wrapper grid rounded-md p-2">
                                    <div class="document-card-wrapper grid grid-cols-3 md:p-2z bg-slate-200 rounded-xl">
                                        <div class="grid-wrapper-1 flex items-center col-span-2">
                                            <div
                                                class="document-file-name-wrapper font-semibold mx-2 w-36 break-words md:w-40 lg:w-60">
                                                {{ document.Document }}
                                            </div>
                                        </div>
                                        <div class="grid-wrapper-2 grid place-content-center cursor-pointer bg-sky-300 py-2 rounded-xl group hover:bg-sky-400"
                                            @click="downloadFile(document.id)">
                                            <svg class="h-10 w-10  md:h-10 md:w-10 dark:text-white dowload_option group-hover:fill-white"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                                                    clip-rule="evenodd" />
                                                <path fill-rule="evenodd"
                                                    d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="">
                                <div class="no-attached-document-warning">
                                    <div class="wrapper border-dashed border-2 border-slate-500 m-2 p-3 rounded-lg">
                                        There are no attached document/s.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <MessageBox></MessageBox>
            </div>
        </div>
    </div>
</template>
<script setup>
// Admin composable documents
definePageMeta({
    layout: 'landing',
    middleware: ['guard', 'officer1']
})

const route = useRoute();
const { $pb } = useNuxtApp();

// fetch project and related documents
const fetchSingleProject = await $pb.collection('Projects_tbl').getOne(route.params.projectId, {
    expand: 'Documents_tbl_via_Project_rel'
})

// fetch project status for button option
const isApproved = await $pb.collection('Status_tbl').getOne(fetchSingleProject.Status)

// fetch user details
const fetchedUserData = await $pb.collection('Users_tbl').getOne(fetchSingleProject.User)

// reject button function
async function rejectOfficerProject(projectId) {
    const projectIdformatted = projectId.id
    try {
        const data = {
            'isArchived': true
        }
        await $pb.collection('Projects_tbl').update(projectIdformatted, data)
        navigateTo('/officer1/projects')
        // console.log()
    } catch (error) {
        // console.log(error)
    }
}

async function deleteAttachedFile(fetchedSingleData, index) {
    try {
        const projectIdformatted = fetchedSingleData.id
        const statusIdFormatted = fetchedSingleData.Status
        if (fetchedSingleData.expand.Documents_tbl_via_Project_rel) {
            // for (let i = 0; i < fetchedSingleData.expand.Documents_tbl_via_Project_rel.length; i++) {
            let formattedDocId = fetchedSingleData.expand.Documents_tbl_via_Project_rel[index].id

            // }
            await $pb.collection('Documents_tbl').delete(formattedDocId)
            const data = {
                'Project_id': projectIdformatted,
                'stages': 'returned'
            }
            await $pb.collection('Status_tbl').update(statusIdFormatted, data)
            navigateTo('/officer1/projects')
        } else {
            // console.log('Does not exist')
        }
    } catch (error) {
        console.log(error)
    }
    console.log(fetchedSingleData)
    console.log(index)
}

async function approveProposal(projectId, recordId) {
    const data = {
        Project_id: projectId,
        stages: 'stage3'
    }
    await $pb.collection('Status_tbl').update(recordId, data)
}

async function downloadFile(docId) {

    const fileToken = await $pb.files.getToken()
    const fileRecord = await $pb.collection('Documents_tbl').getOne(docId)
    const fileURI = $pb.files.getUrl(fileRecord, fileRecord.Document, {
        'token': fileToken
    })
    const linkURI = document.createElement('a')
    linkURI.href = fileURI
    linkURI.setAttribute('target', '_blank')
    document.body.appendChild(linkURI)
    linkURI.click()
    document.body.removeChild(linkURI)
}
</script>
<style scoped>
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: #0369a1;
    border-radius: 20px;
}

::-webkit-scrollbar-track {
    background-color: #7dd3fc;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #0369a1;
}

.dowload_option {
    color: rgb(46, 105, 194)
}
</style>