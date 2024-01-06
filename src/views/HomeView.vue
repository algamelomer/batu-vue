<template>
  <div class="home">
    <Slider />
    <Info :api="api"/>
    <Unlock :api="api"/>
    <Achievements :api="api"/>
    <VideoTour :api="api"/>
    <News :api="api"/>
    <Learnmore :api="api"/>

  </div>
</template>

<script>
import Slider from '@/components/Home/Slider.vue';
import Info from '@/components/Home/Info.vue';
import {api} from '../api-config';
import Unlock from '@/components/Home/Unlock.vue';
import Achievements from '@/components/Home/Achievements.vue';
import VideoTour from '@/components/Home/VideoTour.vue';
import News from '@/components/Home/News.vue';
import Learnmore from '@/components/Home/Learnmore.vue';


export default {
  name: 'HomeView',
  components: {
    Slider,
    Info,
    Unlock,
    Achievements,
    VideoTour,
    News,
    Learnmore
},
  data() {
    return {
      api: api,
    };
  },
};
</script>
