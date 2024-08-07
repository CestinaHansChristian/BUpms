<template>
    <div>
        <div class="footer-container">
            <div class="text-center tracking-wider font-semibold text-sky-900 space-x-1 ">
                <span>Bicol University ICTO</span>
                <span class="year-container text-black">{{ date }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    const yearToday = new Date()
    export default {
        data() {
            return {
                date: ''
            }
        },
        mounted() {
            this.date = yearToday.getFullYear()
        }
    }
</script>