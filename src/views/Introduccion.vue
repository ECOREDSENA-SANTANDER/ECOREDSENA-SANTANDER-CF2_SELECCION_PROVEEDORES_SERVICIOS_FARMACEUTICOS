<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-3
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/portada/ico1.svg', alt='')
      .col-lg-11
        p En el sistema de salud colombiano, la contratación de proveedores farmacéuticos representa una actividad estratégica que incide de manera directa en la calidad, disponibilidad y eficiencia en la entrega de medicamentos, insumos y tecnologías en salud. Seleccionar adecuadamente a los proveedores garantiza no solo la continuidad del servicio, sino también el cumplimiento de la normatividad vigente, la sostenibilidad financiera de las instituciones y la protección de los derechos de los usuarios.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p Este proceso de evaluación y contratación está regulado por disposiciones como la Resolución 1403 de 2007 y la Resolución 1557 de 2023, así como por los lineamientos técnicos definidos por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), las buenas prácticas de manufactura, almacenamiento y distribución, y las exigencias de la Superintendencia Nacional de Salud. Por ello, resulta fundamental que los actores del sistema de salud cuenten con criterios objetivos, verificables y contextualizados para seleccionar proveedores confiables y técnicamente competentes.
        .row.justify-content-center.align-items-center.bg1.p-4.mb-4
          .col-lg-12
            p En este marco, se promueve el desarrollo de competencias orientadas a analizar portafolios de productos, verificar registros sanitarios, aplicar escalas de valoración y matrices de riesgo, así como formular cláusulas contractuales ajustadas a las condiciones técnicas, legales y financieras del sector. Estas capacidades fortalecen la gestión farmacéutica institucional, impulsando decisiones fundamentadas que contribuyan al mejoramiento continuo de los procesos de adquisición y al fortalecimiento del sistema de salud.
      .col-lg-5.col-md-8.col-8
        img(src='@/assets/curso/portada/img01.png', alt='')
    
    
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Zf4FkyQ0EoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Evaluación y contratación en el sector farmacéutico

</template>

<script>
export default {
  name: 'Introduccion',
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
