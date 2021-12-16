<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
    color: #12263F !important
.titulo-principal__numero
  background-color: #FF5151
.titulo-principal__numero span
  color: #fff !important
.curso-main-container > .container
    overflow-x: inherit !important
.titulo-segundo:after
  border-left-color: #5C22C3 !important
.row
  margin-left: 0px !important
  margin-right: 0px !important
.banner-interno__fondo
  background-image: url("./assets/curso/fondo.svg") !important
.banner-principal__img img
  max-width: 78% !important
  display: inline
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
    text-align: right
.banner-principal .tarjeta
  background-color: #ffffff !important
  padding-right: 0!important
  padding-left: 0!important
</style>
