<template>
    <svg v-if="icons[name]" :src="icons[name]" class="icon">
      <!-- Agrega atributos adicionales para el SVG si es necesario -->
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    inject: ['icons']
  };
  </script>
  
  <style>
  .icon {
    /* Agrega estilos para el icono SVG si es necesario */
  }
  </style>