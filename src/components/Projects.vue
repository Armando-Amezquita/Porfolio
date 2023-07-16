<script setup></script>
<template>
    <section class="container__projects">
        <div class="projects__subcontainer">

            <h2 class="projects__title">Experiencia (Projectos)</h2>
            <div class="projetcs">
                <div class="project">
                    <div class="card-content">
                        <h2 class="project__title">Title project</h2>
                    </div>
                    <div class="card-description">
                        <h2 class="project__title">Title project</h2>
                        <p class="project__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, sit. Blanditiis natus velit dolorem ullam, cupiditate suscipit impedit dolores quasi reiciendis eius facere qui, nostrum cum doloribus veritatis libero ducimus.</p>
                    </div>
                </div>
                <div class="project"></div>
                <div class="project"></div>
            </div>
        </div>
    </section>
</template>
<style>
.container__projects{
  width: 100%;
  min-height: 100vh;
  /* background: -webkit-linear-gradient(0, #050011, #02015B 80%); */
  background-image: url('../assets/images/4482.jpg');   
  background-image: url('../assets/images/cielo-estrellado.jpg');   
  background-image: url('../assets/images/pexels-rafael-guajardo-604684.jpg');   
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: unset;
}
.projects__subcontainer{
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 100%;
  min-height: 100vh;
  padding: 4rem;
  background-color: rgba(22, 25, 29, 0.6);
  backdrop-filter: blur(3px);
}
.projects__title{
    font-size: 3rem;
    color: #fff;
}
.projetcs{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem; 
    margin-top: 4rem;
}
.project{
    position: relative;
    width: 35rem;
    height: 35rem;
    border-radius: 1rem;
    background-image: url('../assets/images/pexels-alexander-ant-4585185.jpg');
    background-size: cover;
    box-shadow: 0 2px 5px #28AFFA, 0 2px 10px #28AFFA;
    transition: backdrop-filter 0.3s;
}

.project:hover,
.project:focus-within {
  backdrop-filter: blur(5px);
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
}
.project__title{
    font-size: 2rem;
    margin: 2rem;
    color: #fff;
}

.card-description {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  text-align: center;
  background-color: rgba(22, 25, 29, 0.7);
  opacity: 0;
  border-radius: 1rem;
  transition: opacity 0.3s;
}

.project:hover .card-description,
.project:focus-within .card-description {
  opacity: 1;
}
.project__description{
    font-size: 1.7rem;
    color: #28AFFA;
}
</style>