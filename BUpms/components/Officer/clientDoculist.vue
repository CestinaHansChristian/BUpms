<template>
    <div class="org-data-wrapper mx-3 grid md:ms-5">
        <div class="card border-2 rounded-xl">
            <div class="card-heading bg-sky-400 text-white tracking-widest p-1 rounded-t-xl ps-3 uppercase font-medium">
                Client Documents
            </div>
            <div class="card-body mx-2">
                <div class="overflow-wrapper h-36 md:h-52 overflow-y-scroll tracking-wider space-y-2 my-2">
                    <!-- component -->
                    <OfficerDownloadDocument></OfficerDownloadDocument>
                    <OfficerDownloadDocument></OfficerDownloadDocument>
                    <OfficerDownloadDocument></OfficerDownloadDocument>
                </div>
            </div>
        </div>
    </div> 
</template>