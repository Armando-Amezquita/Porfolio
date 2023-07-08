<script setup>

</script>

<template>
  <header>
    <div class="header__container">
      <section class="header__container--left">Hola</section>

      <section class="header__container--rigth">
        <div class="header__container--rigthPicture">
          <div class="container__picture neon-container">
            <img class="picture" src="../assets/images/pexels-sofía-morales-14567680.jpg" alt="">
            
          </div>
          <!-- <h2>hola</h2> -->
        </div>
        <div class="header__container--description">
          <h1 class="description--title">Armando Amezquita</h1>
          <ul>
            <li>Redes</li>
            <li>Redes</li>
            <li>Redes</li>
            <li>Redes</li>
            <li>Redes</li>
          </ul>
        </div>
      </section>
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
  background: -webkit-linear-gradient(45deg, #02015B, #21013A 80%);
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
}
.header__container--rigth{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 28rem;
  height: 40rem;
  border-top-left-radius: 47%;
  border-top-right-radius: 47%;
  background: #16191D;
}
.header__container--rigthPicture{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
  background-color: #252A30;
  border-radius: 100%;
  backdrop-filter: blur(8px); 
}
.header__container--rigth__picture{
  width: 100%;
  height: 50%;
  background-color: red;
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
  background-color: #21013A;
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

</style>
