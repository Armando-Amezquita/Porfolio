<script setup>

</script>
<template>
    <section class="tecnologies">
       <h2 data-text="ias" class="tecnologies__title2">Habilidades y Tecnologias </h2>
        <ul class="tecnologies__test">
            <div class="tecnologies__frontend">
                <p class="title__frontend"> Desarrollador Backend</p>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-javascript"></span>
                    <span class="tecnology__name">Javascript</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-nodejs"></span>
                    <span class="tecnology__name">Node.Js</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-javascript"></span>
                    <span class="tecnology__name">Express.Js</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-javascript"></span>
                    <span class="tecnology__name">WebSockets y Socket.IO</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-javascript"></span>
                    <span class="tecnology__name">JWT, Passport</span>
                </li>

            </div>
            <div class="tecnologies__frontend">
                <p class="title__frontend">Desarrollo Frontend</p>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-javascript"></span>
                    <span class="tecnology__name">Javascript</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-vue"></span>
                    <span class="tecnology__name">Vue.Js</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-react"></span>
                    <span class="tecnology__name">React.Js</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-javascript"></span>
                    <span class="tecnology__name">Vuex</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-javascript"></span>
                    <span class="tecnology__name">Redux</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-html"></span>
                    <span class="tecnology__name">Html, Css</span>
                </li>

            </div>
            <div class="tecnologies__frontend">
                <p class="title__frontend">Base de Datos</p>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-mongodb"></span>
                    <span class="tecnology__name">MongoDB</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-vue"></span>
                    <span class="tecnology__name">CRUD</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-react"></span>
                    <span class="tecnology__name">Mongoose</span>
                </li>
                <li class="tecnology__container-icon">
                    <span class="tecnology_img tecnology__img-javascript"></span>
                    <span class="tecnology__name">Sequelize</span>
                </li>

            </div>
        </ul>
    </section>
</template>
<style scoped>
.tecnologies{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: #110F2A;
}

.tecnologies__title2{
  position: relative;
  display: inline-block;
  font-weight: bold;
  font-size: 4rem;
  background: -webkit-linear-gradient(83deg, #12438B, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tecnologies__title2::after {
  content: attr(data-text);
  position: absolute;
  right: 0;
  color: #00ff95; 
  text-shadow: 0 0 10px #00ff95, 0 0 40px #00ff95;
}

.tecnologies__test{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    height: 80%;
}

.tecnologies__frontend{
    flex: 1 1;
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 20px;  
    max-width: 35rem;
    min-height: 20rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #121F3D;
    transition: box-shadow 2s ease;
}
.tecnologies__frontend:hover{
    cursor: pointer;
    box-shadow: 0 0 10px #fff, 0 0 10px #00ff95;
}
.title__frontend{
    grid-column: 1 / span 2; 
    text-align: center;
    font-size: 2rem;
    color: #00ff95;
}
.tecnologies__frontend {
    position: relative;
    color: white;
    transition: background-color 0.3s ease; 
}

.tecnologies__frontend::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0%;
    width: 0;
    height: 100%;
    border-top: 2px solid #00ff95;
    border-top-left-radius: 1rem;
    transition: width 1s ease; 
}

.tecnologies__frontend:hover::before {
    width: 100%;
    left: 0; 
    border-top-right-radius: 1rem;
}

.tecnology__container-icon{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.tecnology_img{
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
.tecnology__img-javascript{
    background-image: url('../assets/icons/javascript.png');
    transition: transform 1s ease; 
}

.tecnology__img-javascript:hover {
    transform: rotate(360deg); 
}
.tecnology__img-react{
    background-image: url('../assets/icons/react.png');
}
.tecnology__img-vue{
    background-image: url('../assets/icons/vue.png');
}
.tecnology__img-javascript{
    background-image: url('../assets/icons/javascript.png');
}
.tecnology__img-javascript{
    background-image: url('../assets/icons/javascript.png');
}
.tecnology__img-css{
    background-image: url('../assets/icons/html.png');
}
.tecnology__img-html{
    background-image: url('../assets/icons/css.png');
}
.tecnology__img-nodejs{
    background-image: url('../assets/icons/nodejs1.png');
}
.tecnology__img-mongodb{
    background-image: url('../assets/icons/mongodb.png');
}
.tecnology__name{
    margin-left: 2rem;
    font-size: 1.5rem;
    color: #fff;
}

</style>