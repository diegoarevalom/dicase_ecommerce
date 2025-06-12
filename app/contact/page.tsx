import ContactForm from "@/src/components/contact/contactForm"

function Contact() {
  return (
    <div className="bg-[#E8E8E8] dark:bg-[#333] text-white min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-4-xl mx-auto sm:px-6 lg:px-8 py-8">

      </div>

      {/* Titulo de la pagina */}
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">CONTACTANOS</h1>

      {/* Información de contacto */}
      <div className="mb-8 text-xl text-black dark:text-white max-w-2xl">
        <p className="mb-4">¿Tienes dudas sobre un producto, tu pedido o necesitas asesorías? <br />
          En Dicase estamos para ayudarte.
        </p>
        <p className="mb-4 items-center">
          <a className="text-black dark:text-white font-bold">Puedes escribirnos a</a> <a href="mailto:contacto@dicase.cl" className="text-blue-500 hover:underline">contacto@dicase.cl</a> <br />
          <a className="text-black dark:text-white font-bold ">Horarios de atencion:</a> Lunes a Viernes de 9:00 a 18:00 hrs.
        </p>
        <p>También puedes usar el formulario de contacto en esta página y te responderemos lo antes posible.</p>
      </div>

      {/* Seccion del formulario */}
      <div className="text-black dark:text-white font-bold text-3xl flex items-center justify-center py-8">Formulario </div>
      <div className="bg-[#DBD5D1] dark:bg-[#222] p-8 rounded-lg shadow-lg min-w-[300px] min-h-[500px] max-w-3xl mx-auto">

        <ContactForm />
      </div>
    </div>
  )
}

export default Contact