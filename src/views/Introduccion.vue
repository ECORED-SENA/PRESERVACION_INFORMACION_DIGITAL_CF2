<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") A continuación, se presenta un video en el que se hará una breve introducción del presente componente formativo:

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/puMO4kf6PRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
   

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
