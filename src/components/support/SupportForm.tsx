'use client';
import Support from '@/app/support/page';
import React, { useState } from 'react'

function SupportForm() {

  const [formData, setFormData] = useState({
    orderNumber: '',
    problemType: '',
    email: '',
    problemDescription: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Ticket Enviado');
  }

  return (
    <div className='bg-[#E8E8E8] dark:bg-[#333] text-white min-h-screen px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold mb-4 text-black dark:text-white flex items-center justify-center'>Crea un Ticket</h1>
      <form
        onSubmit={handleSubmit}
        className='bg-[#DBD5D1] dark:bg-[#222] p-8 rounded-lg shadow-lg min-w-[300px] min-h-[500px] max-w-3xl mx-auto space-y-4'
      >
        <p className='text-xs mb-4 text-gray-700 dark:text-white'>Por favor, complete todos los campos obligatorios marcados con un asterisco (*)</p>

        <div className='grid grid-cols-1 gap-4'>
          <div>
            <label htmlFor='orderNumber' className='block text-sm font-medium text-gray-700 dark:text-white'>Número de Pedido *</label>
            <input
              type='text'
              name='orderNumber'
              id='orderNumber'
              value={formData.orderNumber}
              onChange={handleChange}
              required
              className='mt-1 block w-full border  border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222] rounded-md shadow-sm p-2'
            />
          </div>
          <div>
            <label htmlFor='problemType' className='block text-sm font-medium text-gray-700 dark:text-white'>Tipo de Problema *</label>
            <select
              name='problemType'
              id='problemType'
              value={formData.problemType}
              onChange={handleChange}
              required
              className='mt-1 block w-full border border-gray-300 text-black dark:text-white bg-white dark:bg-[#222] rounded-md shadow-sm p-2'
            >
              <option value=''>Seleccione un tipo de problema</option>
              <option value='pedido'>Problema con el pedido</option>
              <option value='producto'>Problema con el producto</option>
              <option value='otro'>Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-white'>Correo Electrónico *</label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222] rounded-md shadow-sm p-2'
            />
          </div>
          <div>
            <label htmlFor='problemDescription' className='block text-sm font-medium text-gray-700 dark:text-white'>Descripción del Problema *</label>
            <textarea
              name='problemDescription'
              id='problemDescription'
              value={formData.problemDescription}
              onChange={handleChange}
              required
              className='mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222] rounded-md shadow-sm p-2'
            />
          </div>
        </div>
        <button type='submit' className='w-full bg-black text-white py-2 rounded-md'>Enviar Ticket</button>
      </form>
    </div>
  )
}

export default SupportForm;