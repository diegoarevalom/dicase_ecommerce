import SupportForm from '@/src/components/support/SupportForm';
import React from 'react'

function Support() {
  return (
    <div className='bg-[#E8E8E8] dark:bg-[#333] text-white min-h-screen px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto sm:px-6 lg:px-8 py-8'>
      </div>
      <h1 className='text-4xl font-bold mb-8 text-black dark:text-white'>SOPORTE AL CLIENTE</h1>


      <div className='mb-8 text-xl text-black dark:text-white max-w-2xl'>
        <p className='mb-4'>¿Tuviste un problema con un pedido? ¿Algo no salió comoo esperabas? <br />
          En Dicase contamos con un sistema de soporte para ayudarte.
        </p>
        <p className='mb-4'>Crea un ticket de soporte <br />
          Completa el formulario con los detalles de tu problema y uno de nuestros agentes se pondrá en contacto contigo lo antes posible.
        </p>
        <p className='mb-4'>Tiempo de respuesta: entre 24 y 48 horas hábiles
          <br />
          También puedes utilizar nuestro apartado de contacto o escribirnos a <a href="mailto:soporte@dicase.cl">soporte@dicase.cl</a>
        </p>
      </div>
      <div className='flex items-center justify-center py-8x'>
        <SupportForm />
      </div>
    </div>
  )
}

export default Support