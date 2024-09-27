<template>
  <nav class="navbar__desktop">
    <div class="navbar__logo"></div>
    <ul class="navbar__list">
      <li class="navbar__item"><router-link class="navbar__link" to="/">Home</router-link></li>
      <li class="navbar__item"><router-link class="navbar__link" to="/products">Products</router-link></li>
      <li class="navbar__item"><router-link class="navbar__link" to="/about">About</router-link></li>
      <li class="navbar__item"><router-link class="navbar__link" to="/faq">FAQ</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'NavbarDesktop',
    components: {},
    setup() { },
  })
</script>

<style scoped lang="scss">
  .navbar__desktop {
    background-color: #f7f3e9;
    color: #4a4a4a;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;

    .navbar__logo {
      width: 80px;
      aspect-ratio: 16 / 9;
      margin-left: 20px;
      margin-right: 60px;
      background-image: url('../assets/images/cat-images-logo-3.png');
      background-size: cover;
      background-position: center;
    }

    .navbar__list {
      display: flex;
      gap: 35px;
      padding: 0;
      margin: 0;

      .navbar__item {
        font-size: 20px;
        .navbar__link{
          text-decoration: none;
          color: #4a4a4a;
          &:hover {
            cursor: pointer;
            color: #A68A64;
            border-bottom: 2px solid #A68A64;
          }
      
          &.router-link-exact-active {
            color: #A68A64;
          }
        }
      }
    }
  }

</style>