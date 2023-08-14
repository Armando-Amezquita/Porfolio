<script setup>
import Projects from './Projects.vue'
import Projects2 from './Projects2.vue';
import Contact from './Contact.vue';

</script>
<template>
    <div class="container__test">
    <div class="main__container">
        <!-- <section class="main_left">
            <img class="main__image" src="../assets/images/international-154119_1280.png" alt="">
        </section> -->
        <section class="main__about">
            <h2 class="description__about--title">Hi there!</h2>
            <p class="description__about--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, explicabo. Dolorem expedita voluptates quos est quidem. Aspernatur natus distinctio doloremque minima officia magni maiores, suscipit accusamus veritatis quis omnis? Veritatis!</p>
            <button class="description__about--contact">
                Contactame
            </button>
        </section>
    </div>
</div>

    <!-- <Tecnologies /> -->
    <Projects2 />
    <Projects />
    <Contact />
</template>
<style>
.main__container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 2rem;
  background: -webkit-linear-gradient(90deg, #110F2A, #1D89E4 100%);
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
    font-size: 2rem;
    color: #fff;
}
.description__about--contact{
    height: 4rem;
    width: 12rem;
    margin: 2rem auto;
    border-radius: 2rem;
    border: none;
    font-size: 1.7rem;
    color: #fff;
    background: transparent;
    box-shadow: 0 0 10px #00DFC2;
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
</style>