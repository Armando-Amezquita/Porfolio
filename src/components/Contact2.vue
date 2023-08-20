<script>
</script>

<template>
    <section class="contact__test">
        <form class="container__contact">
            <p class="title__contact" data-text="Creemos">Creemos juntos el futuro</p>
            <div class="input-group">
                <input class="input-group__input"  type="text" >
                <label class="input-group__label" for="">Nombre</label>
            </div>
            <div class="input-group">
                <input class="input-group__input" type="email" >
                <label for="" class="input-group__label">email</label>
            </div>
            <div class="input-group">
                <textarea class="textarea" name="" id="" cols="30" rows="10">
                </textarea>
                <label class="input-group__label label-textarea">Asunto</label>
            </div>
            <button class="contact__send">Enviar</button>
        </form>
    </section>
</template> 

<style >
.contact__test{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: -webkit-linear-gradient(90deg, #110F2A -14%, #000304 50%);
}
.container__contact{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}
.title__contact{
    position: relative;
    font-size: 3rem;
    margin: 3rem 0;
  background: -webkit-linear-gradient(83deg, #12438B, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.form__input{
    display: flex;
    flex-direction: column;
}
.contact__input2{
    width: 30rem;
    height: 5rem;
    margin: 2rem 0;
    padding: 0 2rem;
}
.input-group{
    position: relative;
}
.input-group__input{
    width: 27rem;
    padding: 1.3rem 2rem ;
    margin: 1.5rem 0 ;
    border: none;
    color: #fff;
    border-radius: 4px;
    outline: 2px solid #00ff95;
    background-color: transparent;
    /* transition: outline-color 500ms; */
}
.input-group__input:is(:focus, :valid){
    outline-color: #00ff95;
}

.input-group__label{
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    left: 0;
    translate: 10px 10px;
    color: #fff;
    border-radius: 1rem;
    /* transition: translate 500ms, scale 500ms; */
}

.input-group__input:focus + 
.input-group__label, 
.input-group__input:valid + 
.input-group__label{
    padding-inline: 5px;
    translate: 10px 2px;
    scale: 0.8;
    background-color: #000304;
}
.textarea{
    width: 28rem;
    padding: 1.3rem 2rem;
    margin: 1.5rem 0;
    border: none;
    border-radius: 1rem;
    color: #fff;
    outline: 2px solid #00ff95;
    background-color: transparent;
    /* transition: outline-color 500ms; */
    resize: none; 
    overflow: hidden; 
    text-align: left; 
}
.label-textarea{
    font-size: 1.5rem;
    padding: 0 1rem;
    translate: 20px 3px;
    background-color: #000304;
}

.contact__send{
    width: 20rem;
    height: 4rem;
    font-size: 1.8rem;
    border: none;
    border-radius: 1rem;
    background: #00ff95;
    color: #000304;
    font-weight: bold;
    
}
.contact__send:hover{
    box-shadow: 0 0 10px #00ff95, 0 0 10px #12438B;
}

.title__contact::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  color: #00ff95; /* Color neon */
  text-shadow: 0 0 10px #00ff95, 0 0 40px #00ff95;
}
</style>