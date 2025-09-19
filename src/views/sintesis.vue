<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión eficiente de proveedores farmacéuticos en Colombia requiere conocer conceptos clave. Las Buenas Prácticas de Almacenamiento (BPA) aseguran la calidad de los medicamentos. Los proveedores presentan cotizaciones y fichas técnicas, que describen los productos. El INVIMA regula los registros sanitarios para su venta. A través de licitaciones públicas y el SECOP, las entidades contratan de forma transparente. Las matrices de evaluación ayudan a comparar propuestas. Los medicamentos pueden ser genéricos o de marca, siendo los primeros más accesibles. Conocer estos términos es fundamental para garantizar procesos de compra informados, seguros y en cumplimiento con la normativa vigente del sistema de salud. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama del proceso de evaluación y contratación en el sector farmacéutico, que incluye convocatoria, negociación, evaluación técnica y tipos de contratos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
