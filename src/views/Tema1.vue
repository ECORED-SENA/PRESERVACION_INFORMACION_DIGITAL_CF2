<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Normativa vigente

    .row
      .col-md-8
        .bloque-texto-d.color-secundario.p-4(style="border:none;")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="display:contents" data-aos="fade-left")
            p.text-regular &nbsp;&nbsp;&nbsp;&nbsp;La normatividad es un conjunto de leyes o reglamentos que rigen conductas y procedimientos según los criterios y lineamientos de una institución u organización privada o estatal. La normatividad es un conjunto de normativas que suelen plasmarse formal o informalmente por escrito. En este sentido, se incluyen los derechos, obligaciones y sanciones según los criterios morales y éticos de la institución que la rige.
          .bloque-texto-d__autor 
            .h5.mb-0(style="display:contents") (Significados, 2018).
            i.fas.fa-quote-right(data-aos="fade-left")
      .col-md-4
        figure
          img(src="@/assets/curso/tema1/1.svg" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Para nuestro caso, la normativa en el manejo de la información es por medio de leyes, decretos, acuerdos y/o políticas, que permiten reglamentar y estandarizar parcialmente el uso, acceso y almacenamiento de la información tanto de una organización como actualmente los datos personales de una persona.

    .bloque-texto-a.color-primario.p-5.mt-5.col-md-9.m-auto 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/tema1/2.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p En Colombia el Archivo General de la Nación crea el Acuerdo 006 del 15 de octubre de 2014 “por medio del cual se desarrollan los Artículos 46, 47 y 48 del Título XI Conservación de documentos de la Ley 594 de 2000″.
            p.mt-3 Para mayor información se puede consultar el acuerdo dispuesto a continuación:
            a.anexo.mt-4(href="https://normativa.archivogeneral.gov.co/acuerdo-006-de-2014/" target="_blank" style="background-color:#EDE8FF;position: relative;margin-bottom: -61px;")
              .anexo__icono
                img(src="@/assets/curso/tema1/24.svg")
              .anexo__texto
                h5(style="color:#592FE6;") Enlace web. 
                p(style="color:#592FE6;") Acuerdo 006 del 15 de octubre de 2014

    p.mt-5(data-aos="fade-up") Es importante destacar en este acuerdo algunos artículos relevantes para la comprensión de esta área de conocimientos como:

    p.mt-4(data-aos="fade-up") #[strong Artículos relevantes al Acuerdo 006 del 15 de octubre de 2014]

    SlyderB.mt-5(:datos="datosSlyder")

    p.mt-5(data-aos="fade-up") Se debe tener en cuenta que para esta área de conocimiento aplica la normativa a nivel general y específica. Lo anterior, para garantizar que los procesos en la preservación de documentos sean llevados de manera correcta y exitosa, salvaguardando tanto a las organizaciones como a las personas.

    p.mt-3(data-aos="fade-up") A continuación, se presentan las diferentes normativas: 

    h5.mt-5.text-center(data-aos="fade-up") Leyes

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/9.svg', alt='Leyes')

      div(x="20%" y="29%" tooltip="Ley 527 de 1999" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 4rem 2rem 4rem")
              h4(style="color:#12263F !important;") Ley 527 de 1999
              p(style="color:#12263F !important;") Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.
              a.anexo.mt-3(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="20%" y="45%" tooltip="Ley 594 de 2000" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 5rem 5rem 5rem")
              h4(style="color:#12263F !important;") Ley 594 de 2000
              p(style="color:#12263F !important;") Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.
              a.anexo.mt-3(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0594_2000.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="20%" y="61%" tooltip="Ley 975 de 2005" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 3rem 2rem 3rem;background-size:cover;")
              h4(style="color:#12263F !important;") Ley 975 de 2005
              p(style="color:#12263F !important;") Por la cual se dictan disposiciones para la reincorporación de miembros de grupos armados organizados al margen de la ley, que contribuyan de manera efectiva a la consecución de la paz nacional y se dictan otras disposiciones para acuerdos humanitarios. El Capítulo X Conservación de archivos establece el deber a la preservación de la memoria histórica que corresponde al Estado y establece lineamientos para facilitar el acceso a los archivos.
              a.anexo.mt-3(href=" http://www.secretariasenado.gov.co/senado/basedoc/ley_0975_2005.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="20%" y="77%" tooltip="Ley 1185 de 2008" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 3rem 2rem 3rem;")
              h4(style="color:#12263F !important;") Ley 1185 de 2008
              p(style="color:#12263F !important;") Por la cual se modifica y adiciona la Ley 397 de 1997 –Ley General de Cultura– y se dictan otras disposiciones. En su Artículo 9° establece las obligaciones y competencias en relación con los bienes del patrimonio cultural y los bienes de interés cultural.
              a.anexo.mt-3(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1185_2008.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="20%" y="93%" tooltip="Ley 1273 de 2009" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 3rem 2rem 3rem;")
              h4(style="color:#12263F !important;") Ley 1273 de 2009
              p(style="color:#12263F !important;") Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado - denominado "de la protección de la información y de los datos" y se preservan integralmente los sistemas que utilicen las Tecnologías de la Información y la Comunicación, entre otras disposiciones.
              a.anexo.mt-3(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1273_2009.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="43%" y="45%" tooltip="Ley 1448 de 2011" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 3rem 2rem 3rem;")
              h4(style="color:#12263F !important;") Ley 1448 de 2011
              p(style="color:#12263F !important;") Por la cual se dictan medidas de atención, asistencia y reparación integral a las víctimas del conflicto armado interno y se dictan otras disposiciones. En el Artículo 144 Parágrafo 3° establece que para efectos de la aplicación del presente artículo se tendrá en cuenta lo dispuesto en la Ley 594 de 2000 y en el Capítulo X sobre conservación de archivos contenido en la Ley 975 de 2005.
              a.anexo.mt-3(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1448_2011.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="43%" y="61%" tooltip="Ley 1581 de 2012" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 4rem 6rem 5rem;")
              h4(style="color:#12263F !important;") Ley 1581 de 2012
              p(style="color:#12263F !important;") Por la cual se dictan disposiciones generales para la protección de datos personales.
              a.anexo.mt-3(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="43%" y="77%" tooltip="Ley 1712 de 2014" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 4rem 6rem 5rem;")
              h4(style="color:#12263F !important;") Ley 1712 de 2014
              p(style="color:#12263F !important;") Por medio de la cual se crea la Ley de transparencia y del derecho de acceso a la información pública nacional y se dictan otras disposiciones. Esta ley regula el derecho de acceso a la información pública, los procedimientos para el ejercicio y garantía del derecho y las excepciones a la publicidad de la información.
              a.anexo.mt-3(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1712_2014.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="43%" y="93%" tooltip="Ley 1915 de 2018" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 4rem 6rem 5rem;")
              h4(style="color:#12263F !important;") Ley 1915 de 2018
              p(style="color:#12263F !important;") Por la cual se modifica la Ley 23 de 1982 y se establecen otras disposiciones en materia de derecho de autor y derechos conexos.
              a.anexo.mt-3(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1915_2018.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

    .row.mt-5
      .col-md-6.mb-3
        h5.text-center(data-aos="fade-up") Decretos:
        ImagenInfograficaB.color-primario.mt-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/10.svg', alt='Decretos')

          div(x="43%" y="60%" tooltip="Decreto 1080 de 2015" numero="")
            .row.align-items-center
              .col-md-9.m-auto
                div(style="background-color: #88E0EF;padding: 2rem;border-bottom-right-radius: 26%")
                  h4(style="color:#12263F !important;") Decreto 1080 de 2015
                  p(style="color:#12263F !important;") Decreto Único del Sector Cultura. En su Título II sobre Patrimonio Archivístico compila los decretos que reglamentan la gestión documental y el Sistema Nacional de Archivos.
                  a.anexo.mt-3(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76833" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      h5.mb-0(style="color:#12263F !important;") Enlace web. 
                      p(style="color:#12263F !important;") Enlace de consulta

          div(x="73%" y="60%" tooltip="Decreto 103 de 2015" numero="")
            .row.align-items-center
              .col-md-9.m-auto
                div(style="background-color: #88E0EF;padding: 2rem;border-bottom-right-radius: 26%")
                  h4(style="color:#12263F !important;") Decreto 103 de 2015
                  p(style="color:#12263F !important;") Compilado en el Decreto 1080 de 2015, por el cual se reglamenta parcialmente la Ley 1712 de 2014 y se dictan otras disposiciones. Establece criterios generales para la implementación del programa de gestión documental y políticas de preservación, custodia digital, conservación de documentos y eliminación segura y permanente de la información.
                  a.anexo.mt-3(href="http://wsp.presidencia.gov.co/secretaria-transparencia/Prensa/2015/Documents/decreto_presidencial_103_del_20_de_enero_2015.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      h5.mb-0(style="color:#12263F !important;") Enlace web. 
                      p(style="color:#12263F !important;") Enlace de consulta

      .col-md-6.mb-3
        h5.text-center(data-aos="fade-up") Acuerdos:
        ImagenInfograficaB.color-primario.mt-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/11.svg', alt='Acuerdos')

          div(x="53%" y="31%" tooltip="Acuerdo 007 de 1994" numero="")
            .row.align-items-center
              .col-md-9.m-auto
                div(style="background-color: #88E0EF;padding: 2rem;border-bottom-right-radius: 26%")
                  h4(style="color:#12263F !important;") Acuerdo 007 de 1994
                  p(style="color:#12263F !important;") Por el cual se adopta y se expide el Reglamento General de Archivos.
                  a.anexo.mt-3(href="https://normativa.archivogeneral.gov.co/acuerdo-07-de-1994/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      h5.mb-0(style="color:#12263F !important;") Enlace web. 
                      p(style="color:#12263F !important;") Enlace de consulta

          div(x="53%" y="48%" tooltip="Acuerdo 027 de 2006" numero="")
            .row.align-items-center
              .col-md-9.m-auto
                div(style="background-color: #88E0EF;padding: 2rem;border-bottom-right-radius: 26%")
                  h4(style="color:#12263F !important;") Acuerdo 027 de 2006
                  p(style="color:#12263F !important;") Por el cual se modifica el Acuerdo No. 07 del 29 de junio de 1994. Actualizar el Reglamento General de Archivos, en su Artículo 67 y en lo correspondiente al uso del glosario.
                  a.anexo.mt-3(href=" https://normativa.archivogeneral.gov.co/acuerdo-27-de-2006/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      h5.mb-0(style="color:#12263F !important;") Enlace web. 
                      p(style="color:#12263F !important;") Enlace de consulta

          div(x="53%" y="64%" tooltip="Acuerdo 008 de 2014" numero="")
            .row.align-items-center
              .col-md-9.m-auto
                div(style="background-color: #88E0EF;padding: 2rem;border-bottom-right-radius: 26%")
                  h4(style="color:#12263F !important;") Acuerdo 008 de 2014
                  p(style="color:#12263F !important;") Por el cual se establecen las especificaciones técnicas y los requisitos para la prestación de los servicios de depósito, custodia, organización, reprografía y conservación de documentos de archivo y demás procesos de la función archivística en desarrollo de los Artículos 13° y 14° y sus parágrafos 1° y 3° de la Ley 594 de 2000.
                  a.anexo.mt-3(href=" https://normativa.archivogeneral.gov.co/acuerdo-008-de-2014/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      h5.mb-0(style="color:#12263F !important;") Enlace web. 
                      p(style="color:#12263F !important;") Enlace de consulta

          div(x="53%" y="81%" tooltip="Acuerdo 006 de 2014" numero="")
            .row.align-items-center
              .col-md-9.m-auto
                div(style="background-color: #88E0EF;padding: 2rem;border-bottom-right-radius: 26%")
                  h4(style="color:#12263F !important;") Acuerdo 006 de 2014
                  p(style="color:#12263F !important;") Por el cual se desarrollan los artículos 46, 47 y 48 del Título XI "Conservación de documentos" de la Ley 594 de 2000.
                  a.anexo.mt-3(href="https://normativa.archivogeneral.gov.co/acuerdo-006-de-2014/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      h5.mb-0(style="color:#12263F !important;") Enlace web. 
                      p(style="color:#12263F !important;") Enlace de consulta

          div(x="53%" y="95%" tooltip="Acuerdo 003 de 2015" numero="")
            .row.align-items-center
              .col-md-9.m-auto
                div(style="background-color: #88E0EF;padding: 2rem;border-bottom-right-radius: 26%")
                  h4(style="color:#12263F !important;") Acuerdo 003 de 2015
                  p(style="color:#12263F !important;") Establece los lineamientos generales para la gestión de documentos electrónicos. En su Artículo 13° establece las garantías de conservación y preservación a largo plazo; Artículo 15° la conservación de documentos datos y metadatos incluidas las firmas digitales y estampado cronológico; Artículo 16° adopción de políticas estándares que aseguren la conservación a largo plazo; Artículo 17° repositorios seguros.
                  a.anexo.mt-3(href="https://normativa.archivogeneral.gov.co/acuerdo-003-de-2015/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      h5.mb-0(style="color:#12263F !important;") Enlace web. 
                      p(style="color:#12263F !important;") Enlace de consulta

    h5.mt-5.text-center(data-aos="fade-up") Circulares

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/12.svg', alt='Circulares')

      div(x="43%" y="34%" tooltip="Circular externa 02 de 1997" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 4rem 6rem 4rem")
              h4(style="color:#12263F !important;") Circular externa 02 de 1997
              p(style="color:#12263F !important;") Parámetros a tener en cuenta para la implementación de nuevas tecnologías en los archivos públicos.
              a.anexo.mt-3(href=" https://normativa.archivogeneral.gov.co/circular-2-de-1997/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="43%" y="48%" tooltip="Circular externa 01 de 2015" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 5rem 5rem 5rem")
              h4(style="color:#12263F !important;") Circular externa 01 de 2015
              p(style="color:#12263F !important;") Da alcance a la expresión “cualquier medio técnico que garantice su reproducción exacta”.
              a.anexo.mt-3(href="https://normativa.archivogeneral.gov.co/circular-externa-001-de-2015/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="43%" y="61%" tooltip="Circular externa 02 de 2015" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 5rem 5rem 5rem")
              h4(style="color:#12263F !important;") Circular externa 02 de 2015
              p(style="color:#12263F !important;") Criterios para la entrega de archivos en cualquier soporte, con ocasión del cambio de administración de las entidades territoriales.
              a.anexo.mt-3(href="https://normativa.archivogeneral.gov.co/circular-externa-002-de-2015/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

      div(x="43%" y="73%" tooltip="Circular externa 03 de 2015" numero="")
        .row.align-items-center
          .col-md-5.m-auto
            div.contLey(style="padding:5rem 5rem 5rem 5rem")
              h4(style="color:#12263F !important;") Circular externa 03 de 2015
              p(style="color:#12263F !important;") Directrices para la elaboración de las tablas de retención documental.
              a.anexo.mt-3(href="https://normativa.archivogeneral.gov.co/circular-externa-003-de-2015/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0(style="color:#12263F !important;") Enlace web. 
                  p(style="color:#12263F !important;") Enlace de consulta

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1. Ley de protección de datos

    .row
      .col-md-7
        p(data-aos="fade-up") Identifica y salvaguarda el derecho que tienen todas las personas a comprender, actualizar y modificar las informaciones que se hayan obtenido sobre ella en bases de datos o archivos, que sean dispuestos de tratamientos por entidades de naturaleza pública o privada.
        p.mt-4(data-aos="fade-up") Los datos personales son toda la información que se reúne de una persona y que autoriza su identificación; un ejemplo de esto pueden ser los datos que se encuentran en los registros civiles, documentos de identificación, experiencias laborales, expedientes, entre otras.
        .bloque-texto-d.color-secundario.p-3(style="border:none;")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="display:contents" data-aos="fade-left")
            p.text-regular &nbsp;&nbsp;&nbsp;&nbsp;Los datos personales tienen la información necesaria para que las personas puedan relacionarse con diferentes organizaciones para que sean individualizadas del resto de la sociedad, creando flujos de información, cooperando con el crecimiento económico y el mejoramiento de bienes y servicios.
          .bloque-texto-d__autor 
            .h5.mb-0(style="display:contents") (SIC, 2021).
            i.fas.fa-quote-right(data-aos="fade-left")
      .col-md-5
        figure
          img(src="@/assets/curso/tema1/13.svg" data-aos="fade-left")

    h3.mt-5(data-aos="fade-up") Tipos de datos.

    p(data-aos="fade-up") La organización en la protección de datos establece las tipologías de datos, según el mayor o menor grado de aceptabilidad de divulgación, tal como se muestra en la siguiente figura:

    p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #5C22C3 solid;margin-left") &nbsp;&nbsp;Figura 1.  Tipos de datos

    .row.mt-4
      .col-md-3.mb-3(style="padding:0px;")
        div(style="background-color:#88E0EF")
          .p-5
            h5.text-center(data-aos="fade-up" style="border-right:2px #592FE6 solid;") Dato público
        .p-5.text-center(style="background-color:#F6D7DC;border-bottom-right-radius:25px;border-bottom-left-radius:10px;border-right:17px white solid;min-height:400px;")
          img(src="@/assets/curso/tema1/14.svg" style="max-width:150px;display:inline;margin-top: -103px;")
          p.mt-2.text-center Es el dato que la ley o la constitución política determina como tal, así como todos aquellos que no sean semiprivados o privados.
      .col-md-3.mb-3(style="padding:0px;")
        div(style="background-color:#88E0EF")
          .p-5
            h5.text-center(data-aos="fade-up" style="border-right:2px #592FE6 solid;") Dato semiprivado
        .p-5.text-center(style="background-color:#F6D7DC;border-bottom-right-radius:25px;border-bottom-left-radius:10px;border-right:17px white solid;min-height:400px;")
          img(src="@/assets/curso/tema1/15.svg" style="max-width:150px;display:inline;margin-top: -103px;")
          p.mt-2.text-center Es el dato que no tiene naturaleza íntima, reservada, ni pública y cuyo conocimiento o divulgación puede interesar no solo a su titular sino a cierto sector o grupo de personas.
      .col-md-3.mb-3(style="padding:0px;")
        div(style="background-color:#88E0EF")
          .p-5
            h5.text-center(data-aos="fade-up" style="border-right:2px #592FE6 solid;") Dato privado
        .p-5.text-center(style="background-color:#F6D7DC;border-bottom-right-radius:25px;border-bottom-left-radius:10px;border-right:17px white solid;min-height:400px;")
          img(src="@/assets/curso/tema1/16.svg" style="max-width:150px;display:inline;margin-top: -103px;")
          p.mt-2.text-center Es el dato que por su naturaleza íntima o reservada solo es relevante para el titular de la información.
      .col-md-3.mb-3(style="padding:0px;")
        div(style="background-color:#88E0EF")
          .p-5
            h5.text-center(data-aos="fade-up" style="border-right:2px #592FE6 solid;") Dato sensible
        .p-5.text-center(style="background-color:#F6D7DC;border-bottom-right-radius:25px;border-bottom-left-radius:10px;min-height:400px;")
          img(src="@/assets/curso/tema1/17.svg" style="max-width:150px;display:inline;margin-top: -103px;")
          p.mt-2.text-center Es el dato que afecta la intimidad del titular o cuyo uso indebido puede generar su discriminación.

    figcaption(style="background-color:#88E0EF") Nota. Tomados de SIC (2021).
    
    h3.mt-5(data-aos="fade-up") Ley estatutaria 1581 de 2012.

    p.mt-3(data-aos="fade-up") A continuación, podrá ver a través de un video lo que más se destaca de esta ley:

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-3.text-center(data-aos="fade-up") Para mayor conocimiento de la Ley estatutaria 1581 de 2012 consulte el siguiente enlace:

    a.anexo.mt-4.col-md-5.m-auto(href="https://www.google.com/url?q=http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html&sa=D&source=docs&ust=1637802397578000&usg=AOvVaw3LoRjZOj71LwiYlWedvEyy" target="_blank")
      .anexo__icono
        img(src="@/assets/template/icono-link.svg")
      .anexo__texto
        h5 Enlace web. 
        p Ley estatutaria 1581 de 2012

    p.mt-4(data-aos="fade-up") A continuación, se menciona a cuáles bases no se aplica la ley de protección de datos:

    .row.mt-5
      .col-lg-4.mb-3
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/18.svg' alt='')
          .tarjeta.tarjeta--azul(style="background-color:#88E0EF")
            .p-4
              p A las bases de datos o archivos mantenidos en un ámbito exclusivamente personal o doméstico.
      .col-lg-4.mb-3
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/19.svg' alt='')
          .tarjeta.tarjeta--azul(style="background-color:#88E0EF")
            .p-4
              p A las que tengan por finalidad la seguridad y defensa nacional, la prevención, detección, monitoreo y control del lavado de activos y el financiamiento del terrorismo.
      .col-lg-4.mb-3
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/20.svg' alt='')
          .tarjeta.tarjeta--azul(style="background-color:#88E0EF")
            .p-4
              p A las que tengan como fin y contengan información de inteligencia y contrainteligencia.

    .row.mt-4.m-auto.col-md-9
      .col-lg-6.mb-3
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/21.svg' alt='')
          .tarjeta.tarjeta--azul(style="background-color:#88E0EF")
            .p-4
              p A las que contengan información periodística y otros contenidos territoriales.
      .col-lg-6.mb-3
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/22.svg' alt='')
          .tarjeta.tarjeta--azul(style="background-color:#88E0EF")
            .p-4
              p A las bases de datos con información financiera, crediticia, comercial y de servicios, y de los censos de población y vivienda.

    figcaption.mt-2(data-aos="fade-up") Nota. Tomadas de SIC (2021).

    h3.mt-5(data-aos="fade-up") Política de tratamiento de datos. 

    .col-lg-10.m-auto.mt-3
      .cajon.color-secundario.p-4.mb-4
        .h5 Definición:
        p La presente política tiene como objeto dar la información necesaria y suficiente a los diferentes grupos de interés, así como establecer los lineamientos que garanticen la protección de los datos personales que son objeto de tratamiento de datos personales, a través de los procedimientos de la Superintendencia de Industria y Comercio, para de esta forma dar cumplimiento a la ley, políticas y procedimientos de atención de derechos de los titulares, criterios de recolección, almacenamiento, uso, circulación y supresión que se dará a los datos personales (SIC, 2021).

    .bloque-texto-a.color-primario.color2.p-4.p-md-5.mt-5.col-md-9.m-auto 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p La Política de tratamiento y protección de datos personales y su implementación en las organizaciones legalmente constituidas en el país es responsabilidad de cada una de ellas, se debe aplicar a todas las bases de datos y/o archivos que contengan datos personales y que sean objeto de tratamiento por la misma empresa, considerado como responsable y/o encargado del tratamiento de los datos personales.



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Artículo 12. Plan de conservación documental',
        texto:
          'Es el conjunto de acciones a corto, mediano y largo plazo que tienen como fin implementar los programas, procesos y procedimientos, tendientes a mantener las características físicas y funcionales de los documentos de archivo, conservando sus características de autenticidad, integridad, inalterabilidad, originalidad, fiabilidad y disponibilidad a través del tiempo.',
        imagen: require('@/assets/curso/tema1/3.svg'),
      },
      {
        titulo: 'Artículo 13. Niveles de intervención',
        texto:
          'Para los documentos de archivo existen dos niveles de intervención: conservación preventiva y conservación – restauración.<br><br><ol class="lista-ol--cuadro"><li><div class="lista-ol--cuadro__vineta"><span>1</span></div> Conservación preventiva: hace referencia a los procesos y procedimientos de los programas de conservación preventiva referidos en el Artículo 6° del presente Acuerdo y a las intervenciones menores que buscan detener o prevenir el deterioro de los documentos, sin generar alteraciones al soporte y/o a la información.</li><li><div class="lista-ol--cuadro__vineta"><span>2</span></div> Conservación – restauración: hace referencia a los procesos y procedimientos que buscan corregir el deterioro, potenciando y restituyendo los valores históricos y estéticos de la documentación.</li></ol>',
        imagen: require('@/assets/curso/tema1/4.svg'),
      },
      {
        titulo: 'Artículo 18. Preservación a largo plazo',
        texto:
          'Es el conjunto de acciones a corto, mediano y largo plazo que tienen como fin implementar los programas, estrategias, procesos y procedimientos, tendientes a asegurar la preservación a largo plazo de los documentos electrónicos de archivo, manteniendo sus características de autenticidad, integridad, confidencialidad, inalterabilidad, fiabilidad, interpretación, comprensión y disponibilidad a través del tiempo.',
        imagen: require('@/assets/curso/tema1/5.svg'),
      },
      {
        titulo: 'Artículo 23. Procesos y procedimientos a largo plazo',
        texto:
          'El plan de preservación digital a largo plazo debe incluir todos los procesos y procedimientos utilizados para la preservación de los documentos digitales y/o documentos electrónicos de archivo, de acuerdo con la política general de gestión documental, los instrumentos archivísticos para la gestión documental y otros sistemas administrativos y de gestión, de conformidad con las normas técnicas y estándares internacionales vigentes, adoptados por la entidad, de tal manera que se garantice la cadena de preservación de los documentos electrónicos de archivo a lo largo del ciclo vital de los documentos.',
        imagen: require('@/assets/curso/tema1/6.svg'),
      },
      {
        titulo: 'Los procesos y procedimientos deben tener en cuenta:',
        texto:
          '<ol class="lista-ol--cuadro"><li><div class="lista-ol--cuadro__vineta"><span>1</span></div> Los documentos digitalizados y nativos digitales, desde el proceso de planeación y valoración de la gestión documental.</li><li><div class="lista-ol--cuadro__vineta"><span>2</span></div> El cronograma de transferencias y eliminación de documentos de conformidad con la TRD o TVD de la entidad.</li><li><div class="lista-ol--cuadro__vineta"><span>3</span></div> Los formatos y medios o soportes de almacenamiento de los documentos digitales.</li><li><div class="lista-ol--cuadro__vineta"><span>4</span></div> Los requisitos de los metadatos asociados para documentos digitales.</li><li><div class="lista-ol--cuadro__vineta"><span>5</span></div> Las acciones de preservación necesarias para garantizar la fiabilidad y autenticidad de los documentos digitales.</li><li><div class="lista-ol--cuadro__vineta"><span>6</span></div> Los requisitos legales y reglamentarios específicos para los documentos digitales en cada jurisdicción.</li><li><div class="lista-ol--cuadro__vineta"><span>7</span></div> Los riesgos asociados a la obsolescencia tecnológica.</li><li><div class="lista-ol--cuadro__vineta"><span>8</span></div> Los requisitos de auditoría.</li><li><div class="lista-ol--cuadro__vineta"><span>9</span></div> La vigilancia tecnológica.</li></ol>',
        imagen: require('@/assets/curso/tema1/7.svg'),
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
</style>
