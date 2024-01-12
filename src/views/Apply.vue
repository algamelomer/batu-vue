<template>
    <div class=" h-96 mb-40 relative">
      <img style="width: 100%; max-height: 100%; object-fit: cover;" src="@/assets/apply.jpeg" alt="">
      <p class="absolute text-white text-center font-inter text-6xl font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">How to apply</p>
    </div>
    <div class=" mb-32">
      <div v-for="item in apply" :key="item.id" class="flex flex-col gap-16 lg:gap-0 mb-8 lg:mb-0" ref="target">
        <div class="flex flex-col gap-12 lg:gap-0 lg:flex-row-reverse m-auto relative lg:h-32 w-full">
          <div ref="number" class="number w-20 h-20 bg-white text-6xl text-Brand_Primary border-Brand_Primary border-4 rounded-full flex justify-center items-center font-semibold m-auto">{{ item.id }}</div>
        
        <div :class="{ 'lg:right-12': isEven(item.id), 'lg:left-12': !isEven(item.id) }" ref="content" class="content hidden lg:absolute  m-auto lg:m-0 relative none items-center justify-center px-7 bg-Brand_Primary w-80 h-full">
          <p class=" text-sm font-normal">{{ item.content }}</p>
          <div :class="{ 'lg:transform rotate-180 lg:-left-11': isEven(item.id), ' lg:-right-11': !isEven(item.id) }" class="absolute triangle hidden lg:flex"></div>
        </div>
  
      </div>
      <div :class="{ 'hidden': apply.length==item.id }" class="flex flex-col w-full ">
          <div class=" m-auto h-52 w-2 bg-primary_btn -mb-12"></div>
        <div class=" border-primary_btn m-auto border-t-0 border-l-0 border-r-8 border-b-8 w-12 h-12 inline-block p-1 rotate-45 "></div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        apply: [
          { id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat o.' },
          { id: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat o.' },
          { id: 3, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat o.' },
          { id: 4, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat o.' },
          { id: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat o.' },
          { id: 6, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat o.' },
          { id: 7, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat o.' },      
        ],
        observer: null,
      };
    },
    mounted() {
      this.observer = new IntersectionObserver(this.callback, { threshold: 0.75 });
  
      this.$refs.target.forEach((target) => {
        this.observer.observe(target);
      });
    },
    methods: {
      callback(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("start");
          } else {
            entry.target.classList.remove("start");
          }
        });
      },
      isEven(number) {
        return number % 2 === 0;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .start .content{
    display: flex;
  }
  
  .start .number{
    background-color: #4FB3B3;
    color: white;
  }
  
  .triangle{
      clip-path: polygon(30% 0, 100% 50%, 30% 100%, 0 50%);
      color: black;
      background-color: black;
      width: 5rem;
      z-index: -2;
      height: 3.4rem;
      --tw-bg-opacity: 1;
      background-color: rgb(79 179 179 / var(--tw-bg-opacity));
  }
  

  </style>
  