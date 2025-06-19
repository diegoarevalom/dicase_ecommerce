'use client'
import React, { useState } from 'react'

const faqs = [
  {
    question: "¿Cuánto demora el envío?",
    answer: "Nuestros envíos se realizan en un plazo de 2 a 5 días hábiles, dependiendo de tu ubicación. Una vez despachado, recibirás un correo con el número de seguimiento.."
  },
  {
    question: "¿Cómo puedo saber si un suplemento es adecuado para mí?",
    answer: "En cada producto incluimos una descripción detallada y recomendaciones de uso. Aun así, si tienes condiciones médicas o estás tomando otros suplementos, te sugerimos consultar con un profesional de la salud antes de consumirlo."
  },
  {
    question: "¿Puedo cambiar o devolver el producto?",
    answer: "Sí, puedes solicitar un cambio o devolución dentro de los 7 días hábiles posteriores a la recepción, siempre que el producto esté sellado y sin uso. Escríbenos a contacto@dicase.cl con tu número de pedido."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos pagos con tarjetas de crédito, débito, transferencia bancaria y sistemas de pago digitales. Todos los métodos son seguros y están protegidos."
  }
];


function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E8E8E8] dark:bg-[#333] text-black dark:text-white min-h-screen px-4 py-8 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 py-8 ">
        <h1 className='text-4xl font-bold mb-8 flex justify-center'>Preguntas Frecuentes</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#DBD5D1] dark:bg-[#222] p-2 rounded-lg shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <svg
                  className={`w-6 h-6 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-black dark:text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-2 py-8 mt-4 mx-auto max-w-4xl w-full'>
          {/* INFORMACIÓN SOBRE SUPLEMENTOS */}
          <div className='flex flex-col gap-2 bg-white dark:bg-[#222] p-6 rounded-lg shadow-md min-h-[180px] max-w-[350] justify-between'>
            <div className='flex items-center gap-2 mb-2'>
              <svg className='w-12 h-12 text-black dark:text-white' fill="currentColor" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M406.196,116.796h-4.405V85.341c0-11.465-9.327-20.791-20.792-20.791h-3.159V20.792C377.84,9.327,368.513,0,357.049,0 H154.951c-11.465,0-20.792,9.327-20.792,20.792V64.55h-12.8c-11.465,0-20.792,9.327-20.792,20.791v32.149 c-8.933,2.331-15.555,10.444-15.555,20.098v74.482v196.443v82.695c0,11.465,9.327,20.792,20.791,20.792h300.391 c11.465,0,20.792-9.327,20.792-20.792v-82.695V212.07v-74.482C426.987,126.123,417.659,116.796,406.196,116.796z M380.999,79.763 c3.076,0,5.578,2.502,5.578,5.578v31.455h-28.06V79.763H380.999z M149.373,20.792c0-3.076,2.502-5.578,5.578-5.578h202.097 c3.076,0,5.578,2.502,5.578,5.578V64.55H149.373V20.792z M343.304,79.763v37.033h-33.523V79.763H343.304z M294.568,79.763v37.033 h-33.523V79.763H294.568z M245.832,79.763v37.033h-33.523V79.763H245.832z M197.095,79.763v37.033h-33.523V79.763H197.095z M115.781,85.341c0-3.076,2.502-5.578,5.578-5.578h27v37.033h-32.578V85.341z M100.226,137.588c0-3.076,2.502-5.578,5.578-5.578 h300.391c3.076,0,5.578,2.502,5.578,5.578v66.876H100.226V137.588z M100.226,219.677h311.548v181.23H100.226V219.677z M411.774,491.209c0,3.075-2.503,5.578-5.578,5.578H105.804c-3.076,0-5.578-2.502-5.578-5.578V416.12h311.548V491.209z"></path> </g> </g> <g> <g> <path d="M356.154,254.953c-14.756-14.756-38.766-14.756-53.521,0l-55.008,55.008c-7.125,7.124-11.049,16.628-11.049,26.761 c0,10.132,3.924,19.636,11.049,26.761c7.378,7.378,17.07,11.067,26.761,11.067c9.692,0,19.383-3.689,26.761-11.067l55.008-55.008 c7.124-7.124,11.048-16.628,11.048-26.761S363.279,262.078,356.154,254.953z M290.39,352.726c-8.825,8.824-23.182,8.824-32.008,0 c-4.251-4.252-6.592-9.934-6.592-16.003c0-6.069,2.342-11.752,6.592-16.003l22.125-22.126l32.008,32.008L290.39,352.726z M345.398,297.719l-22.126,22.125l-32.008-32.008l22.126-22.125c4.413-4.413,10.207-6.618,16.004-6.618 c5.795,0,11.592,2.207,16.003,6.618C354.223,274.536,354.223,288.894,345.398,297.719z"></path> </g> </g> <g> <g> <path d="M216.85,265.419c-0.151-0.268-0.314-0.531-0.502-0.785c-0.047-0.063-0.099-0.119-0.148-0.181 c-7.424-10.681-19.776-17.692-33.741-17.692c-22.648,0-41.075,18.426-41.075,41.075c0,8.595,2.658,16.578,7.19,23.181 c0.231,0.955,0.652,1.88,1.272,2.72c0.764,1.033,1.74,1.813,2.823,2.334c7.49,7.899,18.07,12.84,29.79,12.84 c22.648,0,41.075-18.425,41.075-41.075C223.533,279.569,221.069,271.87,216.85,265.419z M156.597,287.836 c0-14.26,11.602-25.862,25.862-25.862c6.29,0,12.061,2.26,16.549,6.007l-40.405,29.834 C157.312,294.743,156.597,291.372,156.597,287.836z M182.459,313.698c-5.192,0-10.027-1.543-14.082-4.187l38.948-28.759 c0.643,2.254,0.995,4.628,0.995,7.084C208.32,302.096,196.719,313.698,182.459,313.698z"></path> </g> </g> </g></svg>
              <h2 className='text-xl font-bold text-black dark:text-white'>Información sobre suplementos </h2>
            </div>
            <span className='text-black dark:text-white text-base leading-relaxed'>Aprende más sobre cómo usar proteínas, creatina, vitaminas y pre-entrenos de forma efectiva.</span>
            <span className='self-start mt-auto'><a href="#" className="text-black font-bold dark:text-white hover:underline flex items-center gap-1">Ver más <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></a></span>
          </div>


          {/* AYUDA CON TU COMPRA */}
          <div className='flex flex-col gap-2 bg-white dark:bg-[#222] p-6 rounded-lg shadow-md min-h-[180px] max-w-[350] justify-between'>
            <div className='flex items-center gap-2 mb-2'>
              <svg viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-black dark:text-white'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              <h2 className='text-xl font-bold text-black dark:text-white'>Ayuda con tu compra</h2>
            </div>
            <span className='text-black dark:text-white text-base leading-relaxed'>¿Tienes dudas con tu pedido, tu cuenta o el proceso de pago? Estamos aquí para ayudarte.</span>
            <span className='self-start mt-auto'><a href="/support" className="text-black font-bold dark:text-white hover:underline flex items-center gap-1">Ir a Soporte <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></a></span>
          </div>

          {/* TERMINOS Y CONDICIONES */}
          <div className='flex flex-col gap-2 bg-white dark:bg-[#222] p-6 rounded-lg shadow-md min-h-[180px] max-w-[350] justify-between'>
            <div className='flex items-center gap-2 mb-2'>
              <svg className='w-8 h-8 text-black dark:text-white' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="currentColor"> <g id="SVGRepo_bgCarrier" strokeWidth="1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path stroke="currentColor" strokeWidth="1" d="M56,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h48c2.211,0,4-1.789,4-4V4C60,1.789,58.211,0,56,0z M58,60c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2V4c0-1.104,0.896-2,2-2h48c1.104,0,2,0.896,2,2V60z"></path><path stroke="currentColor" strokeWidth="1" d="M49,25H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,25,49,25z"></path><path stroke="currentColor" strokeWidth="1" d="M49,19H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,19,49,19z"></path><path stroke="currentColor" strokeWidth="1" d="M49,37H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,37,49,37z"></path><path stroke="currentColor" strokeWidth="1" d="M49,43H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,43,49,43z"></path><path stroke="currentColor" strokeWidth="1" d="M49,49H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,49,49,49z"></path><path stroke="currentColor" strokeWidth="1" d="M49,31H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,31,49,31z"></path><path stroke="currentColor" strokeWidth="1" d="M15,15h16c0.553,0,1-0.447,1-1s-0.447-1-1-1H15c-0.553,0-1,0.447-1,1S14.447,15,15,15z"></path></g></g></svg>
              <h2 className='text-xl font-bold text-black dark:text-white'>Términos y condiciones</h2>
            </div>
            <span className='text-black dark:text-white text-base leading-relaxed'>Revisa nuestros términos y condiciones.</span>
            <span className='self-start mt-auto'><a href="/legal/terms" className="text-black font-bold dark:text-white hover:underline flex items-center gap-1">Leer Términos <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></a></span>
          </div>

          {/* POLITICA DE PRIVACIDAD */}
          <div className='flex flex-col gap-2 bg-white dark:bg-[#222] p-6 rounded-lg shadow-md min-h-[180px] max-w-[350] align-between'>
            <div className='flex items-center gap-2 mb-2'>
              <svg className='w-8 h-8 text-black dark:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M25 12h-1v-3.816c0-4.589-3.32-8.184-8.037-8.184-4.736 0-7.963 3.671-7.963 8.184v3.816h-1c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM10 8.184c0-3.409 2.33-6.184 5.963-6.184 3.596 0 6.037 2.716 6.037 6.184v3.816h-12v-3.816zM27 28c0 1.102-0.898 2-2 2h-18c-1.103 0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18c-1.104 0-2 0.895-2 2 0 0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.277c0.595-0.346 1-0.985 1-1.723 0-1.105-0.895-2-2-2z"></path> </g></svg>
              <h2 className='text-xl font-bold text-black dark:text-white'>Política de privacidad</h2>
            </div>
            <span className='text-black dark:text-white text-base leading-relaxed'>Revisa nuestra política de privacidad.</span>
            <span className='self-start mt-auto'><a href="/legal/privacy" className="text-black font-bold dark:text-white hover:underline flex items-center gap-1">Leer Política <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></a></span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Faqs;
