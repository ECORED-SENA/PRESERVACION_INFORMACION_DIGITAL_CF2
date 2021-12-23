<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Imágenes digitales

    .row
      .col-md-6
        p(data-aos="fade-up") Una imagen digital es una representación que utiliza un bit (números binarios 1 y 0), que es utilizado por dispositivos digitales, dependiendo de su resolución se puede representar en mapa de bits.
        p.mt-3(data-aos="fade-up") Estos mapas de bits se pueden visualizar en periféricos especiales para su representación como pantallas, gráficos vectoriales, mediante cuadrículas rectangulares de píxeles o puntos. Una de las ventajas es que estos pueden ser ampliados y no pierden su escala, tal como se muestra en la siguiente figura.
      .col-md-6
        img(src="@/assets/curso/tema4/1.svg" data-aos="fade-left")

    .col-lg-7.m-auto
      p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 6. Mapa de bits
      img(src="@/assets/curso/tema4/2.svg" data-aos="fade-up")

    p.mt-4(data-aos="fade-up") Las imágenes digitales, también pueden obtenerse del proceso de conversión de analógico a digital con escáneres y cámaras digitales o por medio de aplicaciones digitales.

    br
    .titulo-segundo.mt-5
      h2#t_4_1 4.1. Tipos de imágenes digitales

    .row
      .col-md-6
        p(data-aos="fade-up") Las resoluciones de una imagen digital pueden ser dinámicas o estáticas y partiendo de este principio estas se dividen en dos:
        h4.mt-5(data-aos="fade-up") Imágenes digitales rasters o mapas de bits
        p.mt-4(data-aos="fade-up") Cada píxel que contiene la imagen posee un color específico y entre más resolución o píxeles tenga la calidad de la imagen será mayor.
        p.mt-4(data-aos="fade-up") En las imágenes digitales se usan diferentes programas, pero uno de los que más se usa es Photoshop, pero tiene una desventaja y es que al crecer su tamaño puede perder su nivel de nitidez, esto porque están compuestas por pixeles como se visualiza en la figura que aparece a continuación.
      .col-md-6
        p(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 7. Imagen digital con poca nitidez
        img(src="@/assets/curso/tema4/3.svg" data-aos="fade-up")

    br
    br
    .row.mt-5
      .col-md-6
        h4(data-aos="fade-up") Imágenes vectoriales
        p.mt-4(data-aos="fade-up") A diferencia de las anteriores, no están compuestas de píxeles, sino de gráficos vectoriales que necesitan de unos puntos de control, debido a que tienen un contenido de fórmulas matemáticas que tienen la capacidad de crear curvaturas entre un punto y otro, esto permite que su edición sea más precisa y nítida, como se muestra en la figura 8.
      .col-md-6
        p(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 8. Imagen vectorial
        img(src="@/assets/curso/tema4/4.svg" data-aos="fade-up")

    Separador

    br
    .titulo-segundo.mt-5
      h2#t_4_2 4.2  La resolución de las imágenes digitales

    .row
      .col-md-6
        p(data-aos="fade-up") Es la capacidad de que una imagen pueda ser visualizada fielmente, entre mejor resolución, menos detalles se pierden de esta. Una resolución está compuesta por el conjunto de píxeles que integran la imagen, por ello se miden por:

        ul.lista-ul.mt-3
          li 
            i.fas.fa-check(style="color:#EA3065;")
            | Pulgada (ppi)
          li 
            i.fas.fa-check(style="color:#EA3065;")
            | Píxeles (pcm)

        p.mt-4(data-aos="fade-up") Cuantos más píxeles haya por pulgada, más información tendrá la imagen (más nítida).
        p.mt-3(data-aos="fade-up") Hay 3 tipos de resolución de imagen:

        ol.lista-ol--cuadro.mt-4
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span.text-white 1
            p La imagen almacenada en un archivo (se mide en megapíxeles).
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span.text-white 2
            p De cámara o pantalla (de un móvil, pantalla o un escáner) y se mide en PPP - Píxeles Por Pulgada.
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span.text-white 3
            p De impresión es la capacidad de un dispositivo como una impresora de colocar una cantidad efectiva de tinta para reproducir una imagen digital de manera precisa y fluida (se mide en DPI - Puntos Por Pulgada).

      .col-md-6
        img(src="@/assets/curso/tema4/5.svg" data-aos="fade-left")

    br
    .titulo-segundo.mt-5
      h2#t_4_3 4.3  Tamaño del archivo

    .row
      .col-md-6
        p(data-aos="fade-up") El tamaño del archivo es un número en bits o bytes, que describe cuánta memoria se requiere para almacenar información de imagen en los medios de almacenamiento (disco duro, USB, tarjeta de memoria, etc.), y como puede imaginar, el tamaño del archivo dependerá de una serie de factores, de los cuales los más importantes son la resolución (R), el tamaño de la imagen (L x Ancho) y la profundidad del color (P).
        p.mt-3(data-aos="fade-up") El tamaño de la imagen está dado por = anchura en píxeles X altura en píxeles. 
        p.mt-3(data-aos="fade-up") Ejemplo: una imagen de tamaño de 24 píxeles se puede representar así: 
        p.mt-3(data-aos="fade-up") 6 X 4 = 24 píxeles, como se muestra en la figura.
      .col-md-6
        p(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 9. Píxeles
        img(src="@/assets/curso/tema4/6.svg" data-aos="fade-left")

    br
    .titulo-segundo.mt-5
      h2#t_4_4 4.4  Clasificación digital

    p(data-aos="fade-up") Implica el proceso de convertir una imagen continua en una imagen degradada, objetivamente, a partir de la agregar niveles digitales espectralmente similares. Hay dos formas de clasificación: supervisado y no supervisado.

    .row.mt-5
      .col-md-6
        h4 #[i.fas.fa-check(style="color:#EA3065;")] Clasificación no digital no supervisada
        p.mt-3(data-aos="fade-up") La clasificación no supervisada es el procedimiento para agrupar los píxeles en una imagen según su similitud espectral, sin conocimiento previo del contexto objetivo.

        .bloque-texto-d.color-secundario.p-3(style="border:none;")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="display:contents" data-aos="fade-left")
            p.text-regular &nbsp;&nbsp;&nbsp;&nbsp;En este método es el propio algoritmo el que define las clases de acuerdo con los datos. Para llevar esto a cabo es necesario suministrar algunos valores, tales como el número de clases que se desea crear, los tamaños mínimos y máximos de cada una o ciertas tolerancias para la distinción entre clases. Estos parámetros (guían) al algoritmo en la definición de clases, que se produce en estos métodos de forma simultánea a la asignación de los elementos a una u otra de dichas clases. En general, se trata de procedimientos iterativos en los que una clasificación inicial va convergiendo hacia una final, en la cual se cumplen las características buscadas de homogeneidad, número de clases, etc.
          .bloque-texto-d__autor 
            .h5.mb-0(style="display:contents") (Olaya, 2007).
            i.fas.fa-quote-right(data-aos="fade-left")

      .col-md-6
        h4 #[i.fas.fa-check(style="color:#EA3065;")] Clasificación digital supervisada

        .bloque-texto-d.color-secundario.p-3(style="border:none;")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="display:contents" data-aos="fade-left")
            p.text-regular &nbsp;&nbsp;&nbsp;&nbsp;La clasificación supervisada requiere de cierto conocimiento previo del terreno y de los tipos de coberturas, a través de una combinación de trabajo de campo, análisis de fotografías aéreas, mapas e informes técnicos y referencias profesionales y locales. Con base en este conocimiento se definen y se delimitan sobre la imagen las áreas de entrenamiento o pilotos. Las características espectrales de estas áreas son utilizadas para “entrenar” un algoritmo de clasificación, el cual calcula los parámetros estadísticos de cada banda para cada sitio piloto, para evaluar cada ND de la imagen, compararlo y asignarlo a una respectiva clase. La clasificación supervisada pretende definir las clases temáticas que no tengan claro significado espectral, considerado por esto como un método artificial.
          .bloque-texto-d__autor 
            .h5.mb-0(style="display:contents") (Posada, 2008).
            i.fas.fa-quote-right(data-aos="fade-left")

    p.mt-5(data-aos="fade-up") El proceso de clasificación supervisada se puede resumir en las siguientes etapas:

    p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Tabla 1 Etapas clasificación supervisada

    div.contCaja.p-3
      .tabla-a.color-acento-botones(style="overflow:initial;")
        table
          thead(style="border:none")
            tr
              th.text-white.p-3.text-center(style="background-color:#FF5151;text-align:left;border:none;width:30%;") Nombre etapa
              th.text-white.p-3.text-center(style="background-color:#FF5151;text-align:left;border:none;width:70%;") Descripción
          tbody
            tr
              td.p-5(style="background-color:#E5F3F5;") #[strong Análisis estadístico y visual de las bandas]
              td(style="background-color:#F6F6F6;")
                p La etapa inicial consiste en la valoración cualitativa y cuantitativa de la calidad de la imagen de modo multibanda, de sus contrastes, del comportamiento espectral de distintas cubiertas dentro las bandas espectrales y se evalúa la separabilidad espectral de las bandas en relación con estas. Al final se obtiene la primera apreciación sobre el número de posibles clases temáticas a discriminar, sobre las bandas a utilizar y los posibles procesos adicionales para derivar las nuevas imágenes, que podrían ser útiles en la fase de clasificación (Posada, 2008).
                p.mt-3 Algunas de las medidas o gráficas útiles para el análisis de las bandas son las estadísticas multibanda, correlación, varianza y covarianza, los gráficos de dispersión entre bandas, etc.
            tr
              td.p-5(style="background-color:#EDFBFD;") #[strong Elaboración de la leyenda]
              td(style="background-color:#FFFFFF;")
                p Tomando en cuenta los objetivos del proyecto, el nivel de detalle requerido, la escala de trabajo y el tipo de imagen a utilizar se revisan distintos sistemas de clasificación y se establece una leyenda específica.
            tr
              td.p-5(style="background-color:#E5F3F5;") #[strong Selección y delimitación de las áreas de entrenamiento]
              td(style="background-color:#F6F6F6;")
                p Es la fase más importante del proyecto que requiere previo conocimiento de las características del área, así como de las categorías que pretende discriminar. Con base en experiencias locales y profesionales, trabajo de campo, uso de fotografías aéreas y otra información secundaria se definen y se delimitan las áreas de entrenamiento o pilotos representativas de cada una de las categorías de interés.
                p.mt-3 Se basa en los criterios pictórico-morfológicos de la imagen como tono o color, textura, tamaño, forma, sitio, etc. La errónea selección de muestras conducirá a resultados erróneos. A partir de estas muestras el algoritmo clasificador calcula los ND que definen cada una de las clases y asigna el resto de los píxeles de la imagen a una de esas categorías. La delimitación se realiza mediante un ratón sobre la pantalla del computador.
            tr
              td.p-5(style="background-color:#EDFBFD;") #[strong Elección y aplicación del algoritmo de clasificación]
              td(style="background-color:#FFFFFF;")
                p Con base en las áreas de entrenamiento delimitadas se puede iniciar el proceso de clasificación, el cual es automático.
                p.mt-3 El proceso consiste en una agrupación de todos los píxeles de cada banda espectral a una de las clases predeterminadas en la etapa anterior. El resultado será una nueva imagen donde los ND están categorizados en clases temáticas, y la cual se considera como un mapa digital en formato ráster. Pero antes de correr la clasificación se requiere elegir el criterio o algoritmo de asignación. Los más comunes son de mínima distancia, de paralelepípedos, y de la máxima probabilidad o verosimilitud.
            tr
              td.p-5(style="background-color:#E5F3F5;") #[strong Evaluación estadística de las áreas de entrenamiento]
              td(style="background-color:#F6F6F6;")
                p Las estadísticas evalúan el grado de representatividad de las áreas pilotos y dan idea sobre la separabilidad espectral de las clases temáticas, lo que al final garantiza una buena clasificación. #[br] #[br] Existen métodos gráficos y numéricos para evaluar las estadísticas, las más utilizadas son los diagramas de signaturas espectrales y los diagramas de dispersión espectral. Se basan en el análisis de las medias aritméticas y desviaciones estándar, la primera indica el comportamiento espectral medio de los ND, y la segunda el grado de heterogeneidad de la muestra.

      figcaption.bg-white Nota. Tomado de IGAC (2021).

      br
      .col-lg-4.mt-5.m-auto
        a.anexo.mb-4(href="https://www.un-spider.org/sites/default/files/Practica_ImagenesMultiespectralesDeSensoresRemotos_3.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            h5.mb-0 Anexo.
            p Imágenes multiespectrales de sensores remotos.




</template>

<script>
export default {
  name: 'Tema4',
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
  background-color: #64B5F6 !important
.color2
  background: url("../assets/curso/tema3/1.svg")
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
</style>
