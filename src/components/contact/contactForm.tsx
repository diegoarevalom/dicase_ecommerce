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
  const [success, setSuccess] = useState<string | null>(null);

  // Estado para errores individuales
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Limpiar error al escribir
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(null);

    // Validaciones individuales
    let valid = true;
    let newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
      valid = false;
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Ingresa un correo electrónico válido.';
        valid = false;
      }
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es obligatorio.';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio.';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      setIsLoading(false);
      return;
    }

    // Simulación de éxito
    setSuccess('¡Mensaje enviado correctamente!');
    setIsLoading(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='flex items-center gap-4'>
        <label htmlFor="name" className='text-black dark:text-white text-xl w-35'>Nombre</label>
        <input
          type="text"
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='w-96 h-10 bg-gray-200 dark:bg-[#333] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      {errors.name && <p className='text-red-400 text-sm w-96 mx-auto text-center'>{errors.name}</p>}

      <div className='flex items-center gap-4'>
        <label htmlFor="email" className='text-black dark:text-white text-xl w-35'>Correo</label>
        <input
          type="email"
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='w-96 h-10 bg-gray-200 dark:bg-[#333] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      {errors.email && <p className='text-red-400 text-sm w-96 mx-auto text-center'>{errors.email}</p>}

      <div className='flex items-center gap-4'>
        <label htmlFor="subject" className='text-black dark:text-white text-xl w-35'>Asunto</label>
        <input
          type="text"
          id='subject'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          className='w-96 h-10 bg-gray-200 dark:bg-[#333] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      {errors.subject && <p className='text-red-400 text-sm w-96 mx-auto text-center'>{errors.subject}</p>}

      <div className='flex items-center gap-4 '>
        <label htmlFor="message" className='text-black dark:text-white text-xl w-35'>Mensaje</label>
        <input
          type="text"
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='w-96 h-32 resize-none bg-gray-200 dark:bg-[#333] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      {errors.message && <p className='text-red-400 text-sm w-96 mx-auto text-center'>{errors.message}</p>}

      {success && <p className='text-green-800 text-xl mt-2 w-96 mx-auto text-center'>{success}</p>}

      <button
        type='submit'
        disabled={isLoading}
        className='py-2 px-8 mt-6 bg-black text-xl text-white font-semibold rounded-md  focus:outline-none focus:ring-2 mx-auto block'>
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default ContactForm;