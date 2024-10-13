<template>
    <div class="mx-2">
        <OfficerNavbar></OfficerNavbar>
        <div class="space-y-5">
            <div class="archive-summary-wrapper  grid md:grid-cols-2 md:place-content-center border-2 rounded-lg">
                <div class="canvas-wrapper w-full h-72 grid place-content-center border-2 bg-slate-200">
                    <canvas id="mychart" class=" h-full md:h-52"></canvas>
                </div>
                <div class="flex w-full md:h-72">
                    <div class="generated-report-wrapper py-5 h-full w-full grid place-content-center md:place-content-stretch md:px-5 border-2">
                        <div class="card grid font-semibold gap-y-5 text-blue-500 tracking-wide">
                            <div class="pending-project-wrapper md:text-xl text-orange-500 flex md:pt-6 place-content-center gap-5 bg-slate-200 w-full p-2 rounded-lg">
                                <div class="card-heading uppercase">
                                    On-review:
                                </div>
                                <div class="card-value">
                                    23
                                </div>
                            </div>
                            <div class="completed-project-wrapper md:text-xl flex md:pt-6 place-content-center gap-5 bg-slate-200 w-full p-2 rounded-lg">
                                <div class="card-heading uppercase">
                                    Accpeted:
                                </div>
                                <div class="card-value ">
                                    10
                                </div>
                            </div>
                            <div class="total-projects-wrapper md:text-xl flex md:pt-6 place-content-center gap-5 bg-slate-200 w-full p-2 rounded-lg">
                                <div class="card-heading uppercase">
                                    total:
                                </div>
                                <div class="card-value">
                                    33
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            <fieldset class="border-2 border-slate-300 rounded-lg shadow-inner shadow-slate-300">
                <legend class="text-center font-semibold tracking-widest md:text-lg text-sm uppercase">Recent Transaction</legend>
                <div class="archive-scrollbar m-1 h-screen overflow-y-scroll">
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                    <OfficerArchiveList></OfficerArchiveList>
                </div>
            </fieldset>
        </div>
    </div>
</template>
<script setup>
    import Chart from 'chart.js/auto'
    definePageMeta({
        layout: 'landing'
    })

    // canvas main component
    let canvasData;
    
    // canvas configuration
    let canvasSettings = {
        type: "pie",
        data: {
            labels:['Accepted', 'On-review'],
            datasets: [{
                backgroundColor: ['#0ea5e9','#f97316'],
                // accepted first
                // on-review second
                data: [90,13]
            }]
        },
    }

    // before update load canvas
    onBeforeUpdate(() => {
        if(canvasData) {
            canvasData.destroy()
            canvasData = new Chart('mychart',canvasSettings)
            console.log('onbeforeupdate1')
        } else {
            canvasData = new Chart('mychart',canvasSettings)
            console.log('onbeforeupdate2')
        }
    })

    // before mount load canvas
    onBeforeMount(() => {
        if(canvasData) {
            canvasData.destroy()
            canvasData = new Chart('mychart',canvasSettings)
            console.log('beforemount')
        } else {
            canvasData = new Chart('mychart',canvasSettings)
            console.log('beforemount2')
        }
    })

    onBeforeUnmount(() => {
        if(canvasData) {
            canvasData.destroy()
            
            console.log('beforemount')
        } else {
            canvasData = new Chart('mychart',canvasSettings)
        }
    })
</script>

<style scoped>
    .total-projects-wrapper {
        color: rgb(14, 172, 172);
    }
</style>