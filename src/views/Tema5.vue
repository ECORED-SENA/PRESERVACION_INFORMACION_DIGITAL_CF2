<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Sistemas de ordenación documental

    .bloque-texto-a.color-primario.color2.p-4.p-md-5.mt-5.col-md-9.m-auto 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(style="place-self:end")
          h3.text-white Sistema de ordenación documental
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p La ordenación documental es un proceso muy importante dentro de las organizaciones archivísticas, debido a su relación con el proceso de clasificación que le antecede y descripción que le precede. La ordenación es un desarrollo secuencial de archivos de forma natural, cronológica, alfabética y/o numérica dentro de los grupos definidos en la clasificación.

    p.mt-5(data-aos="fade-up") Cuando este proceso se realiza de manera correcta la clasificación y ordenación da como resultado la organización, es decir, si lo pusiera como ejemplo matemático quedaría de la siguiente manera:

    .row.mt-5
      .col-md-6
        .cajon.color-secundario.p-5
          .h5.text-center Organización = clasificación + ordenación + descripción

        p.mt-4(data-aos="fade-up") Cuando este proceso se realiza de manera correcta la clasificación y ordenación da como resultado la organización, es decir, si lo pusiera como ejemplo matemático quedaría de la siguiente manera:

        p.mt-4 #[i.fas.fa-check(style="color:#EA3065;")] Clasificación
        p.mt-2 #[i.fas.fa-check(style="color:#EA3065;")] Ordenación
        p.mt-2 #[i.fas.fa-check(style="color:#EA3065;")] Descripción

        .bloque-texto-d.color-secundario.p-3(style="border:none;")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="display:contents" data-aos="fade-left")
            p.text-regular &nbsp;&nbsp;&nbsp;&nbsp;Clasificar y ordenar son dos operaciones dentro de una más amplia que se puede llamar organización, perfectamente diferenciales y esenciales, en aras de la conservación de los documentos, indispensables para inventariar y catalogar.
          .bloque-texto-d__autor 
            .h5.mb-0(style="display:contents") (Heredia, 1995).
            i.fas.fa-quote-right(data-aos="fade-left")

      .col-md-6
        img(src="@/assets/curso/tema5/2.svg" data-aos="fade-left")

        .cajon.color-secundario.p-5.mt-4
          p La organización documental es resultado del producto de realizar eficazmente la clasificación, seguida de la ordenación; si este proceso no se da de manera complementaria se puede afirmar que no hay una adecuada organización, pues los archivos pueden estar bien clasificados, pero mal ordenados.

    p.mt-5(data-aos="fade-up") La organización se debe comprobar examinando físicamente los documentos, también observando y representando en instrumentos de control o de consulta, allí es donde se aprecia la coherencia y confiabilidad de los procesos de la organización.

    .tabla-a.color-acento-botones.col-md-8.m-auto(style="overflow:initial;")
      table
        thead(style="border:none")
          tr
            th.text-white.p-3.text-center(style="background-color:#FF5151;text-align:left;border:none;width:50%;") Instrumentos de control
            th.text-white.p-3.text-center(style="background-color:#FF5151;text-align:left;border:none;width:50%;") Instrumentos de consulta
        tbody
          tr
            td(style="background-color:#EDFBFD;")
              p.mt-4 #[i.fas.fa-check(style="color:#EA3065;")] #[strong Inventarios]
              p.mt-2 #[i.fas.fa-check(style="color:#EA3065;")] #[strong Tablas de retención documental]
              p.mt-2 #[i.fas.fa-check(style="color:#EA3065;")] #[strong Tablas de valoración documental]
            td(style="background-color:#FFFFFF;")
              p.mt-4 #[i.fas.fa-check(style="color:#EA3065;")] #[strong Guías]
              p.mt-2 #[i.fas.fa-check(style="color:#EA3065;")] #[strong Catálogos]

    p.mt-5(data-aos="fade-up") La clasificación establece las agrupaciones documentales diferenciadas y comienza documentando la agrupación más grande y finaliza agrupando las más pequeñas, para lograr la conformación de estas el proceso de clasificación determina:

    .row.mt-3
      .col-md-8
        ol.lista-ol--cuadro
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span.text-white 1
            p Las unidades administrativas.
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span.text-white 2
            p Las funciones que estas deben cumplir.

        p.mt-2(data-aos="fade-up") La ordenación viene de varios documentos simples o complejos que corresponden a una secuencia de una misma serie. Para su efectividad se aplica un sistema de ordenación secuencial:

        p.mt-4 #[i.fas.fa-check(style="color:#EA3065;")] Numérica
        p.mt-2 #[i.fas.fa-check(style="color:#EA3065;")] Alfabética
        p.mt-2 #[i.fas.fa-check(style="color:#EA3065;")] Mixta

        p.mt-2(data-aos="fade-up") El sistema de ordenación que se emplea está sometido a las características específicas de cada serie, como se ilustra en la figura.
      .col-md-4
        img(src="@/assets/curso/tema5/3.svg" data-aos="fade-left")

    .col-lg-7.m-auto
      p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 10.  Sistema de ordenación
      img(src="@/assets/curso/tema5/4.svg" data-aos="fade-up")
      figcaption Nota. Tomado del Archivo General de la Nación (2003).
      
      p.mt-4(data-aos="fade-up") Este sistema de ordenación es fácil de comprender, su aplicación no es del todo apropiada debido a que han habido aplicaciones indiscriminadamente a grupos documentales grandes, y no a series documentales.

      p.mt-3(data-aos="fade-up") Para mayor consulta, puede revisar el siguiente documento:

      a.anexo.mt-4.col-md-8(href="https://www.google.com/url?q=https://www.archivogeneral.gov.co/caja_de_herramientas/docs/5.%2520organizacion/DOCUMENTOS%2520TECNICOS/CARTILLA%2520DE%2520ORDENACION%2520DOCUMENTAL.pdf&sa=D&source=docs&ust=1637897557833000&usg=AOvVaw3Gl67M68djbdUFqOhFvVc4" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          h5.mb-0 Enlace web. 
          p Ordenación documental

    h4.mt-5.text-center(data-aos="fade-up") Síntesis
    img.mt-2(src="@/assets/curso/tema5/5.svg" data-aos="fade-up")




</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.bloque-texto-d.color-secundario:before
  background-color: #7CC5FF
.bloque-texto-a.color-primario
  background-color: #F6F6F6
.bloque-texto-a.color-primario:before
  background-color: #64B5F6
#Grupo_129330
  cursor: pointer
.contLey
  background: url("../assets/curso/tema1/8.svg")
  background-size: contain
  background-position: center
  background-repeat: no-repeat
@media (max-width: 1240px)
  .contLey
    background-size: cover !important
.cajon.color-secundario:before
  background-color: #3bb6cb
.cajon.color-secundario
  background-color: #88E0EF
.color2:before
  background-color: #FF5151 !important
.color2
  background: url("../assets/curso/tema5/1.svg")
  background-repeat: no-repeat
  background-size: contain
.p-4.contLinea
  background: url("../assets/curso/tema2/4.svg")
  background-repeat: no-repeat
.linea-tiempo-a.color-acento-contenido .linea-tiempo-a__icon__container
  background-color: #88E0EF
.linea-tiempo-a.color-acento-contenido .linea-tiempo-a__icon__container::before
    background-color: #88E0EF
.linea-tiempo-a.color-acento-contenido .linea-tiempo-a__row::before
  background-color: #88E0EF
.linea-tiempo-a__row::after
    background: #ffffff
.linea-tiempo-a__content
  text-align: left !important
.cont-caja
  background: rgb(255,255,255) /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(255,255,255,1) 10%, rgba(246,244,254,1) 15%, rgba(246,244,254,1) 15%, rgba(246,244,254,1) 16%, rgba(246,244,254,1) 36%, rgba(246,244,254,1) 85%, rgba(255,255,255,1) 88%) /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 10%,rgba(246,244,254,1) 15%,rgba(246,244,254,1) 15%,rgba(246,244,254,1) 16%,rgba(246,244,254,1) 36%,rgba(246,244,254,1) 85%,rgba(255,255,255,1) 88%) /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(255,255,255,1) 10%,rgba(246,244,254,1) 15%,rgba(246,244,254,1) 15%,rgba(246,244,254,1) 16%,rgba(246,244,254,1) 36%,rgba(246,244,254,1) 85%,rgba(255,255,255,1) 88%) /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 ) /* IE6-9 */
.img-infografica-b__modal__contenido div > *
    color: #12263F !important
.img-infografica-b__modal
  background-color: rgba(226,234,240,.98)
.img-infografica-b__modal__btn-cerrar i
  color: #FF5151
  background-color: white
  padding: 13px
  border-radius: 50px
.contCaja
  background: url("../assets/curso/tema4/7.svg")
  background-size: cover
  background-position: 100%
  background-repeat: no-repeat
.bloque-texto-a:before
  left: 44% !important
</style>
