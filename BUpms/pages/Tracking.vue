<script setup>
    definePageMeta({
        layout: 'landing'
    })
    
    const whatOrg = ref('TUPAD')
</script>
<template>
    <div class="h-screen grid">
        <div class="project-icons grid">
            <TrackingProjectStage></TrackingProjectStage>
        </div>
        <div class="project-description grid place-content-center">
            <TrackingProjectMeta :organization="whatOrg"></TrackingProjectMeta>
        </div>
    </div>
</template>