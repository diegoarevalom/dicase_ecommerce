import React from 'react'

function page() {
  return (
    <div className='bg-[#E8E8E8] dark:bg-[#333] text-white min-h-screen px-4 sm:px-6 lg:px-8'>
      <div className="max-w-4-xl mx-auto sm:px-6 lg:px-8 py-8">

      </div>
      <h1 className='text-4xl font-bold mb-8 text-black dark:text-white'>QUIENES SOMOS</h1>
      <div className='mb-8 text-xl text-black dark:text-white max-w-2xl'>
        <p className='mb-4'>En Dicase creemos que una vida activa y saludable comeinza con decisiones bien informadas.</p>
        <p>Somos una tienda enfocada en ofrecer suplementos deportivos de calidad y consejos confiables para acompañarte en tu camino hacia un mejor rendimiento fisico.</p>
        <p>Nuestro compromiso es entregarte productos seleccionados cuidadosamente, junto a orientacion clara, cercana y profesional, sin complicaciones.</p>
      </div>

      <div className='mb-8 text-xl text-black dark:text-white max-w-2xl'>
        <h2 className='text-2xl font-bold mb-4'>¿Por qué DICASE?</h2>
        <ul className='list-disc pl-6 space-y-2'>
          <li className=''>Productos confiables y originales</li>
          <li>Recomendaciones basadas en experiencia real</li>
          <li>Desarrollado por un equipo apasionado por el deporte y la tecnología</li>
        </ul>
      </div>

      <div className="bg-[#DBD5D1] dark:bg-[#222] rounded-xl w-fit px-8 text-black dark:text-white text-xl items-center justify-center py-4 font-bold flex mx-auto">
        <p>Fortalece tu cuerpo con información clara, productos seguros y un equipo que te entiende.</p>

      </div>

    </div>
  )
}

export default page