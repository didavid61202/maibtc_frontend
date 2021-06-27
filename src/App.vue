<template>
  <div class="w-full h-full">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useWindowSize } from "@vueuse/core";

const { height } = useWindowSize();

const isChromeForIOS = /CriOS/.test(navigator.userAgent);

if (!isChromeForIOS) {
  watch(
    height,
    (newHeight) => {
      (document.querySelector("#app") as HTMLElement).style.height =
        newHeight.toString() + "px";
    },
    { immediate: true }
  );
}
</script>

<style lang="postcss">
#app {
  /* fix navbar height bug in newer version of  ios chrome */
  @apply w-full h-[calc(100vh-76px)];
}

body,
html {
  overflow: hidden;
  /* prevent ios safari double tap zooming*/
  touch-action: pan-y;
  overscroll-behavior-y: none;
}

/* fix daisyUI divier opacity */
.divider {
  @apply before:opacity-10 after:opacity-10;
}
</style>
