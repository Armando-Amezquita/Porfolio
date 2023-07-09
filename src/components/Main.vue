<script setup></script>
<template>
    <div class="main__container">
        <div class="hexagon-container">
            <div class="hexagon"></div>
        </div>
    </div>
</template>
<style>
.main__container{
    width: 100%;
    height: 100vh;
    background: #110F2A;
}
.hexagon-container {
  width: 400px;
  height: 430px;
  position: relative;
  padding: 1rem;
}

.hexagon {
  width: 200px;
  height: 230px;
  position: relative;
  perspective: 1000px; /* Perspectiva para el efecto 3D */
}

.hexagon::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #f5f5f5; /* Color de borde del hexágono */
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);

}
</style>