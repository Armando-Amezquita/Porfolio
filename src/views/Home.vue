<script setup>
function clickd(e){
  e.preventDefault()
  console.log('click')
}

</script>

<template>
  <header>
    <div class="header__subcontainer">
    <div class="header__container">
      <!-- <div class="planet-container">
        <div class="planet orbit1"></div>
        <div class="planet orbit2"></div>
        <div class="planet orbit3"></div>
        <div class="planet-center"></div>
      </div> -->
    
      <section class="header__container--left">
        <h1 class="left__title" data-text="de">Desarrollador de </h1>
        <p class="left__title" data-text="ck">software Full-Stack</p>
        <span class="left__description">Creando el futuro</span>
        <div class="radar-container">
          <button @click="clickd" class="radar-button">Cv</button>
          <button class="contact">Contact me</button>
          <div class="radar-circle"></div>
        </div>
      </section>

      <section class="header__container--rigth">
        <div class="header__container--rigthPicture">
          <div class="container__picture neon-container">
            <img class="picture" src="../assets/images/pexels-sofía-morales-14567680.jpg" alt="">
          </div>
        </div>
        <div class="header__container--description">
          <p class="description--title">Armando Amezquita</p>
          <ul class="desciption--media">
            <li>Redes</li>
            <li>Redes</li>
            <li>Redes</li>
            <li>Redes</li>
            <li>Redes</li>
          </ul>
        </div>
      </section>
    </div>
    </div>
  </header>
  <main>

  </main>
  <footer>

  </footer>

</template>

<style scoped>
header{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* background: -webkit-linear-gradient(0, #050011, #02015B 80%); */
  background-image: url('../assets/images/4482.jpg');   
  background-image: url('../assets/images/astronauta-explora-espacio-exterior-oscuro-generativo-al.jpg');   
  background-image: url('../assets/images/cielo-estrellado.jpg');   
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: unset;
  
  
  /* -webkit-background-clip: text; */
}
.header__container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 80%;
  border: 1px solid #12438B;
  border-radius: 1rem;
  background-color: rgba(22, 25, 25, 0.4);
  box-shadow: 0 0 10px #00ff95, 0 0 20px #12438B;

}
.header__subcontainer{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(22, 25, 29, 0.5);

}
.header__container--rigth{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 28rem;
  height: 40rem;
  border-top-left-radius: 47%;
  border-top-right-radius: 47%;
  /* background: #16191D; */
  background-color: rgba(22, 25, 29, 0.6);
  
  /* box-shadow: 0 0 10px #0A9277, 0 0 20px #0A9277, 0 0 30px #0A9277; */
}
.header__container--rigthPicture{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
  background-color: rgba(37, 42, 48, 0.4); 
  /* background-color: #252A30; */
  border-radius: 100%;
  /* backdrop-filter: blur(8px);  */
}
.header__container--rigth__picture{
  width: 100%;
  height: 50%;
}

.header__container--description{
  margin-top: .5rem;
}
.description--title{
  font-size: 2.2rem;
  font-weight: bold;
  color: aliceblue;
}
.container__picture{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  height: 88%;
  border-radius: 50%;
}

.picture{
  width: 95%;
  height: 95%;
  border-radius: 50%;
}
.neon-container {
  background-color: #0A9277; 
  /* box-shadow: 0 0 10px #0A9277, 0 0 20px #0A9277, 0 0 30px #0A9277; */
}

.desciption--media{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
}

.header__container--left{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  text-align: center;
}

.left__title{
  position: relative;
  display: inline-block;
  font-weight: bold;
  font-size: 4rem;
  background: -webkit-linear-gradient(83deg, #12438B, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.left__title::after {
  content: attr(data-text);
  position: absolute;
  right: 0;
  color: #00ff95; /* Color neon */
  text-shadow: 0 0 10px #00ff95, 0 0 40px #00ff95;
}
.left__description{
  color: aliceblue;
  font-size: 3rem;
}


/* _______ */
.radar-container {
  position: relative;
  width: 100%;
  display: inline-block;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.contact{
  height: 4rem;
  width: 10rem;
  margin-left: 4rem;
  border-radius: .5rem;
  border: none;
  color: white;
  font-size: 1.5rem;
  background: -webkit-linear-gradient(0, #005, #12438B 80%); 
}

.radar-button {
  position: relative;
  z-index: 999;
  margin-top: 1.5rem;
  border-radius: 50%;
  color: white;
  padding: 15px 15px;
  background: -webkit-linear-gradient(0, #005, #12438B 80%);
  /* background-color: #02015B; */
  border: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
}

.radar-circle {
  position: absolute;
  top: 60%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 50%;
  /* border: 2px solid rgba(255, 255, 255, 0.4); */
  border: 2px solid #00ff95;
  animation: radar 2s linear infinite;
}

@keyframes radar {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  50% {
    width: 100px;
    height: 100px;
    opacity: 0.4;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}
/* .radar-button {
  position: relative;
  padding: 10px 20px;
  background-color: #02015B;
  border: none;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
}

.radar-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  animation: radar 2s linear infinite;
}

@keyframes radar {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  50% {
    width: 200px;
    height: 200px;
    opacity: 1;
  }
  100% {
    width: 400px;
    height: 400px;
    opacity: 0;
  }
} */
.planet-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.planet {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.orbit1 {
  animation: orbit1 4s linear infinite;
  background-color: #ffdb58; /* Color del primer planeta */
}

.orbit2 {
  animation: orbit2 6s linear infinite;
  background-color: #ff6f58; /* Color del segundo planeta */
}

.orbit3 {
  animation: orbit3 8s linear infinite;
  background-color: #58ff8c; /* Color del tercer planeta */
}

.planet-center {
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff; /* Color del centro */
}

@keyframes orbit1 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
  }
}

@keyframes orbit2 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(170px) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(170px) rotate(-360deg);
  }
}

@keyframes orbit3 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(220px) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(220px) rotate(-360deg);
  }
}
</style>
