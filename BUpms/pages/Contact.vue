<template>
    <div class="place-items-center xl:pb-3">
        <div class="md:grid bg-white m-3 rounded-lg shadow-sm shadow-gray-500 relative">
            <!-- <GoBackButtonClient></GoBackButtonClient> -->
            <div class="card-osas grid m-4 gap-y-5 py-5 md:py-0 xl:py-3 lg:py-5">
                <div class="bu-img-container grid place-content-center md:flex md:justify-between gap-y-5">
                    <img src="assets/bu-logo-with-name.png" alt="" class="object-contain md:h-20">
                    <div class="img-wrapper grid place-content-center">
                        <img src="assets/BU-osas-logo.jpg" alt="" class="object-contain md:h-20 h-20">
                    </div>
                </div>
                <div class="osas-description text-lg tracking-wider lg:pt-8">
                    <strong class="lg:text-4xl">Office of Student Affairs and Services</strong><br>
                    <div class="md:text-lg lg:text-2xl">
                        The Office of Student Affairs and Services (OSAS) of the Bicol University is in charge of the provision of the Student Personnel Services (SPS), an integrated comprehensive system of co-curricular services and activities aimed at contributing to the fulfillment of the University’s mission statement. The OSS works alongside the academic colleges and units in the development of well-balanced and rounded students through the promotion of their general welfare. Its mission is to promote student’s access, welfare, achievement, development and postgraduate success. The OSS also offers services to students to help them cope more effectively with the many facets of university life which can affect academic work: financial aids, health services, individual and/or group counseling, career planning, procedures for redressing grievances, standards for student’s conduct, due process in the event of disciplinary action and advice/assistance in time of trouble. A variety of programs and activities are offered by OSS to provide opportunities to students to become involved in campus life outside the classroom: orientation of new students, students’ organizations, student publication and events of special interest.
                    </div>    
                </div>
            </div>
            <div class="footer-info grid lg:grid-cols-3 bg-transparent">
                <div class="left-container w-full p-5 bg-slate-200 border-b-2 border-slate-300 xl:border-b-0">
                    <div class="heading-title font-bold text-2xl pb-5 pt-1">
                        Stay in Touch
                    </div>
                    <ul class="list-none grid gap-y-2 tracking-wider font-thin">
                        <li class="flex place-items-center gap-3">
                            <IconsFacebook class="-m-1"></IconsFacebook>
                            <a href="https://www.facebook.com/bicoluniversityosas" target="_blank" class=" md:text-lg tracking-wide">
                                Bicol University Office of Student Affairs and Services
                            </a>
                        </li> 
                        <li class="flex place-items-center gap-3">
                            <IconsGmail></IconsGmail>
                            <a href="mailto:bu-osas@bicol-u.edu.ph" class=" md:text-lg tracking-wide">
                                BU-OSAS
                            </a>
                        </li>
                        <li class="flex place-items-center gap-3">
                            <IconsChrome></IconsChrome>
                            <a href="https://bicol-u.edu.ph/?option=students&taskid=328" target="_blank" class=" md:text-lg tracking-wide">
                                Bicol University
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="middle-container w-full text-2xl bg-slate-200 p-5 lg:border-l-2 lg:border-r-2 border-b-2 border-slate-300 xl:border-b-0">
                    <div class="heading-title font-bold text-2xl py-1 text-center">
                        Office Hours
                    </div> 
                    <div class="office-hours-content grid">
                        <ul class="py-3 font-thin">
                            <li>
                                <div class="date-day-wrapper flex place-content-between">
                                    <div class="day-wrapper text-lg md:text-2xl">
                                        Monday
                                    </div>
                                    <div class="day-content text-lg md:text-2xl">
                                        8:00AM - 5:00PM
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="date-day-wrapper flex place-content-between">
                                    <div class="day-wrapper text-lg md:text-2xl">
                                        Tuesday
                                    </div>
                                    <div class="day-content text-lg md:text-2xl">
                                        8:00AM - 5:00PM
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="date-day-wrapper flex place-content-between">
                                    <div class="day-wrapper text-lg md:text-2xl">
                                        Wednesday
                                    </div>
                                    <div class="day-content text-lg md:text-2xl">
                                        8:00AM - 5:00PM
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="date-day-wrapper flex place-content-between">
                                    <div class="day-wrapper text-lg md:text-2xl">
                                        Thursday
                                    </div>
                                    <div class="day-content text-lg md:text-2xl">
                                        8:00AM - 5:00PM
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="date-day-wrapper flex place-content-between ">
                                    <div class="day-wrapper text-lg md:text-2xl">
                                        Friday
                                    </div>
                                    <div class="day-content flex place-items-center text-lg md:text-2xl">
                                        8:00AM - 5:00PM
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="date-day-wrapper flex place-content-between ">
                                    <div class="day-wrapper text-lg md:text-2xl">
                                        Saturday
                                    </div>
                                    <div class="day-content flex place-items-center text-lg md:text-2xl">
                                        Closed
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="date-day-wrapper flex place-content-between ">
                                    <div class="day-wrapper text-lg md:text-2xl">
                                        Sunday
                                    </div>
                                    <div class="day-content flex place-items-center text-lg md:text-2xl">
                                        Closed
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right-container w-full grid place-items-center bg-slate-200 pb-5 xl:border-b-0">
                    <div class="map-heading  text-center place-items-center grid tracking-widest font-bold text-2xl py-1">Our Location</div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.3331161851622!2d123.72163272275942!3d13.142443827005525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a10304d88a0995%3A0x8568547fed8d8815!2sBicol%20University%20Student%20Union%20Center%20Building%20(BU-SUC)!5e0!3m2!1sen!2sph!4v1722953155399!5m2!1sen!2sph"
                    class="h-56 w-11/12 rounded-md" allowfullscreen="true" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
        layout: 'landing'
    })
</script>