<script setup>
import Projects from './Projects.vue'
import Projects2 from './Projects2.vue';
import Contact from './Contact.vue';
import Projects3 from './Projects3.vue';
import Contact2 from './Contact2.vue'
import Footer from './Footer.vue'

</script>
<template>
    <div class="container__test">
      <div class="main__container">
          <!-- <section class="main_left">
              <img class="main__image" src="../assets/images/international-154119_1280.png" alt="">
          </section> -->
          <section class="main__about" ref="mainAbout">
              <h2 class="description__about--title texto-animado">¡Hey, hola! <span class="mano-saludo">🖐️</span></h2>
              <p class="description__about--description">
                Soy un individuo apasionado y en constante búsqueda de crecimiento y desarrollo personal. Mi actitud líder y mis ansias de superación me impulsan a explorar nuevas oportunidades y a mantenerme actualizado en las últimas tendencias tecnológicas y profesionales. Mi compromiso y responsabilidad son pilares en todo lo que emprendo, y siempre busco entregar resultados de alta calidad.
                <br/>
                Una de mis fortalezas radica en mi habilidad para integrarme rápidamente en equipos y establecer conexiones genuinas con personas, generando vínculos de amistad y colaboración. Aunque soy orientado hacia el logro y disfruto enfrentar retos y competiciones, también valoro la importancia del trabajo en equipo y la creación de un ambiente positivo.
                <br/>
                Mi enfoque centrado en los resultados, combinado con mi espíritu divertido y adaptable, me convierte en un activo valioso en cualquier entorno profesional. Siempre estoy dispuesto a asumir desafíos con una sonrisa y aportar mi pasión por el aprendizaje y el liderazgo a proyectos emocionantes y significativos.
              </p>
              <button class="description__about--contact">
                  Hablemos 
              </button>
          </section>
      </div>
    </div>

    <!-- <Tecnologies /> -->
    <Projects2 />
    <Projects3 />
    <Contact2 />
    <Footer />
    <!-- <Projects /> -->
    <!-- <Contact /> -->
</template>
<style>

.texto-animado {
    display: inline-block;
    position: relative;
    animation: salto 2s infinite alternate;
  }

  @keyframes salto {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px); /* Ajusta la distancia del salto */
    }
  }
  .mano-saludo {
    display: inline-block;
    transform-origin: bottom;
    margin-left: 2rem;
    animation: saludo 2s infinite alternate;
  }

  @keyframes saludo {
    0%, 100% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(30deg); 
    }
  }
.main__container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 2rem;
  background: -webkit-linear-gradient(90deg, #110F2A, #0a3476 100%);

  /* 1D89E4: Un tono de azul oscuro ligeramente más apagado.
#17689A: Un azul marino profundo.
#15577D */
    /* background: #16171C; */
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
}

.container__test{
    width: 100%;
    min-height: 100vh;
    background-color: #110F2A;
}
.main__image{
    width: 50rem;
    height: 50rem;
}
.box {
    position: absolute;
    top: 2rem;
    left: 2rem;
  width: 105%;
  height: 105%;
  background-image: url('../assets/images/pexels-rafael-guajardo-604684.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: #ccc; */
  border-radius: 1rem;
  box-shadow: 0 2px 5px #28AFFA;
}

.ribbon {
  position: absolute;
  top: 2.5rem;
  right: -2rem;
  width: 120px;
  padding: 10px;
  background-color: #ffcc00;
  color: #fff;
  transform: rotate(45deg);
  text-align: center;
  font-weight: bold;
}
/* .main__container {
  position: relative;
  height: 300px;
  background: linear-gradient(45deg, #ff0000, #0000ff);
} */

.main__container::before {
  /* content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #00ff00, #ffff00);
  transform-origin: bottom right;
  transform: skewY(-45deg); */
}

.main__left{
    position: relative;
    width: 30%;
    height: 50%;
    border-radius: 1rem;
    /* border: .5rem solid #28AFFA; */
  box-shadow: 0 1px 6px #28AFFA;
    .main__left--checkboxes{
        width: 100%;
        display: flex;
        justify-content: space-around;
        
    }
    .main__left--checkboxes input[type="checkbox"] {
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
    }
    .main__left--checkboxes input.bool-1 {
        /* Estilos para bool-1 */
    }
}
input[type="checkbox"] {
    position: relative;
    width: 20px;
    height: 20px;
    appearance: none;
    border: 2px solid #000;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
}

input[type="checkbox"]::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/pexels-alexander-ant-4585185.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    border: none;
    opacity: 0;
    transition: opacity 0.2s;
}
input[type="checkbox"]:checked::before {
    opacity: 1;
}

