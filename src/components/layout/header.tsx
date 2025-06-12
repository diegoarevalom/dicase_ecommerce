'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Header() {

  // Logica del modo claro/oscuro
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Saber si se montó el componente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Funcion para alternar el tema
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Los svgs deben cambiar de color al cambiar el tema
  const svgFillColor = mounted && theme === 'dark' ? '#E0E0E0' : '#000000';
  // Colores de borde y texto del searchbar
  const searchBarBgColor = mounted && theme === 'dark' ? '#1e1e1e' : '#DDD0C8';
  const searchBarTextColor = mounted && theme === 'dark' ? '#E0E0E0' : '#000000';
  const searchBarPlaceholderColor = mounted && theme === 'dark' ? '#999999' : '#a0a0a0';
  // Colores del header e iconos favoritos/carrito/perfil
  const headerBgColor = 'var(--color-background-header)';
  const headerTextColor = 'var(--color-text-header)';


  return (
    <header className="bg-[#DDD0C8] dark:bg-[#222] p-4 shadow-md transition-colors duration-300">
      <div className='max-w-7-xl mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href="/home" className="flex items-center">
          {mounted && theme === 'dark' ? (
            <Image
              src={"/images/dicase_logo_blanco.png"}
              alt="Dicase TechFuel Logo"
              width={120}
              height={50}
              priority
            />
          ) : (
            <Image
              src={"/images/dicase-logo.png"}
              alt="Dicase TechFuel Logo"
              width={120}
              height={50}
              priority
            />
          )}
        </Link>

        {/* Search Bar + Iconos */}
        <div className='flex items-center gap-x-6'>

          {/* DarkMode */}
          {mounted && (
            <div
              className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              onClick={toggleTheme}
              style={{ backgroundColor: searchBarBgColor }}
            >
              <span>
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className='h-5 w-5 dark:fill-[#E0E0E0] transition-colors duration-300'
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Layer_2" data-name="Layer 2"> <g id="Icons"> <g> <rect width="48" height="48" fill="none"></rect> <g> <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"></path> <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"></path> </g> </g> </g> </g> </g></svg>
              </span>
            </div>

          )}

          {/* SearchBar */}
          <div
            className='flex items-center rounded-full border px-4 py-2'
            style={{
              backgroundColor: searchBarBgColor,
              borderColor: searchBarTextColor === '#000000' ? '#000000' : '#333333'
            }}>
            <input
              type="text"
              placeholder='Busca tu producto'
              className="flex-grow outline-none mr-2 font-bold transition-colors duration-300 bg-transparent text-black dark:text-white placeholder-black dark:placeholder-gray-500"
  
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={svgFillColor} x="0px" y="0px" width="100" className='h-5 w-5' height="100" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </span>
          </div>

          {/* Iconos */}

          {/* Favoritos */}
          <div className='flex items-center space-x-4'>
            <Link
              href="/favorites"
              className='text-black font-bold hover:text-blue-500'
              style={{ color: svgFillColor }}
            >
              <span>
                <svg viewBox="0 0 24 24" fill='currentColor' xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-black dark:text-white'><g id="SVGRepo_bgCarrier" strokeWidth="3"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z" fill="currentColor"></path> </g></svg>
              </span>
            </Link>
            {/* Carrito */}
            <Link href="/cart" className='text-black font-bold hover:text-blue-500'>
              <span>
                <svg viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-black dark:text-white'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </span>
            </Link>
            {/* Perfil */}
            <Link href="/profile" className='text-black font-bold hover:text-blue-500'>
              <svg viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-black dark:text-white'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header