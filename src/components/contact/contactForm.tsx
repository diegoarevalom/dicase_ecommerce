'use client';
import React, { useState } from 'react';


const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // Validacion del formulario
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Completa todos los campos del formulario.');
      setIsLoading(false);
      return;
    }
    // try


  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='flex flex-col-1 items-center gap-6'>
        <label htmlFor="name" className='text-black w-30'>Nombre</label>
        <input
          type="text"
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='px-25 h-10 bg-gray-200 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-black'
        />
      </div>
      <div className='flex flex-col-1 items-center gap-6'>
        <label htmlFor="email" className='text-black w-30'>Correo</label>
        <input
          type="email"
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='px-25 h-10 bg-gray-200 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-black'
        />
      </div>
      <div className='flex flex-col-1  gap-6'>
        <label htmlFor="subject" className='text-black w-30'>Asunto</label>
        <input
          type="text"
          id='subject'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          required
          className='px-25 h-10 bg-gray-200 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-black'
        />
      </div>
      <div className='flex flex-col-1 items-center gap-6'>
        <label htmlFor="message" className='text-black w-30'>Mensaje</label>
        <input
          type="text"
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          className='px-25 h-32 resize-none bg-gray-200 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-black'
        />
      </div>

      {error && <p className='text-red-400 text-sm mt-2'>{error}</p>}
      {success && <p className='text-green-400 text-sm mt-2'>{success}</p>}

      <button
        type='submit'
        disabled={isLoading}
        className='py-2 px-8 mt-6 bg-black text-white font-semibold rounded-md  focus:outline-none focus:ring-2 mx-auto block'>Enviar
      </button>
    </form>
  )
}
export default ContactForm