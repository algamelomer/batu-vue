<template>
    <div class="flex flex-col items-center justify-between p-8 md:p-16 md:flex-row">
        <div v-for="text in blog" :key="text" class="md:w-1/2 flex flex-col gap-3">
            <p>{{ text }}</p>
            <button class="w-fit border-transparent border-2 py-2.5 px-6 bg-primary_btn rounded text-white">learn more</button>
        </div>
        <div class="w-full md:w-1/2">
            <div class="wrapper">
                <img src="@/assets/unlock.png" alt="" class="w-full">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['api'],
    name: 'Unlock',
    data() {
        return {
            blog: null,
        }
    },
    mounted() {
        fetch(this.api + 'unlock')
            .then(res => res.json())
            .then(data => this.blog = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
</style>


