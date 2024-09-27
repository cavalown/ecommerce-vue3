<template>
  <div id="app" class="app">
    <div class="navbar__container">
      <NavbarDesktop v-if="isDesktop"></NavbarDesktop>
      <NavbarTabMobile v-else></NavbarTabMobile>
    </div>
    <div class="content__container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavbarDesktop from './components/NavbarDesktop.vue';
  import NavbarTabMobile from './components/NavbarTabMobile.vue';
  import { windowSize } from './composable/windowSize';
  export default defineComponent({
    name: 'App',
    components: {
      NavbarDesktop,
      NavbarTabMobile,
    },
    setup() {
      const { isDesktop } = windowSize();
      return { isDesktop };
    },
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/mixins';

  .app {
    position: relative;

    .navbar__container {
      position: fixed;
      top: 0;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #D1D5DB;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .content__container {
      position: relative;
      margin-top: 50px;
      height: calc(100vh - 50px);
      padding: 10px;
    }
  }
</style>
