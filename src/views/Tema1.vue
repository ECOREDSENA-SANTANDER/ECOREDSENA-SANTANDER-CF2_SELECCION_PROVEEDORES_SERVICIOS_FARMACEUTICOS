<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Convocatoria de proveedores
      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/Tema1/ico1.svg', alt='')
        .col-lg-11
          p La convocatoria de proveedores es el proceso mediante el cual una institución del sector salud invita a diferentes empresas a presentar propuestas para suministrar productos o servicios farmacéuticos. Este procedimiento puede variar según la naturaleza de la entidad (pública o privada), el monto a contratar, el nivel de urgencia y la normativa vigente.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg2.py-2.w-card-text Tipos de convocatoria
      
      .row.justify-content-center.mb-0(data-aos="flip-up")
        .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
          TabsA.color-acento-botones.text-white
            .tarjeta.color-acento-botones.bg3.p-4(titulo="Licitación pública")
              .row.mb-2
                .col-lg-12
                  h4.text-negro Licitación pública 
                  p.text-negro.mb-3 Es un proceso abierto y formal que permite a cualquier proveedor interesado, que cumpla con los requisitos establecidos, presentar propuestas. Su propósito es garantizar transparencia, igualdad de condiciones y la selección de la mejor oferta, evaluando factores como precio, calidad, tiempos de entrega y condiciones contractuales.
                  p.text-negro.mb-3 Se utiliza cuando el valor del contrato supera los umbrales definidos por la ley. Incluye la elaboración de pliegos, publicación en el Sistema Electrónico de Contratación Pública (SECOP), recepción de propuestas, audiencias públicas y adjudicación.
                  h5.text-negro Marco normativo:
                .col-lg-4.px-2.mb-0
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Ley 80 de 1993.

                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Ley 1150 de 2007.
                .col-lg-4.px-2.mb-0 
                  ul.lista-ul--color 
                    li.d-flex 
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro.px-2 Decreto 1082 de 2015.

                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro.px-2  Herramienta: SECOP II.

            .tarjeta.color-acento-botones.bg3.p-4(titulo="Invitación cerrada")
              .row.justify-content-center.align-items-center.mb-2
                .col-lg-12
                  h4.text-negro Invitación cerrada
                  p.text-negro.mb-3 También llamada selección abreviada de menor cuantía, está dirigida a un grupo limitado de proveedores previamente registrados. Es común en instituciones que ya cuentan con bases de datos confiables. Este tipo de convocatoria es más ágil, aunque debe mantener principios de transparencia y trazabilidad documental.
                  h5.text-negro Marco normativo:
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Ley 1150 de 2007.
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Decreto 1082 de 2015.
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Acuerdo 060 de 2001: para Empresas Sociales del Estado (ESE).
            
            .tarjeta.color-acento-botones.bg3.p-4(titulo="Contratación directa")
              .row.justify-content-center.align-items-center.mb-2
                .col-lg-12
                  h4.text-negro Contratación directa
                  p.text-negro.mb-3 Permite a la entidad contratar sin competencia entre proveedores, siempre que exista una justificación válida, como:
                  p.text-negro.mb-3 
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Urgencia manifiesta o emergencia sanitaria.

                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Proveedores únicos por exclusividad.

                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Contratos interadministrativos.
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Bienes con derechos de propiedad exclusiva.
                p.text-negro Aunque no requiere comparación de propuestas, se debe justificar documentalmente la decisión y registrar el contrato en plataformas oficiales como el SECOP.
                
                h5.text-negro.mb-3 Marco normativo:
                  .py-2
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Ley 80 de 1993.

                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Ley 1150 de 2007.

                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Decreto 1082 de 2015.
            
            
            
            .tarjeta.color-acento-botones.bg3.p-4(titulo="Convenios marco")
              .row.justify-content-center.align-items-center.mb-2
                .col-lg-12
                  h4.text-negro Convenios marco
                  p.text-negro.mb-3 Son contratos preestablecidos por Colombia Compra Eficiente, en los que las condiciones (precio, calidad, garantía) ya han sido negociadas. Las entidades pueden adquirir directamente sin convocatorias adicionales. Ejemplo: compra de medicamentos o dispositivos médicos a través de la tienda virtual del Estado.
                  h5.text-negro Marco normativo:
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Ley 1150 de 2007.
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Decreto 1082 de 2015.
                    li.d-flex
                      i.fas.fa-pildora.align-self-start.me-2
                      p.mb-0.text-negro Plataforma: tienda virtual del Estado.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg2.py-2.w-card-text Aplicación del proceso de convocatoria 


      p.mb-4 Una vez definido el tipo de convocatoria, se deben seguir pasos estructurados que aseguren legalidad, trazabilidad y eficiencia:
      
      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-4.col-md-9
          img(src="@/assets/curso/Tema1/img01.png")
        .col-lg-7
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Elaboración de Términos de Referencia (TDR):] documento que define los requerimientos  técnicos, condiciones de entrega, criterios de evaluación y obligaciones contractuales.
            li.d-flex.mb-0
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Publicación o envío:] según la modalidad, los TDR se publican o se remiten directamente a proveedores seleccionados.
            li.d-flex.mb-0
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Recepción de ofertas:] los proveedores presentan propuestas en un plazo definido.
            li.d-flex.mb-0
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Aclaración de dudas:] la entidad debe resolver inquietudes y realizar ajustes si se requiere.
            li.d-flex.mb-0
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Evaluación:] se analizan las propuestas en función de precio, calidad, cumplimiento normativo y soporte.
            li.d-flex.mb-0
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Adjudicación:] se selecciona al proveedor con mejor calificación de acuerdo con los criterios establecidos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg2.py-2.w-card-text Comparar cotizaciones de proveedores
      p.mb-4 La comparación de cotizaciones permite evaluar múltiples ofertas para un mismo producto o servicio. No se limita al precio, sino que incluye:

      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5
          ul.lista-ul--color
            li.d-flex.mb-1
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Precio por unidad:] incluyendo impuestos y transporte.
            li.d-flex.mb-1
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Condiciones de pago:] como plazos o descuentos.
            li.d-flex.mb-1
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Tiempos de entrega:] fundamentales en salud.
            li.d-flex.mb-1
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Garantías:] frente a defectos o vencimientos.
            li.d-flex.mb-1
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Costos adicionales:] como fletes o seguros.
            li.d-flex.mb-1
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro #[b Cumplimiento normativo:] como registros INVIMA.
          .row.justify-content-center.align-items-center.bg1.p-4.mb-4
            .col-lg-12
              p Se recomienda construir cuadros comparativos, donde cada fila sea un proveedor y cada columna una variable, para facilitar la visualización del mejor costo-beneficio.
        .col-lg-7.col-md-9
          img(src="@/assets/curso/Tema1/img02.png")

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg2.py-2.w-card-text Análisis del portafolio de servicios

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-9
          p El portafolio de servicios de un proveedor revela su capacidad técnica y nivel de especialización. Se debe considerar:
          ul.lista-ul--color
            li.d-flex.mb-3
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro Variedad de productos y su enfoque especializado .

            li.d-flex.mb-3
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro Certificaciones de calidad (Buenas Prácticas de Manufactura - BPM, Buenas Prácticas de Almacenamiento - BPA, ISO 9001). 

            li.d-flex.mb-3
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro Soporte técnico y postventa.

            li.d-flex.mb-3
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro Innovaciones o herramientas de valor agregado.
            li.d-flex.mb-3
              i.fas.fa-pildora.align-self-start.me-2
              p.mb-0.text-negro Experiencia comprobada en el mercado.
          p Este análisis permite elegir proveedores alineados con las necesidades institucionales y los requerimientos de seguridad y trazabilidad.
        .col-lg-3.col-8.col-md-5
          img(src="@/assets/curso/Tema1/img03.svg")


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg2.py-2.w-card-text Organización de la información evaluada
      p.mb-4 Toda la documentación debe organizarse de forma clara, accesible y estructurada. Algunas buenas prácticas son:


      .row.justify-content-center.align-items-center.mb-3
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema1/1.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Crear carpetas digitales o físicas por proveedor.
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema1/2.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Usar herramientas como Excel para construir matrices de evaluación.
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema1/3.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Asignar puntuaciones objetivas (ejemplo: 1 si cumple, 0 no cumple).
        .col-lg-3.col-md-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/Tema1/4.svg' alt='')
            .tarjeta.bg1
              .p-3
                p Elaborar informes técnicos que justifiquen la selección.

        p Una adecuada organización facilita auditorías, toma de decisiones y mejora la trazabilidad del proceso de contratación.


      .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/img04.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.txtblue Técnicas de clasificación de proveedor
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=sBZgU1RlQX8')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-video

   






  </template>

<script>
export default {
  name: 'Tema1',
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
