<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 El archivo digital y sus parámetros

    .bloque-texto-a.color-primario.color2.p-4.p-md-5.mt-5.col-md-10.m-auto 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p El archivo digital es un sistema documental corporativo que tiene como función principal acumular los objetos digitales que se obtienen o formen, siempre que cumplan los requerimientos básicos. El archivo digital cubre la escasez de información en los repositorios únicos para obtener informes de almacenamiento de los objetos digitales, permitiendo el compartimiento de estos y reduciendo el coste de la transferencia en las diferentes herramientas digitales, evitando el duplicado de información. 
            p.mt-3 Para poder almacenar estos documentos es indispensable realizar una tipificación de los mismos, asociando cada documento a la tipología que le corresponda al archivo digital.

    p.mt-5(data-aos="fade-up") Los documentos electrónicos almacenados y gestionados por el documento digital deben cumplir con los requerimientos que se muestran en la siguiente figura.

    .col-lg-8.m-auto
      p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 3. Requerimientos
      img(src="@/assets/curso/tema3/2.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") A continuación, se presentan algunos ejemplos de los tipos de información, independientemente de su soporte y medio de registro, digital o análogo, algunos de estos son:

    .row.mt-5
      .col-md-6.mb-3
        img(src="@/assets/curso/tema3/3.svg" data-aos="fade-right")
      .col-md-6.p-3(style="place-self:center;")
        .row
          .col-md-6.mb-3
             ul.lista-ul--color
              li 
                i.fas.fa-check
                | Bases de datos
              li 
                i.fas.fa-check
                | correos electrónicos 
              li 
                i.fas.fa-check
                | documentos sonoros 
              li 
                i.fas.fa-check
                | documentos textuales 
              li 
                i.fas.fa-check
                | documentos audiovisuales
              li 
                i.fas.fa-check
                | documentos fotográficos
          .col-md-6.mb-3
             ul.lista-ul--color
              li 
                i.fas.fa-check
                | documentos cartográficos / georreferenciados 
              li 
                i.fas.fa-check
                | páginas web
              li 
                i.fas.fa-check
                | chats
              li 
                i.fas.fa-check
                | mensajes de texto 
              li 
                i.fas.fa-check
                | mensajes de redes sociales 
              li 
                i.fas.fa-check
                | formularios electrónicos, entre otros.

    Separador

    .titulo-segundo.mt-5
      h2#t_3_1 3.1  Clasificación de los documentos

    .row.cont-caja
      .col-md-4
        img(src="@/assets/curso/tema3/4.svg" data-aos="fade-left")
      .col-md-8.p-5
        p(data-aos="fade-up") Los documentos son clasificados utilizando diferentes criterios y esto depende si la documentación es o no procedimentada:
        ol.lista-ol--cuadro.mt-4
          li(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong(style="color:#592FE6;") Documentación procedimentada:] conlleva un código de procedimiento y un código de expediente.
          li.pt-2(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong(style="color:#592FE6;") Documentación no procedimentada:] no tiene código de procedimiento, ni de expediente.
          li.pt-2(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong(style="color:#592FE6;") Documentos simples:] tiene un único tipo documental, solo conlleva una serie de documentación simple.

    .bloque-texto-d.color-secundario.p-3.mt-4.col-md-6.m-auto(style="border:none;")
      .bloque-texto-d__texto.mb-2
        i.fas.fa-quote-left(style="display:contents" data-aos="fade-left")
        p.text-regular &nbsp;&nbsp;&nbsp;&nbsp;Los documentos electrónicos están compuestos por una estructura física que hace referencia al hardware, software y a los formatos usados para la creación de una estructura lógica que relaciona el contenido, como los datos de identificación y los metadatos con los que se establece el documento.
      .bloque-texto-d__autor 
        .h5.mb-0 (MinTIC, 2021),
        p.mb-0 como se muestra en la figura 4.
        i.fas.fa-quote-right(data-aos="fade-left")

    p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp; Figura 4.  Estructura física y lógica

    .row.mt-3.p-3(style="background-color:#ECFAFC;border:2px #64B5F6 solid;border-radius:5px;")
      .col-md-4(style="place-self:center")
        h5 #[strong(style="color:#592FE6;") Estructura física:]
        ol.lista-ol--cuadro
          li(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong Software de creación]
          li(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong Medios de almacenamiento y reproducción]
          li(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong Formato]
      .col-md-4
        img(src="@/assets/curso/tema3/5.svg" data-aos="zoom-in")
      .col-md-4(style="place-self:center")
        h5 #[strong(style="color:#592FE6;") Estructura lógica:]
        ol.lista-ol--cuadro
          li(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong Contenido (datos)]
          li(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong Datos de indentificación para al autenticación y validación del documento (firma y/o estampado)]
          li(style="border-bottom: 2px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right]
            p #[strong Metadatos]
    figcaption Nota. Tomada de MinTIC (2021).

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_2 3.2  Estructura de un documento electrónico

    p(data-aos="fade-up") Un documento electrónico está compuesto por la estructura física y la estructura lógica. A continuación, se explicará su respectiva definición.

    h3.mt-4(data-aos="fade-up") Estructura física.

    .row.mt-4
      .col-md-7
        p(data-aos="fade-up") Para que un documento electrónico tenga una estructura física requiere de aplicaciones de software para poder crearlos, estos funcionan teniendo en cuenta configuraciones adaptadas al sistema, las cuales le dan unas características físicas al objeto digital. Esta estructura no es constante, ya que todo se somete al tipo de almacenamiento y a los formatos utilizados
        p.mt-3(data-aos="fade-up") Para comprender mejor dicha estructura es importante diferenciar los siguientes conceptos:
      .col-md-5
        img(src="@/assets/curso/tema3/6.svg" data-aos="fade-left")

    .row.mt-5
      .col-md-7
        .p-4(style="background-color:#C4F0F7;height:100%")
          .row
            .col-md-3
              img(src="@/assets/curso/tema3/7.svg" data-aos="fade-up")
            .col-md-3(style="place-self:center")
              h5(data-aos="fade-up") Formatos:
          p.mt-4(data-aos="fade-up") Contiene la información que se recupera e interpreta por un sistema específico que está constituido por una característica elemental del archivo que depende de su vida útil.
          p.mt-3(data-aos="fade-up") Además, tiene como objetivo reconocer los formatos vigentes que se utilizan en los documentos electrónicos. A partir de lo anterior, las entidades deben tener en cuenta lo siguiente:
          .row.mt-4
            .col-1
              img(src="@/assets/curso/tema3/8.svg" data-aos="fade-up")
            .col-11
              p(data-aos="fade-up") Identificar de acuerdo con el tipo de documento electrónico cuáles son los formatos en los que se está produciendo.
          .row.mt-1
            .col-1
              img(src="@/assets/curso/tema3/8.svg" data-aos="fade-up")
            .col-11
              p(data-aos="fade-up") Identificar si los formatos actuales son usados en la producción, permitiendo al documento electrónico ser auténtico, íntegro, fiable y usable durante todo el ciclo de vida.
          .row.mt-1
            .col-1
              img(src="@/assets/curso/tema3/8.svg" data-aos="fade-up")
            .col-11
              p(data-aos="fade-up") Identificar si los formatos actuales usados en la producción permiten embeber y anexar los metadatos establecidos en el esquema de metadatos.
      .col-md-5
        .p-4(style="background-color:#FFBBBB;height:100%")
          .row
            .col-lg-4
              img(src="@/assets/curso/tema3/9.svg" data-aos="fade-up")
            .col-lg-8(style="place-self:center")
              h5(data-aos="fade-up") Medios de almacenamiento y reproducción:
          p.mt-4(data-aos="fade-up") Los medios o herramientas que se utilizan son muy importantes, debido a que certifican que el documento cumpla con las especificaciones solicitadas mencionadas anteriormente, dentro de los medios o herramientas se encuentran los siguientes: #[em hardware] y #[em software].
          .row.mt-4
            .p-4.col-md-6.m-auto(style="background-color:#592FE6;border-radius:10px;")
              h4.text-center.text-white.mb-0 #[em Hardware]
          .row.mt-3
            .p-4.col-md-6.m-auto(style="background-color:#592FE6;border-radius:10px;")
              h4.text-center.text-white.mb-0 #[em Software]

    br
    h3.mt-5(data-aos="fade-up") Estructura lógica.
    p.mt-3(data-aos="fade-up") Incluye la forma en que se registran e identifican los documentos electrónicos, con el objetivo de asegurar que estos cumplan con las características de autenticidad, fiabilidad, integridad y disponibilidad. En el ámbito de identificación se incluye lo que indica la siguiente figura:

    .col-lg-8.m-auto
      p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 5. Identificación de un documento de estructura lógica
      img(src="@/assets/curso/tema3/10.svg" data-aos="fade-up")
      figcaption Nota. Tomada de MinTIC (2021).

    p.mt-5(data-aos="fade-up") La estructura lógica de los documentos electrónicos está compuesta de la siguiente manera:

    ImagenInfograficaB.color-primario.mt-5.col-lg-9.m-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/11.svg', alt='Estructura lógica')

      div(x="24%" y="44%" tooltip="Contenido" numero="")
        h4.text-center Contenido
        p.mt-3 Es el conjunto de información que se transmite en el documento electrónico.
        p Es importante que las entidades planteen las siguientes preguntas, antes de definir los contenidos del documento:

        h5.mt-4 ¿Para qué se necesita el documento?
        h5 ¿Quién requiere la información?
        h5 ¿Qué tipo de información requiere los interesados?

        p.mt-4 Por medio de las siguientes preguntas se puede conocer el objeto y finalidad de un documento:

        img.mt-4(src="@/assets/curso/tema3/12.svg")

        p.mt-4 En el momento en que las entidades logren las respuestas de las preguntas anteriores, estas podrán definir lo siguiente:

        ul.lista-ul.mt-3
          li 
            i.fas.fa-check(style="color:#EA3065;")
            | Se crearán plantillas normalizadas para la realización de los documentos electrónicos, dentro del programa establecido de documentos y formularios electrónicos.
          li 
            i.fas.fa-check(style="color:#EA3065;")
            | Se realizará un cuadro sinóptico para la buena estructuración del contenido de los documentos electrónicos.
          li 
            i.fas.fa-check(style="color:#EA3065;")
            | Las fuentes de información lógica deben ser verificadas para obtener los datos solicitados y el contenido que hará parte del documento electrónico. 
          li 
            i.fas.fa-check(style="color:#EA3065;")
            | Se deben obtener los datos de los contenidos mínimos a incorporar en la creación del documento electrónico.
          li 
            i.fas.fa-check(style="color:#EA3065;")
            | Se deben tener los datos mínimos requeridos en la entrada del documento electrónico.
          li 
            i.fas.fa-check(style="color:#EA3065;")
            | Los responsables de establecer el contenido de los documentos electrónicos deben verificar con las tablas de control de acceso a los usuarios internos y externos.

      div(x="46%" y="79%" tooltip="Metadatos" numero="")
        h4.text-center Metadatos
        p.mt-4 Son los datos que describen el contexto, el contenido y la estructura de los documentos y su gestión a lo largo del tiempo (Norma ISO 15489-1, 2021).
        p.mt-3 Estos permiten identificar las actividades y/o procesos que han sido realizados sobre el documento, en este caso en medio electrónico, esto ha implicado precisar diferentes medios tecnológicos, mecanismos y fuentes de captura de datos (sistemas operativos, SGDEA, aplicaciones de escritorio) que permitan identificar de manera idónea y explicita las características fundamentales del documento electrónico enmarcado en el contenido, la estructura y su gestión a lo largo del tiempo (MinTIC, 2021).
        img.mt-4(src="@/assets/curso/tema3/13.svg")
      div(x="74%" y="41%" tooltip="Autenticación" numero="")
        h4.text-center Autenticación
        p.mt-3 Por este medio se lleva a cabo la identificación del usuario o del documento electrónico. Este mecanismo utiliza los datos para identificar al individuo y de esta manera, confirmar la integridad y el no rechazo del documento electrónico. Para definir estos mecanismos las entidades deben adicionar lo siguiente (MinTIC, 2021):

        ol.lista-ol--cuadro.mt-4
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right.text-white]
            p Identificar en el mercado aquellos mecanismos más adecuados para asegurar la integridad, autenticidad, fiabilidad y disponibilidad de los documentos electrónicos.
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right.text-white]
            p Identificar que los mecanismos de autenticación y validación estén basados en estándares.
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right.text-white]
            p Definir el tipo de valoración del documento electrónico para saber cuál es el mecanismo más apropiado para garantizar la autenticidad, integridad y no repudio del documento electrónico.
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right.text-white]
            p Definir cuáles son los responsables del uso y administración de los mecanismos de autenticación y validación.
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right.text-white]
            p Definir las actividades necesarias para demostrar el buen uso de la administración de los mecanismos de autenticación y validación.
          li(style="border-bottom: 1px #AFAFAF solid;")
            .lista-ol--cuadro__vineta
              span #[i.fas.fa-angle-right.text-white]
            p Definir a qué tipo de documentos y en qué casos aplica el mecanismo de autenticación y validación.

</template>

<script>
export default {
  name: 'Tema3',
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
</style>
