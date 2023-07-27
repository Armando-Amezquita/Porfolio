<script setup>
import { ref } from 'vue';
const form = {
    name: '',
    email: '',
    message: ''
}
function submitForm() {
    console.log(form);
    form.name = '';
    form.email = '';
    form.message = '';
}

</script>
<template>
    <div class="container__form--background">
        <div class="container__form">
            <form class="form" @submit.prevent="submitForm">
                <p class="form__title">Escribeme, seguro te contactare! </p>
                <div class="form__label">
                    <input placeholder="Nombre..." class="contact__input" type="text" id="name" v-model="form.name" required>
                </div>
                <div class="form__label">
                    <input placeholder="Email" class="contact__input" type="email" id="email" v-model="form.email" required>
                </div>
                <div class="form__label">
                    <textarea placeholder="Descripcion" class="contact__input" id="message" v-model="form.message" required></textarea>
                </div>
                <button class="form__button" type="submit">Enviar</button>
            </form>
        <div class="form__image"></div>
    </div>
  </div>
</template>

<style>
.container__form--background{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #110F2A;
    /* background-image: linear-gradient(to right, #110F2A 50%, #f56893 50%); */
    /* background:  -webkit-linear-gradient(45deg, #110F2A, #f56893 250%);; */
}
.container__form{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #e6f2ff; */
    width: 90%;
    height: 46rem;
    border-radius: 1rem;
    
    box-shadow: 0 0 10px #00ff95, 0 0 10px #12438B;
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 48%;
    padding: 2rem;
    background-color: transparent;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}
.form__title{
    margin: 2rem 0;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 10px #00ff95, 0 0 10px #12438B;
}
.form__image{
    width: 52%;
    height: 100%;
    background-image: url('../assets/images/about2.jpg');
    background-image: url('../assets/images/test10.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
.form__label{
    width: 80%;
}

.contact__input{
    width: 100%;
    height: 4rem;
    padding: 0 2rem;
    margin: 1rem;
    border-radius: 4rem;
    border: none;
    font-size: 1.5rem;
    background: transparent;
    box-shadow: 0 0 10px #00ff95, 0 0 10px #12438B;
}
.contact__input::placeholder {
    font-style: italic;
    color: #fff;
    text-shadow: 0 0 10px #00ff95, 0 0 10px #12438B;
}
.form__button{
    width: 10rem;
    height: 4rem;
    margin: 1rem 0;
    border-radius: 4rem;
    border: none;
    font-size: 1.5rem;
    background: transparent;
    color: #fff;
    font-weight: bold;
    /* text-shadow: 0 0 10px #00ff95, 0 0 10px #12438B; */
    box-shadow: 0 0 10px #00ff95, 0 0 10px #12438B;
}

</style>