<template>
    <div class="pb-5 text-slate-800">
        <div class="container mx-auto space-y-2 grid pt-5  place-content-center">
            <fieldset class="wrapper-one mx-3 md:mx-5 grid border-2 rounded-xl md:gap-y-4 space-y-4">
                <legend class="card-heading p-1 rounded-t-xl ps-3 uppercase font-medium md:text-xl text-center">
                    Project Information
                </legend>
                <div class="project-content md:mx-3 space-y-3 md:space-y-4">
                    <div class="project-name-wrapper mx-2 md:space-y-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            Title of Actvity:
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            {{ fetchSingleProject.Title }}
                        </div>
                    </div>
                    <div class="when-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            When
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            {{ fetchSingleProject.When }}
                        </div>
                    </div> 
                    <div class="who-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            Who
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            {{ fetchSingleProject.Who }}
                        </div>
                    </div>
                    <div class="contact-num-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            Contact number:
                        </div>
                        <div class="project-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            {{  fetchSingleProject.Contact_num }}
                        </div>
                    </div>
                    <div class="event-details-wrapper mx-2">
                        <div class="project-label ps-2 text-base text-slate-500 font-semibold uppercase md:text-xl">
                            Submitted Documents:
                        </div>
                        <div class="Doc-label-of-submitted p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            <div v-if="fetchSingleProject.expand" class="if-user-submit-document">
                                <div v-for="(eventType, index) in fetchSingleProject.expand.Documents_tbl_via_Project_rel" :key="index" class="for-doctype-wrapper">
                                    <div class="event-type-content flex gap-x-5 align-middle">
                                        <div class="list-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="green" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                              </svg>                                          
                                        </div>
                                        <div class="list-type">
                                            {{ eventType.Doc_type }} 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="else-user-didnot-submit">
                                No Attachment
                            </div>
                        </div>
                    </div>
                    <div class="document-details-wrapper mx-2">
                        <div class="doctype-label ps-2 text-base text-slate-500 font-semibold capitalize md:text-xl">
                            document type:
                        </div>
                        <div class="doctype-name-wrapper p-3 border-2 rounded-xl font-medium md:text-lg bg-white shadow-inner tracking-widest">
                            <div class="doctype-wrapper">
                                {{ fetchSingleProject.expand ? 'pdf/jpg' : 'Missing' }}
                                <!-- <div v-for="(doctype, index) in fetchSingleProject.expand.Documents_tbl_via_Project_rel" :key="index" class="">
                                    {{ doctype.Document.split('.').pop() ? 'pdf/jpg': false  }}
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="btn-controller-wrapper pb-5">
                        <div class="approve-btn-wrapper flex justify-between mx-2 md:mx-5 gap-x-3">
                            <nuxt-link to="/officer1/projects">
                                <div class="reject-design-btn bg-orange-400 cursor-pointer hover:bg-orange-600  uppercase p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 text-slate-50 tracking-wider">
                                    Go Back
                                </div>
                            </nuxt-link>
                           <div class="control-btn flex lg:gap-x-5 gap-x-2">
                                <nuxt-link to="/officer1/project_name">
                                    <div @click="approveProposal" class="approve-design-btn uppercase cursor-pointer bg-blue-400 hover:bg-sky-700 text-slate-50 p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 hover:text-white tracking-wider">
                                        Approve
                                    </div>
                                </nuxt-link>
                                <nuxt-link to="/officer1/projects">
                                    <div class="reject-design-btn bg-red-400 cursor-pointer hover:bg-red-700  uppercase p-1 md:px-2 rounded-md font-semibold text-lg md:text-2xl md:p-4 text-slate-50 tracking-wider">
                                        Reject
                                    </div>
                                </nuxt-link>
                           </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="wrapper-two grid gap-4 md:flex md:mx-5 mx-3">
                <fieldset class="card border-2 rounded-lg shadow-inner shadow-slate-300">
                    <legend class="text-center text-base font-semibold tracking-widest uppercase md:text-xl">
                        Documents
                    </legend>
                    <div class="card-body mx-2 grid py-5">
                        <div class="overflow-wrapper h-screen md:max-h-96 bg-slate-200 overflow-y-scroll tracking-wider rounded-lg">
                            <!-- component -->
                            <div v-if="fetchSingleProject.expand" class="">
                                <div v-for="(document, index) in fetchSingleProject.expand.Documents_tbl_via_Project_rel" :key="index" class="file-component document-info-wrapper grid grid-rows-2 rounded-md p-2">
                                    <div class="docu-filename rounded-t-xl ps-2 bg-slate-100 p-3 truncate break-words font-semibold">
                                        {{ document.Document }}
                                    </div>
                                    <div @click="downloadFile(index, document.collectionId, document.id)" class="docu-download-option w-full rounded-b-xl text-slate-50 p-2 text-center bg-sky-300 hover:text-white text-base tracking-widest px-1 hover:bg-sky-500 cursor-pointer">
                                        Download
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
    })

    const route = useRoute();
    const { $pb } = useNuxtApp();

    const fetchSingleProject = await $pb.collection('Projects_tbl').getOne(route.params.projectIDOfficer, {
        expand: 'Documents_tbl_via_Project_rel'
    })

    console.log(fetchSingleProject)

    function approveProposal() {
        console.log('Approved')
    }

    function downloadFile(index,docUserid,docId) {

        const mainURI = "https://bupms.forkbun.evansolanoy.studio/api/files/"
        const fileURI = `${mainURI}${docUserid}/${docId}/${fetchSingleProject.expand.Documents_tbl_via_Project_rel[index].Document}`
        const linkURI = document.createElement('a')
        linkURI.href = fileURI
        linkURI.setAttribute('target','_blank')
        document.body.appendChild(linkURI)
        linkURI.click()
        document.body.removeChild(linkURI)
    }
</script>