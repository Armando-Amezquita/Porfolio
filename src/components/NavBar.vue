<script setup >
import { ref } from 'vue';
const showMenu = ref(false);

function showMenuToggle(){
    showMenu.value = !showMenu.value;
}

</script>

<template>
    <nav :class="[ showMenu ? 'navbar' : 'responsive' ]">
      <ul class="menu">
        <li class="arrow-li" v-if="!showMenu" @click="showMenuToggle">
            <img class="arrow" src="../assets/icons/118746_right_arrow_icon.png" alt="">
        </li>
        <template v-else>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
            <li class="arrow-li"  @click="showMenuToggle">
                <img class="arrow" src="../assets/icons/118748_arrow_left_icon.png" alt="img">
            </li>
        </template>
      </ul>

    </nav>
</template>
  
  
  <style scoped>
  /* Estilos del navbar */
  .navbar, .responsive {
    position: fixed;
    z-index: 998;
    top: 1rem;
    left: 0;
    right: 20%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(25, 25, 25, 1);
    box-shadow: 0px 1px 1px #00ff95;
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
  }
  .responsive{
    right: 90%;
  }
  .menu{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  li{
    font-size: 1.5rem;
    color: aliceblue;
  }
  
  /* Estilos específicos para el modo responsivo */
  .responsive .navbar-menu {
    display: none;
  }
  
  .responsive .navbar-toggle {
    display: block;
  }
  
  .responsive .navbar-toggle.active + .navbar-menu {
    display: block;
  }
  .arrow-li{
    cursor: pointer;
  }
  .arrow{
    width: 4rem;
    height: 3rem;
    border-radius: 2rem;
  }
  </style>