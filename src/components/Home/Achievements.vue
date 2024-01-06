<template>
    <div class="flex gap-9 flex-col md:flex-row items-center justify-between py-5 px-12 md:py-11 md:px-24 bg-neutral_silver mb-20" v-for="items in Achievements" :key="items">
        <div class="flex w-full md:w-1/2 grid-cols-2 justify-center gap-20">
            <div class="left">
                <div class="flex items-center gap-3 m-auto"><span class="w-8 h-8"><font-awesome-icon :icon="['fas', 'fa-users']"
                            style="width: 100%;height: 100%;" /></span>
                    <p class="flex flex-col text-neutral_d_gray font-Inter text-xl font-bold leading-snug">{{ items.students }} <span class="text-neutral_gray font-inter text-xs font-normal min-w-max h-fit">students</span> </p>
                </div>
                <div class="flex items-center gap-3 m-auto"><span class="w-8 h-8"><font-awesome-icon :icon="['fas', 'fa-users']"
                            style="width: 100%;height: 100%;" /></span>
                    <p class="flex flex-col text-neutral_d_gray font-Inter text-xl font-bold leading-snug">{{ items.programs }} <span class="text-neutral_gray font-inter text-xs font-normal min-w-max h-fit">Programs</span> </p>
                </div>
            </div>
            <div class="right">
                <div class="flex items-center gap-3 m-auto"><span class="w-8 h-8"><font-awesome-icon :icon="['fas', 'fa-users']"
                            style="width: 100%;height: 100%;" /></span>
                    <p class="flex flex-col text-neutral_d_gray font-Inter text-xl font-bold leading-snug">{{ items.clubs }} <span class="text-neutral_gray font-inter text-xs font-normal min-w-max h-fit">Student Clubs</span> </p>
                </div>
                <div class="flex items-center gap-3 m-auto"><span class="w-8 h-8"><font-awesome-icon :icon="['fas', 'fa-users']"
                            style="width: 100%;height: 100%;" /></span>
                    <p class="flex flex-col text-neutral_d_gray font-Inter text-xl font-bold leading-snug">{{ items.faculties }} <span class="text-neutral_gray font-inter text-xs font-normal min-w-max h-fit">Faculties</span> </p>
                </div>
            </div>
        </div>
        <div class="md:w-1/2 flex flex-col text-center">
            <h1 class="text-neutral_d_gray font-inter text-2xl font-semibold">Fostering Visionaries </h1><h1><span class="text-Brand_Primary font-inter text-2xl font-semibold max-w-fit max-h-fit">Igniting Curiosity</span></h1>
            <p class="font-inter text-gray-900 text-xs font-normal">{{ items.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['api'],
    name: 'Achievements',
    data() {
        return {
            Achievements: null,
        }
    },
    mounted() {
        fetch(this.api + 'Achievements')
            .then(res => res.json())
            .then(data => this.Achievements = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>


</style>