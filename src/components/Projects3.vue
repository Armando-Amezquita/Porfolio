<script >
export default {
  data() {
    return {
      titulos: ['OMG WORlD WIDEGROUP', 'SM-DIGITAL', 'soy henry'], 
      informacion: {
        0: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum vulputate accumsan sed himenaeos montes, ultricies dapibus venenatis turpis mus varius. Per vitae potenti ligula convallis lacinia ridiculus conubia odio dignissim quis nisl tempor varius cras, fringilla lacus aenean phasellus arcu est metus tempus suscipit magnis non posuere. Ridiculus ornare egestas sociis hendrerit augue nunc, tortor orci laoreet aenean metus per fermentum, donec varius sollicitudin dictum taciti.',
        1: 'Convallis augue luctus orci nunc curabitur et, justo sociosqu accumsan aliquet lectus morbi, integer ridiculus dictumst ut consequat, malesuada quam vel magnis odio. Hendrerit diam curae nullam tellus felis sapien cursus, aptent morbi eu egestas venenatis pulvinar rhoncus, donec ac duis interdum dignissim mus. Condimentum eget libero neque magnis orci primis ligula quam mattis torquent facilisis faucibus netus mus, velit blandit dignissim ridiculus maecenas bibendum porta fringilla senectus tempus tortor nostra inceptos.',
        2: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
      },
      tituloSeleccionado: null,
    };
  },
  methods: {
    mostrarInformacion(index) {
      this.tituloSeleccionado = index;
    },
  },
  mounted() {
    this.mostrarInformacion(0)
  },
};
</script>

<template>
    <section class="test__projects">
        <p class="test__title">Experiencia</p>
        <article class="experiences">
            <div class="container__titles">
                <p v-for="(titulo, index) in titulos"
                    :key="index"
                    @click="mostrarInformacion(index)" :class="{ 'active__title': index === tituloSeleccionado }" class="title__experience">
                    {{ titulo }}
                </p>
            </div>
            <div class="informacion">
                <p class="description">{{ informacion[tituloSeleccionado] }}</p>
            </div>
            
        </article>
    </section>
</template>

<style scoped>
.test__projects{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem;
    min-height: 100vh;
    background: -webkit-linear-gradient(90deg, #000304 40%, #110F2A 100%);
    
}
.test__title{
  display: inline-block;
  font-weight: bold;
  font-size: 4rem;
  margin-bottom: 3rem;
  background: -webkit-linear-gradient(83deg, #12438B, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.experiences{
    width: 60%;
    min-height: 85vh;
    padding: 2rem;
    border-radius: 1rem;
    
    /* background-color: #212529; */
    box-shadow: 0px 8px 56px rgb(15 80 100 / 30%);
}
.container__titles{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 3rem;
}
.title__experience{
    font-size: 1.5rem;
    color: #00ff95;
}
.active__title{
    text-shadow: 0 0 10px #00ff95, 0 0 40px #00ff95 ;
    text-decoration: underline;
}
.description{
    font-size: 1.5rem;
    color: #fff;
}

</style>
