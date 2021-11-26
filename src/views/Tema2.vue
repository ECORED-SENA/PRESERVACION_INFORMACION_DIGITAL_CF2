<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Normas de gestión ambiental

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.col-md-9.m-auto 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/tema2/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Para llevar de una manera controlada y estandarizada el control de la documentación se creó el Sistema de Gestión Ambiental (SGA), este se basa en una de las Normas ISO, la 14001; la cual permite que las empresas, entidades u organizaciones, controlen los procesos donde intervenga labores, servicios y productos que puedan causar daño en el medio ambiente, mediante esta norma se propendería mitigar los impactos ambientales. Es por ello, que el control de la documentación en una empresa debe garantizar que su implementación y funcionamiento no solo se enfoque en la información sino en la gestión ambiental.

    p.mt-5(data-aos="fade-up") En la siguiente figura se muestra la recomendación de cómo llevar la documentación del SGA.

    .col-lg-8.m-auto
      p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 2. Flujograma documentación SGA
      img(src="@/assets/curso/tema2/2.svg" data-aos="fade-up")
      figcaption Nota. Tomado de Nueva-ISO-14001 (2015).

    .row.mt-5
      .col-md-6.mb-3
        p(data-aos="fade-up") Las versiones en el Sistema de Gestión Ambiental evolucionan constantemente no por ISO, sino porque la información y su forma de presentarse cambia continuamente, es por ello que las empresas deben adaptarse al cambio e implementar constantemente las actualizaciones de ISO 14001.
        p.mt-3(data-aos="fade-up") Para una mayor consulta sobre la Norma ISO14001 se recomienda visitar el sitio:
        a.anexo.mt-4.col-md-9(href="https://www.google.com/url?q=https://www.iso.org/obp/ui%23iso:std:iso:14001:ed-3:v1:es&sa=D&source=docs&ust=1637802397572000&usg=AOvVaw3GkZUsjc32LVeR5jGhnunx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            h5.mb-0 Enlace web. 
            p ISO14401
        p.mt-3(data-aos="fade-up") El Programa de Gestión Documental del Ministerio de Ambiente y Desarrollo Sostenible ha definido las actividades que se han estipulado en cada uno de los procesos de la gestión documental, para ser ejecutadas a corto, mediano y largo plazo; en consecuencia, este documento se encuentra acompañado de un Formato RACI / Cronograma que ha establecido los roles y responsabilidades en la ejecución de cada una de las actividades, así como su puesta en marcha durante la vigencia del PGD (Ministerio de Ambiente y Desarrollo Sostenible).
      .col-md-6
        img(src="@/assets/curso/tema2/3.svg" data-aos="fade-left")

    p.mt-2(data-aos="fade-up") Por lo anterior, se requiere de las siguientes fases para la implementación del programa de gestión documental según Minambiente (2021):

    .p-4.mt-4.contLinea
      LineaTiempoA.color-acento-contenido.mt-5(:datos="datosLineaTiempoA")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '1. Elaboración',
        titulo: '',
        texto:
          '<ul class="lista-ul--color"><li><i class="fas fa-check"></i> Diagnóstico integral</li><li><i class="fas fa-check"></i> Identificación de requerimientos.</li><li><i class="fas fa-check"></i> Cronograma - Responsables</li><li><i class="fas fa-check"></i> Estrategias de implementación</li><li><i class="fas fa-check"></i> Aprobación del CIGD.</li></ul>',
      },
      {
        ano: '2. Ejecución',
        titulo: '',
        texto:
          '<ul class="lista-ul--color"><li><i class="fas fa-check"></i> Socialización</li><li><i class="fas fa-check"></i> Indicación de actividades a implicados.</li><li><i class="fas fa-check"></i> Diseño de instrumentos, procedimientos y demás herramientas que garanticen la implementación.</li></ul>',
      },
      {
        ano: '3. Seguimiento',
        titulo: '',
        texto:
          '<ul class="lista-ul--color"><li><i class="fas fa-check"></i> Verificación de actividades realizadas.</li><li><i class="fas fa-check"></i> Cumplimiento de metas establecidas.</li><li><i class="fas fa-check"></i> Controles periódicos.</li><li><i class="fas fa-check"></i> Informes de avance con evidencias.</li><li><i class="fas fa-check"></i> Evaluación.</li></ul>',
      },
      {
        ano: '4. Mejora',
        titulo: '',
        texto:
          '<ul class="lista-ul--color"><li><i class="fas fa-check"></i> Auditorías a la implementación.</li><li><i class="fas fa-check"></i> Acciones correctivas.</li><li><i class="fas fa-check"></i> Acciones preventivas.</li></ul>',
      },
    ],
  }),
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
  background: url("../assets/curso/tema1/23.svg")
  background-repeat: no-repeat
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
</style>
