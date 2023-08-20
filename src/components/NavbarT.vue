<script>
</script>

<template>
    <div class="nav_test">
        <router-link to="/" class="icon-hola">Hola</router-link>
        <router-link to="/home" class="icon-hola">Hola</router-link>
        <router-link to="/home" class="icon-hola">Hola</router-link>
        <router-link to="/home" class="icon-hola">Hola</router-link>
        <router-link to="/home" class="icon-hola">Hola</router-link>
    </div>
</template>

<style>
    .nav_test{
        position: fixed;
        top: 1rem;
        left: 50%; 
        transform: translate(-50%, 0);
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 32rem;
        height: 5rem;
        padding: 0 1.5rem;
        border-radius: 5rem;
        z-index: 100;
        background-color: rgba(255, 255, 255, .2); 
        backdrop-filter: blur(3px);
        
    }
    .icon-hola{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 4rem;
    }
    .router-link-active {
        color: #fff;
    }
</style>