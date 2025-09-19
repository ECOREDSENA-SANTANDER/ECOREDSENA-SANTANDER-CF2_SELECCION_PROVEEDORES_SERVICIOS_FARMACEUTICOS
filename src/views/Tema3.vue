<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación técnica y categorización de proveedores farmacéuticos 

    .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de fichas técnicas constituye una herramienta esencial en la evaluación y selección de productos dentro del servicio farmacéutico, ya que permite asegurar la calidad, seguridad y eficacia de los medicamentos ofrecidos por los proveedores. Las fichas técnicas son documentos normativos y descriptivos que sintetizan las características clave de un producto farmacéutico, respaldadas por evidencia científica y regulatoria. En el contexto colombiano, su correcta elaboración y análisis se encuentra alineado con los lineamientos del INVIMA, la Resolución 1403 de 2007 y las buenas prácticas de contratación pública o privada en salud.
          br
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg2.py-2.w-card-text Contenido mínimo de una ficha técnica
    p Una ficha técnica completa y válida debe incluir la siguiente información:


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-3.col-8.col-md-6
        img.mb-3(src='@/assets/curso/Tema3/img02.png', alt='')
      .col-lg-9
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/001.svg' alt='')
            h4.text-center.bg9.p-1.text-white Nombre genérico
            p.text-center Principio activo del medicamento, reconocido internacionalmente, que define su acción terapéutica.

          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/002.svg' alt='')
            h4.text-center.bg9.p-1.text-white Nombre comercial
            p.text-center Marca asignada por el laboratorio fabricante.
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/003.svg' alt='')
            h4.text-center.bg9.p-1.text-white Forma farmacéutica
            p.text-center Presentación del medicamento (tableta, solución, inyectable, ungüento, etc.).
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/004.svg' alt='')
            h4.text-center.bg9.p-1.text-white Concentración o dosis
            p.text-center Cantidad de principio activo por unidad (mg, mL, UI, etc.).
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/005.svg' alt='')
            h4.text-center.bg9.p-1.text-white Vía de administración
            p.text-center Oral, intravenosa, tópica, oftálmica, intramuscular, etc.
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/006.svg' alt='')
            h4.text-center.bg9.p-1.text-white Condiciones de almacenamiento
            p.text-center Especificaciones técnicas de conservación (temperatura, humedad, protección de la luz).
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/007.svg' alt='')
            h4.text-center.bg9.p-1.text-white Vida útil / fecha de vencimiento
            p.text-center Tiempo máximo de uso garantizado bajo condiciones óptimas de almacenamiento.
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/008.svg' alt='')
            h4.text-center.bg9.p-1.text-white Número de lote
            p.text-center Código que permite rastrear la producción del medicamento.
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/009.svg' alt='')
            h4.text-center.bg9.p-1.text-white Registro sanitario INVIMA
            p.text-center Número oficial que certifica que el producto ha sido evaluado y autorizado en Colombia.
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/010.svg' alt='')
            h4.text-center.bg9.p-1.text-white Fabricante y país de origen
            p.text-center Entidad responsable del producto, útil para verificar trazabilidad y cumplimiento internacional.
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/011.svg' alt='')
            h4.text-center.bg9.p-1.text-white Indicaciones terapéuticas y contraindicaciones (cuando aplica)
            p.text-center Usos clínicos aprobados y restricciones de uso.
          
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema3/012.svg' alt='')
            h4.text-center.bg9.p-1.text-white Datos de seguridad
            p.text-center Advertencias, reacciones adversas, toxicidad, precauciones especiales.

   

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-7
        p.mb-4 Buenas prácticas en el uso de fichas técnicas: 
        ul.lista-ul--color
          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Solicitar fichas técnicas actualizadas directamente al proveedor.

          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Verificar que la información coincida con el empaque y rotulado del producto.

          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Confirmar que el registro sanitario esté vigente consultando en la plataforma del INVIMA.

          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Almacenar y clasificar las fichas técnicas como parte de la documentación contractual y técnica del servicio farmacéutico.
         
        .row.justify-content-center.align-items-center.bg1.p-4.mb-4
          .col-lg-12
            p El análisis de fichas técnicas no solo es un procedimiento técnico, sino un pilar de la gestión responsable, segura y eficiente de medicamentos e insumos en el sistema de salud colombiano.
      .col-lg-5.col-md-9.col-10
        img(src="@/assets/curso/Tema3/img03.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg2.py-2.w-card-text Importancia del análisis en la evaluación de proveedores 

    p.mb-4 El análisis de fichas técnicas permite a las instituciones farmacéuticas tomar decisiones informadas al comparar distintos productos ofertados. Algunos beneficios clave incluyen:

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Verificación del cumplimiento normativo")
              .col-md-12.mb-4.mb-md-0
                p La ficha técnica actúa como respaldo documental del cumplimiento con los requisitos sanitarios exigidos por el INVIMA y la legislación vigente.
            .row(titulo="Determinación de la equivalencia terapéutica")
              .col-md-12.mb-4.mb-md-0
                p Permite comparar productos con el mismo principio activo y vía de administración, identificando diferencias en formulación, absorción, excipientes o condiciones de conservación que puedan afectar su eficacia.
            .row(titulo="Evaluación de la idoneidad técnica")
              .col-md-12.mb-4.mb-md-0
                p Facilita el análisis de aspectos como la concentración, estabilidad del producto, compatibilidad con otros tratamientos o requerimientos logísticos (por ejemplo, cadena de frío).
            .row(titulo="Apoyo en la toma de decisiones contractuales")
              .col-md-12.mb-4.mb-md-0
                p Las fichas técnicas se convierten en insumos para construir matrices de evaluación técnica, definir criterios de puntuación y justificar la selección de un proveedor.
            .row(titulo="Fortalecimiento de la trazabilidad")
              .col-md-12.mb-4.mb-md-0
                p En caso de eventos adversos, devoluciones o auditorías, la ficha técnica permite rastrear las características del producto y sus condiciones de entrega.
        .col-lg-4.col-8.col-md-6
          img(src='@/assets/curso/Tema3/img04.png', alt='')

    .row.justify-content-center.align-items-end.mb-4(data-aos="zoom-in-left")
      .col-lg-2.col-6
        img(src='@/assets/curso/Tema3/invima.svg', alt='')
      .col-lg-10
        p Validar registro sanitario e inscripción del proveedor: todo producto farmacéutico comercializado en Colombia debe contar con un registro sanitario vigente emitido por el INVIMA. Este registro garantiza que el producto ha sido evaluado en cuanto a calidad, seguridad y eficacia. Su validación se hace revisando el código INVIMA en el envase y verificándolo en la plataforma oficial.

    .row.mb-0
      .col-lg-5.py-1
        p.bg2.p-4 La validación del registro sanitario INVIMA es un procedimiento fundamental dentro del proceso de  evaluación y adquisición de productos farmacéuticos. Este registro constituye la autorización oficial otorgada por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA) para la fabricación, importación, comercialización y distribución de un producto en Colombia, y garantiza que el medicamento o dispositivo médico ha sido evaluado en términos de calidad, seguridad y eficacia.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/Tema3/img05.svg', alt='')
      .col-lg-4
        .row.mb-3
          .col-lg-3.mb-2.d-none.d-lg-block
            img(src='@/assets/curso/Tema3/farmaceutico.svg', alt='')
          .col-lg-12
            p El primer paso en la validación consiste en verificar que el número de registro sanitario esté impreso de forma visible y legible en el envase del producto, junto con otros datos como el lote, la fecha de vencimiento y el nombre del fabricante. Este número, compuesto por una combinación alfanumérica (por ejemplo, INVIMA 2022M-0001234-R1), debe coincidir exactamente con el producto que se está evaluando.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/Tema3/img05.png', alt='')

    p.mb-4 Una vez identificado el número en el empaque, se procede a validar su autenticidad a través de la plataforma en línea del INVIMA. Este proceso incluye:

    .row.mb-4(data-aos="zoom-in-left")
      .col-lg-7
        ul.lista-ul--color
          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Acceder al portal oficial del INVIMA: <a class="enlace-azul" href="https://consultaregistro.invima.gov.co" target="_blank" rel="noopener noreferrer"> https://consultaregistro.invima.gov.co</a>.  
          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Seleccionar el tipo de producto (medicamento, suplemento dietario, cosmético, dispositivo médico, etc.).
          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Ingresar el número de registro o el nombre del producto en el buscador.
          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Verificar que el producto esté vigente, que los datos coincidan (titular, fabricante, concentración, forma farmacéutica) y que no se encuentre vencido, suspendido o cancelado. 
        p Este procedimiento no solo garantiza la legalidad del producto, sino que también protege a los usuarios y pacientes frente al riesgo de medicamentos falsificados, vencidos o no autorizados, lo cual es especialmente relevante en instituciones de salud pública y en contextos de contratación estatal.
      .col-lg-5.col-8.col-md-6
        img(src='@/assets/curso/Tema3/img06.svg', alt='')



    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.col-10.mb-3.col-md-9
        img(src='@/assets/curso/Tema3/img07.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-2.mb-3.col-4.col-md-2
            img(src='@/assets/curso/Tema3/img08.svg', alt='')
          .col-lg-10
            p Además, esta verificación es obligatoria en auditorías internas y externas, como parte de los requisitos de habilitación de servicios farmacéuticos (según la Resolución 1403 de 2007) y de los estándares de seguridad del paciente definidos por el Sistema Obligatorio de Garantía de la Calidad en Salud (SOGCS).

        p Entonces, validar el registro sanitario del INVIMA no es un trámite administrativo aislado, sino una acción crítica de control de calidad y responsabilidad sanitaria, que debe realizarse de forma rigurosa antes de aceptar cualquier producto farmacéutico dentro del sistema de salud.
        p Por otro lado, la inscripción del proveedor debe comprobarse mediante su registro ante Cámara de Comercio, Dirección de Impuestos y Aduanas Nacionales (DIAN) y, si aplica, ante plataformas de contratación pública como SECOP. Solo proveedores debidamente inscritos pueden ser considerados en procesos formales de contratación.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5
        p Emplear listas de verificación y comparación de variables: las listas de verificación son herramientas prácticas que permiten validar si un proveedor o producto cumple con requisitos establecidos. Estas listas pueden contener variables como:
        ul.lista-ul--color
          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Registro sanitario vigente.


          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Certificados de BPA o BPM.


          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Experiencia contractual.
          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Garantías técnicas y logísticas.

          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Soporte postventa.
          li.d-flex.mb-2
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Documentación completa (fichas técnicas, hojas de seguridad).
      .col-lg-3.col-8.mb-3.col-md-5
        img(src='@/assets/curso/Tema3/img09.png', alt='')
      .col-lg-4
        p Cada variable puede marcarse como cumplida (✓) o no cumplida (✗). También pueden asignarse escalas de puntuación para comparar entre proveedores en una matriz. Esto ayuda a tomar decisiones basadas en evidencia.
        p Emplear escala de valoración de variables: una escala de valoración permite calificar el desempeño o cumplimiento de un proveedor frente a criterios definidos. En contextos farmacéuticos colombianos se usan escalas numéricas (0 a 5), porcentuales (0 % a 100 %) o cualitativas (bajo, medio, alto).

    p.mb-4 Por ejemplo, para la variable 'calidad del producto' se puede asignar:
    .row.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-left")
        .col-lg-4.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema3/1.svg' alt='')
            .tarjeta.bg1
              .p-3
                p #[b 5 puntos:] si cumple con todos los estándares normativos y técnicos.
        .col-lg-4.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema3/2.svg' alt='')
            .tarjeta.bg1
              .p-3
                p #[b 3 puntos:] si cumple parcialmente o con observaciones menores.
        .col-lg-4.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema3/3.svg' alt='')
            .tarjeta.bg1
              .p-3
                p #[b 0 puntos:] si no cumple o presenta incumplimientos graves.


    p.mb-4 Estas valoraciones se ponderan según el peso de cada variable en el proceso de evaluación.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        img(src='@/assets/curso/Tema3/img10.png' alt='')

    p.mb-3 Seleccionar matriz de riesgo: una matriz de riesgo es una herramienta para identificar y clasificar riesgos asociados a cada proveedor. Se evalúan variables como cumplimiento normativo, tiempos de entrega, calidad del producto, y respuesta ante emergencias.

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.col-10.mb-3.col-md-7
        img(src='@/assets/curso/Tema3/img11.png' alt='')
      .col-lg-7
        p Los niveles de riesgo pueden clasificarse en bajo, medio y alto, y se representan en matrices de doble entrada con colores (verde, amarillo, rojo). Esto permite identificar proveedores críticos y priorizar acciones de mejora o sustitución.
        p Calcular puntajes de variables de cumplimiento: el cálculo de puntajes consiste en sumar las calificaciones asignadas a cada variable evaluada para obtener un puntaje total por proveedor. Se puede usar una fórmula ponderada donde cada variable tiene un peso.
        h5 Ejemplo:
        .row
          .col-lg-4
            ul.lista-ul--color
              li.d-flex.mb-2
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Calidad (30 %).

              li.d-flex.mb-2
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Precio (20 %).
          .col-lg-4
            ul.lista-ul--color
              li.d-flex.mb-2
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Logística (25 %).

              li.d-flex.mb-2
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Documentación (25 %).
        p Se multiplican las puntuaciones por su peso y se suman. El resultado se compara con otros proveedores para seleccionar el más adecuado.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg2.py-2.w-card-text Relacionar criterios de evaluación con la información obtenida

         
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p La evaluación técnica debe relacionar de forma lógica cada criterio con la evidencia recolectada (documentos, registros, referencias). Esto asegura que las decisiones sean objetivas y verificables en auditorías.
        p.bg1.p-4 Por ejemplo, si se evalúa cumplimiento en BPA, debe adjuntarse copia del certificado emitido por INVIMA. Esta práctica fortalece la trazabilidad y reduce el riesgo de errores o conflictos legales.
        p Utilizar criterios de valoración en la información recopilada: los criterios de valoración permiten transformar información cualitativa (opiniones, experiencias, documentación) en datos comparables. Se establecen parámetros y escalas para cada criterio (ej. calidad técnica, soporte, tiempos).
      .col-lg-5.col-10.mb-3.col-md-7
        img(src='@/assets/curso/Tema3/img12.png' alt='')

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-5.col-9.col-md-6
        img(src='@/assets/curso/Tema3/img13.svg' alt='')
      .col-lg-7
        p Esto facilita convertir información diversa en resultados tabulados que pueden ser comparados entre proveedores de manera objetiva.
        p Interpretar resultados de valoración: interpretar los resultados implica analizar los puntajes obtenidos por cada proveedor y entender las causas de diferencias. Por ejemplo, un proveedor puede tener buen precio, pero bajo cumplimiento normativo, lo que disminuye su puntaje global.
        p Este análisis permite justificar por qué se escoge a un proveedor sobre otro, bajo criterios técnicos y no solos económicos.

    p.mb-4 Una vez evaluados los proveedores, se pueden categorizar en grupos según su desempeño:
    
    .row.mb-4
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img.imgavatar(src='@/assets/curso/Tema3/01.svg' alt='')
          .tarjeta.bg1
            .p-4
              h4.text-center A (excelente)
              p.mb-0.text-center Cumplen con altos estándares en todas las variables.

      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img.imgavatar(src='@/assets/curso/Tema3/02.svg' alt='')
          .tarjeta.bg1
            .p-4
              h4.text-center B (aceptable)
              p.mb-0.text-center Cumplen en lo esencial, pero tienen oportunidades de mejora.

      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img.imgavatar(src='@/assets/curso/Tema3/03.svg' alt='')
          .tarjeta.bg1
            .p-4
              h4.text-center C (no recomendable)
              p.mb-0.text-center.px-5 No cumplen requisitos críticos.


    p Esta clasificación sirve para establecer relaciones a largo plazo, definir planes de mejora o excluir proveedores que representen riesgos.
    p.mb-4 Estas prácticas se alinean con las Resoluciones 1403 de 2007, 1557 de 2023 y los principios de calidad en la contratación de servicios en salud.

    .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/img04.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.txtblue Evaluación de proveedores
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=sBZgU1RlQX8')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-video































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
