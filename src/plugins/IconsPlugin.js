import Vue from 'vue';
import Icon from '../components/widgets/Icon.vue'; 
// import Icon from './components/widgets/Icon.vue'; 

const icons = {
  'git': require('@/assets/icons/github.png'), // Reemplaza con la URL correcta del icono
  'star': 'URL_DEL_ICONO_STAR', // Reemplaza con la URL correcta del icono
  // Agrega más iconos aquí
};

// Registra el componente globalmente
Vue.component('Icon', Icon);

// Agrega un mixin global para inyectar los iconos en los componentes
Vue.mixin({
  data() {
    return {
      icons
    };
  }
});