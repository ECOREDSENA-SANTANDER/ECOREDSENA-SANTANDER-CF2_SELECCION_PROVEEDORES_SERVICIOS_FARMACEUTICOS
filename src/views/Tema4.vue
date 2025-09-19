<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contratación en servicios farmacéuticos: tipos, normativa y cláusulas 

    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        img.img-width.d-none.d-lg-block(src='@/assets/curso/Tema4/01.svg', alt='')
        br
        p.mb-0 En el contexto farmacéutico colombiano, los contratos con proveedores adoptan distintas formas jurídicas según el objeto, valor y modalidad de contratación. Estos contratos son instrumentos clave para regular las relaciones entre Instituciones Prestadoras de Servicios de Salud (IPS, ESE), Entidades Promotoras de Salud (EPS), operadores logísticos, distribuidores y fabricantes de productos farmacéuticos. Su adecuada estructuración permite garantizar la transparencia, el cumplimiento normativo, la eficiencia en la adquisición de insumos y la protección de los recursos públicos o privados.
          

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg2.py-2.w-card-text Principales tipos de contratos en el sector farmacéutico colombiano


    .tarjeta.bg6.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-md-12.mb-4.mb-md-0.col-lg-6
            h4 1. Contrato de suministro
            p Es el más común en el ámbito de la salud. Se utiliza para adquirir de forma continua o periódica medicamentos, dispositivos médicos e insumos hospitalarios. Permite establecer cronogramas de entrega, volúmenes aproximados, condiciones técnicas y formas de pago. Es esencial para garantizar el abastecimiento regular en hospitales, centros de salud y programas de atención primaria.
            h5 Características destacadas:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Incluye cláusulas de calidad, trazabilidad, tiempos de entrega y penalidades.
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Puede estar respaldado por pólizas de cumplimiento y calidad.
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Aplica tanto en compras directas como en procesos de licitación o selección abreviada.
          .col-md-6
            figure
              img(src='@/assets/curso/Tema4/img02.png', alt='')
        .row.justify-content-center.p-4
          .col-md-12.mb-4.mb-md-0.col-lg-6
            h4 2. Contrato de prestación de servicios 
            p Se emplea cuando el proveedor realiza actividades adicionales al suministro, tales como logística de distribución, almacenamiento, dispensación en sitio, farmacovigilancia o validación de fórmulas médicas.
            h5 Ejemplos:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Contratos con operadores logísticos encargados del almacenamiento y distribución.

              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Administración de puntos de entrega ambulatoria para medicamentos.
             
          .col-md-6
            figure
              img(src='@/assets/curso/Tema4/img03.png', alt='')
        .row.justify-content-center.p-4
          .col-md-12.mb-4.mb-md-0.col-lg-6
            h4 3. Contrato interadministrativo 
            p Se celebra exclusivamente entre entidades públicas. Es habitual cuando una ESE contrata con una central de compras como la Cooperativa de Hospitales de Antioquia (COHAN) para adquirir medicamentos en mejores condiciones, gracias a economías de escala. No requiere licitación, pero sí ajustarse a los principios de contratación estatal.
          .col-md-6
            figure
              img(src='@/assets/curso/Tema4/img04.png', alt='')
        .row.justify-content-center.p-4
          .col-md-12.mb-4.mb-md-0.col-lg-6
            h4 4. Convenio marco
            p Contrato colectivo licitado previamente por una entidad como Colombia Compra Eficiente. Permite a otras entidades públicas adquirir productos farmacéuticos bajo condiciones ya establecidas.
            h5 Ventajas:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Reducción de tiempos administrativos.
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Términos predefinidos de calidad, precio y entrega.
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro Mayor control y transparencia en el proceso.
          .col-md-6
            figure
              img(src='@/assets/curso/Tema4/img05.png', alt='')
      

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg2.py-2.w-card-text Importancia de seleccionar el tipo de contrato adecuado


    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-4
        p La elección del contrato debe ajustarse a:
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro El objeto de la contratación (productos y/o servicios).
          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro El régimen jurídico (público o privado).
          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro El valor estimado.
          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro La naturaleza del proveedor (entidad pública o privada).
      .col-lg-4.bg5.mb-2
        p.p-3 Cada tipo implica diferentes formas de pago, cláusulas, garantías, tiempos de ejecución y responsabilidades contractuales. Además, en el marco del Sistema General de Seguridad Social en Salud (SGSSS), los contratos deben alinearse con las disposiciones de la Ley 80 de 1993, Ley 1150 de 2007, Decreto 1082 de 2015, y la Resolución 1403 de 2007 sobre servicios farmacéuticos.
      .col-lg-4
        p Una correcta estructuración contractual:
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Minimiza riesgos legales.

          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Favorece el cumplimiento.

          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Protege al usuario final.

          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Facilita la auditoría, inspección y control por parte de entes como la Superintendencia Nacional de Salud y la Contraloría General de la República.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg2.py-2.w-card-text Analizar normativa de contratación


    p.mb-4 La contratación en el sector salud está regida por normas que aseguran la transparencia, eficiencia y legalidad del proceso. Algunas de las principales son:
    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-7
        .row.mb-5
          .col-lg-2.col-8.col-md-3
            img.mb-3(src="@/assets/curso/Tema4/img07.svg")
          .col-lg-10
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro #[b Ley 80 de 1993 y Ley 1150 de 2007:] contratación estatal.


              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro #[b Decreto 1082 de 2015:] reglamenta la contratación pública.


              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro #[b Resolución 1403 de 2007:] regula los servicios farmacéuticos.


              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro #[b Ley 1438 de 2011:] reforma del SGSSS.
              li.d-flex
                i.fas.fa-pildora.align-self-start.me-2
                p.mb-0.text-negro #[b SECOP:] plataforma obligatoria para la publicación de procesos estatales.

          p Diseñar cláusulas de contratación en servicios farmacéuticos: una adecuada redacción contractual asegura la legalidad y el cumplimiento de las obligaciones pactadas. Todo contrato debe contener cláusulas claras, verificables y alineadas con la normativa vigente.
      .col-lg-5.col-10
        img(src='@/assets/curso/Tema4/img06.png', alt='')




    p Cláusulas fundamentales:
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-3.col-9.col-md-6
        img.mb-3(src='@/assets/curso/Tema4/img08.png', alt='')
      .col-lg-9
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/001.svg' alt='')
            p.text-center #[b Objeto del contrato:] define claramente el bien o servicio contratado (medicamentos, dispositivos, logística, etc.), sus características, volumen, periodicidad y alcance.

          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/002.svg' alt='')
            p.text-center #[b Obligaciones de las partes:] responsabilidades del proveedor (entrega, cumplimiento normativo, soporte documental) y del contratante (pagos, supervisión, recepción conforme).

          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/003.svg' alt='')
            p.text-center #[b Plazos de entrega y cumplimiento:] establece tiempos máximos y frecuencias de entrega, reposición o prestación del servicio.

          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/004.svg' alt='')
            p.text-center #[b Condiciones de pago y descuentos:] detalla montos, formas, plazos de pago, y beneficios por pronto pago.
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/005.svg' alt='')
            p.text-center #[b Garantías:] exigencia de pólizas de cumplimiento, calidad del producto, estabilidad de precios o cumplimiento técnico.
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/006.svg' alt='')
            p.text-center #[b Penalidades:] sanciones aplicables por incumplimientos, demoras o fallas técnicas.
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/007.svg' alt='')
            p.text-center #[b Terminación anticipada:] condiciones bajo las cuales se puede finalizar el contrato (incumplimiento, fuerza mayor, reorganización institucional).
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/008.svg' alt='')
            p.text-center #[b Resolución de conflictos:] define los mecanismos de conciliación, arbitraje o jurisdicción aplicable.
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/009.svg' alt='')
            p.text-center #[b Confidencialidad y protección de datos:] cláusulas ajustadas a la #[b Ley 1581 de 2012] #[em (Habeas Data)].
          .tarjeta.bg7.p-4
            .row.justify-content-center.mb-3
              .col-5.col-lg-5.col-md-3
                img(src='@/assets/curso/Tema4/010.svg' alt='')
            p.text-center #[b Criterios ambientales (cuando apliquen):] compromisos de sostenibilidad, disposición de residuos, logística inversa, etc. 

    .row.justify-content-center.mb-1(data-aos="zoom-in-left")
      .col-lg-9.bg5.p-4.my-5.mb-5
        p.p-4 #[b Contratación entre privados:] en el ámbito privado no se exige licitación pública ni uso de SECOP. Sin embargo, los contratos deben ser igual de rigurosos en lo técnico, legal y sanitario. La claridad de cláusulas, el cumplimiento normativo y la formalización por escrito son imprescindibles.
      .col-lg-3.col-9.col-md-5
        img(src='@/assets/curso/Tema4/img09.svg', alt='')


    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/Tema4/img10.svg', alt='')
      .col-lg-4
        .row
          .col-lg-3.mb-3
            img.d-none.d-lg-block(src='@/assets/curso/Tema4/img11.svg', alt='')
          .col-lg-12
            p #[b Principio de libertad contractual:] en el sector privado rige la autonomía de la voluntad, según el Código Civil (art. 1602). Las partes pueden pactar libremente, siempre que no vulneren normas legales ni el orden público.
      .col-lg-5
        h5 Normativa aplicable:
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Código Civil y de Comercio.

          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Resolución 1403 de 2007.
          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Ley 100 de 1993 y Ley 1438 de 2011 (si prestan servicios del SGSSS).
          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Normativa INVIMA.

          li.d-flex
            i.fas.fa-pildora.align-self-start.me-2
            p.mb-0.text-negro Ley 1581 de 2012 (protección de datos personales).

    h5.mb-4 Cláusulas recomendadas incluso entre privados:

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema4/ico1.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Objeto del contrato.
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema4/ico2.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Alcance de la prestación.
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema4/ico3.svg' alt='')
            .tarjeta.bg1
              .p-2
                p Condiciones técnicas mínimas.
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema4/ico4.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Garantías.
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema4/ico5.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Condiciones de pago.
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema4/ico6.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Confidencialidad.
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema4/ico7.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Resolución de conflictos.
































</template>

<script>
export default {
  name: 'Tema4',
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
