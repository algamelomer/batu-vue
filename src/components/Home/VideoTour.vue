<template>
  <div class="w-full h-96 relative mb-24" @click="handleClick" @dblclick="handleDoubleClick">
    <div class="w-full h-full absolute z-10 bg-video_cover flex" ref="playing">
      <div class="flex items-center gap-4 m-auto">
        <button
          class="bg-transparent border-8 p-4 hover:bg-video_cover_hover text-white font-bold w-24 h-24 flex items-center justify-center rounded-full">
          <svg class="w-full h-full m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 3l14 9-14 9V3z"></path>
          </svg>
        </button>
        <p class="text-white font-inter text-4xl font-semibold">Tour Video</p>
      </div>
    </div>
    <video ref="videoPlayer" @play="onPlay" @pause="onPause" @ended="onEnded" @webkitfullscreenchange="onFullScreenChange"
           @mozfullscreenchange="onFullScreenChange" @fullscreenchange="onFullScreenChange"
           @dblclick="handleDoubleClick" @error="onError"
           src="@/assets/batu.mp4" class="w-full h-full object-cover" preload="auto"></video>
    <div class="absolute bottom-0 left-0 w-full bg-video_slide p-2 flex justify-between items-center">
      <button @click="toggleFullScreen" class="text-white bg-transparent border-0 cursor-pointer"><font-awesome-icon icon="expand"></font-awesome-icon></button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: "video_tour",
  setup() {
    const playing = ref(null);
    const videoPlayer = ref(null);
    const isFullScreen = ref(false);
    let singleClickTimer;

    const handleClick = () => {
      singleClickTimer = setTimeout(() => {
        playPauseToggle();
      }, 200);
    }

    const handleDoubleClick = () => {
      clearTimeout(singleClickTimer);
      toggleFullScreen();
    }

    const playPauseToggle = () => {
      if (videoPlayer.value.paused) {
        videoPlayer.value.play();
        playing.value.style.display = "none";
      } else {
        videoPlayer.value.pause();
        playing.value.style.display = "flex";
      }
    }

    const onPlay = () => {
      console.log('Video is playing');
    }

    const onPause = () => {
      console.log('Video is paused');
    }

    const onEnded = () => {
      console.log('Video has ended');
    }

    const onError = (event) => {
      console.error('Video error:', event.target.error);
    }

    const onFullScreenChange = () => {
      console.log('Full screen mode:', isFullScreen.value ? 'enabled' : 'disabled');
      if(isFullScreen.value){
        playPauseToggle()
        videoPlayer.value.play();
        console.log("test1")
      }else if(!isFullScreen.value){
        console.log("test2")
        videoPlayer.value.pause();
        playing.value.style.display = "flex";
      }
      isFullScreen.value = !isFullScreen.value;
    }

    const toggleFullScreen = () => {
      if (isFullScreen.value) {
        document.exitFullscreen();
      } else {
        videoPlayer.value.play();
        videoPlayer.value.requestFullscreen();
      }
      isFullScreen.value = !isFullScreen.value;
    }

    return { playing, videoPlayer, handleClick, handleDoubleClick, onPlay, onPause, onEnded, onError, toggleFullScreen, isFullScreen,onFullScreenChange };
  }
}
</script>

<style>
  
</style>