.main__about{
    display: flex;
    flex-direction: column;
    width: 80%;
}

.description__about--title{
    margin-bottom: 3rem;
    /* border-bottom: 1px solid #28AFFA; */
    
    font-size: 3.5rem;
    text-shadow: 0 2px 5px #00DFC2, 0 2px 5px #00DFC2, 0 2px 5px #00DFC2;
    color: #fff;
}
.description__about--description{
    font-size: 1.7rem;
    color: #fff;
}
.description__about--contact{
    height: 4rem;
    width: 12rem;
    margin: 2rem auto;
    border-radius: 2rem;
    border: none;
    /* border-bottom: 1px solid red; */
    font-size: 1.7rem;
    color: #fff;
    background: transparent;
    box-shadow: 0px 4px 6px #00DFC2;
    transition: box-shadow 1s ease;
    /* box-shadow: 0 0 10px #00DFC2; */
}
.description__about--contact:hover{
    box-shadow: 0 0 10px #00ff95, 0 0 40px #00ff95;
    
}

.hexagono{
  position: relative;
  display: block;
  background-color: #28AFFA;
  width: 20rem;
  height: 20ren;
  z-index: 999;
  /* //border: 1px solid #000;
  //border-radius: 5%; */
  transition: all .5s ease-out;
  &:hover{
    transform: scale(1.2);
    transition: all .5s ease-out;
  }
  &::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: inherit;
    height: inherit;
    transform: rotate(60deg);
    background-color: inherit;
    /* //border-radius: 5%; */
  }
  &::before{
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    width: inherit;
    height: inherit;
    transform: rotate(-60deg);
    background-color: inherit;
    /* border-radius: 5%; */
  }
}
.hexagono-content{
  position: absolute;
  z-index: 1000;
  width: 90%;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  text-align: center;
  font-weight: bold;
  line-height: 25px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  font-size: 1.3rem;
  strong{
    display: block;
  }
}

.container__test {
    width: 100%;
    min-height: 100vh;
    background-color: #110F2A;
    /* background-image: linear-gradient(90deg, #110F2A, #0a3476); */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: background-image 0.5s ease;
}

.container__test:hover {
    /* background-image: linear-gradient(90deg, #110F2A, #1567AB); */
}

.description__about--title {
    margin-bottom: 3rem;
    font-size: 3.5rem;
    text-shadow: 0 2px 5px #00DFC2, 0 2px 5px #00DFC2, 0 2px 5px #00DFC2;
    color: #fff;
    animation: fade-in 1s ease-out;
}

.description__about--contact {
    height: 4rem;
    width: 12rem;
    margin: 2rem auto;
    border-radius: 2rem;
    border: none;
    font-size: 1.7rem;
    color: #fff;
    background: transparent;
    box-shadow: 0px 4px 6px #00DFC2;
    transition: box-shadow 0.5s ease, transform 0.3s ease;
}

.description__about--contact:hover {
    box-shadow: 0 0 15px #00ff95, 0 0 50px #00ff95;
    transform: scale(1.05);
}

.description__about--title {
    margin-bottom: 3rem;
    font-size: 3.5rem;
    text-shadow: 0 2px 5px #00DFC2, 0 2px 5px #00DFC2, 0 2px 5px #00DFC2;
    color: transparent; /* Hacemos el texto transparente inicialmente */
    animation: fade-in 3s ease-out forwards; /* Aplicamos la animación */
}

@keyframes fade-in {
    to {
        color: #fff; /* Al final de la animación, el texto es completamente visible */
    }
}
</style>