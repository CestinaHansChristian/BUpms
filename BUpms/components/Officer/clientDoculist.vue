<template>
    <fieldset class="card border-2 rounded-lg shadow-inner shadow-slate-300">
        <legend class="text-center text-base font-semibold tracking-widest uppercase">
            Client Documents
        </legend>
        <div class="card-body mx-2 grid place-content-center pt-2">
            <div class="overflow-wrapper h-36 md:h-72 bg-slate-200 overflow-y-scroll tracking-wider rounded-lg">
                <!-- component -->
                <OfficerDownloadDocument></OfficerDownloadDocument>
                <OfficerDownloadDocument></OfficerDownloadDocument>
                <OfficerDownloadDocument></OfficerDownloadDocument>
                <OfficerDownloadDocument></OfficerDownloadDocument>
                <OfficerDownloadDocument></OfficerDownloadDocument>
                <OfficerDownloadDocument></OfficerDownloadDocument>
            </div>
        </div>
    </fieldset>
</template>