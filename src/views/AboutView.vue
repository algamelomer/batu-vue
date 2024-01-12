<template>
  <div class="h-96 mb-10 md:mb-40 relative ">
    <img class="w-full h-full object-cover" src="@/assets/about-us-main.jpeg" alt="">
    <p
      class="absolute text-white text-center font-inter text-4xl md:text-5xl lg:text-6xl font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      About us</p>
  </div>
  <!-- first section  -->
  <div class=" flex flex-col-reverse items-center justify-center md:flex-row md:justify-between md:px-24 mb-10 md:mb-40">
    <div class="flex flex-col items-center justify-center text-center md:block md:text-start md:justify-normal md:w-1/2">
      <h2 class=" mb-3 text-neutral_gray font-inter font-semibold text-2xl">Crafting the Future</h2>
      <p class=" text-neutral_gray text-sm font-inter mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
        porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam qui s massa pulvinar,
        aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
      <button
        class="rounded border-2 border-transparent bg-Brand_Primary py-3 px-6 text-white text-xs font-medium font-inter gap-1 flex">
        Learn more</button>
    </div>
    <div class=" md:w-1/2 flex justify-center items-center">
      <img class="w-full h-full object-cover md:h-auto md:w-auto mb-8 md:mb-0" src="@/assets/about-us-second.png" alt="">
    </div>
  </div>
  <!-- second section -->
  <div>
    <div class="flex gap-9 flex-col md:flex-row items-center justify-between py-5 px-12 md:py-11 md:px-24 mb-20"
      v-for="item in Achievements" :key="item.id">
      <div class="grid w-full grid-cols-2 md:grid-cols-4 justify-center gap-20">
        <div v-for="(value, label) in getCardContent(item)" :key="label" class="counter">
          <div class="flex flex-col text-center items-center gap-3 m-auto">
            <span class="w-24 h-24 text-primary_btn">
              <font-awesome-icon :icon="['fas', 'fa-users']" style="width: 100%;height: 100%;" />
            </span>
            <p class="flex flex-col text-neutral_d_gray font-Inter text-4xl font-bold leading-snug w-1/2">
              <count-up :end-val="value"></count-up>
              <span class="text-neutral_gray font-inter text-2xl font-normal min-w-max h-fit">{{ label }}</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- third section -->
  <div class=" flex flex-col items-center justify-center md:flex-row gap-6 md:justify-between md:px-6 mb-6 md:mb-40">
    <div class=" md:w-1/2 flex justify-center items-center">
      <img class="w-full h-full object-cover md:h-auto md:w-auto mb-8 md:mb-0" src="@/assets/presedint.jpeg" alt="">
    </div>
    <div
      class="flex flex-col md:h-full items-center justify-center text-center md:block md:text-start md:justify-normal md:w-1/2 md:pr-24">
      <h2 class=" mb-3 text-neutral_gray font-inter font-semibold text-2xl">President of Egypt Visits to Foster Creative
        Innovation</h2>
      <p class=" text-neutral_gray text-sm font-inter mb-6">The President of Egypt recently graced our Technological
        University with his presence, igniting a wave of excitement and inspiration. During his visit, he explored the
        vibrant hub of creativity and innovation on our campus, engaging with students, faculty, and researchers. The
        visit showcased our university's commitment to pushing the boundaries of technology and innovation, highlighting
        the collaborative efforts in building a brighter future for Egypt. With a focus on nurturing creative projects.
      </p>
      <button
        class="rounded border-2 border-transparent bg-Brand_Primary py-3 px-6 text-white text-xs font-medium font-inter gap-1 flex">
        Learn more</button>
    </div>
  </div>

  <!-- fourth section -->
  <div
    class=" flex flex-col-reverse items-center justify-center md:flex-row md:justify-between md:px-24 md:gap-8 mb-10 md:mb-40">
    <div class="flex flex-col items-center justify-center text-center md:block md:text-start md:justify-normal md:w-1/2">
      <h2 class=" mb-3 text-neutral_gray font-inter font-semibold text-2xl">Unleashing Campus Life: Our University's
        Vibrant Activities</h2>
      <p class=" text-neutral_gray text-sm font-inter mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
        porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam qui s massa pulvinar,
        aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
      <button
        class="rounded border-2 border-transparent bg-Brand_Primary py-3 px-6 text-white text-xs font-medium font-inter gap-1 flex">
        Learn more</button>
    </div>
    <div class=" md:w-1/2 md:h-38rem md:px-9 flex flex-col md:flex-col justify-normal items-center">
      <div class="w-1/2 md:w-full md:h-1/2 flex justify-center items-center">
        <img class="w-full h-full object-cover md:mb-0" src="@/assets/chess.jpeg" alt="">
      </div>
      <div class="w-1/2 md:w-full md:h-1/2 flex justify-center items-center">
        <img class="w-full h-full object-cover mb-8 md:mb-0" src="@/assets/football.jpeg" alt="">
      </div>
    </div>
  </div>

  <!-- fifth section -->
  <div class=" flex flex-col items-center justify-center md:flex-row gap-6 md:justify-between md:px-6 mb-6 md:mb-40">
    <div class=" md:w-1/2 flex justify-center items-center">
      <img class="w-full h-full object-cover md:h-auto md:w-auto mb-8 md:mb-0"
        src="@/assets/377f8b5b544603dbe4c328378ef06c5b.png" alt="">
    </div>
    <div
      class="flex flex-col md:h-full items-center justify-center text-center md:block md:text-start md:justify-normal md:w-1/2 md:pr-24">
      <h2 class=" mb-3 text-neutral_gray font-inter font-semibold text-2xl">The Spacious University Campus</h2>
      <p class=" text-neutral_gray text-sm font-inter mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
        porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam qui s massa pulvinar,
        aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
      </p>
      <button
        class="rounded border-2 border-transparent bg-Brand_Primary py-3 px-6 text-white text-xs font-medium font-inter gap-1 flex">
        Learn more</button>
    </div>
  </div>
</template>

<script>
import { api } from '../api-config';

export default {
  props: ['api'],
  name: 'Achievements',
  data() {
    return {
      api: api,
      app: "",
      Achievements: null,
    }
  },
  mounted() {
    fetch(this.api + 'Achievements')
      .then(res => res.json())
      .then(data => this.Achievements = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    getCardContent(item) {
      const labels = ['students', 'programs', 'clubs', 'faculties'];

      return labels.reduce((content, label) => {
        content[label] = item[label];
        return content;
      }, {});
    },
  },
};
</script>