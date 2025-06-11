"use client";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function login(){

    // Estado para manejar el correo electrónico
    const [email, setEmail] = useState("");

    //Simulación de correos electrónicos registrados
    const registeredEmails = ["admin@correo.com", "usuario@ejemplo.com"];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!email) {
            alert("Por favor, ingrese un correo electrónico.");
            return;
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingrese un correo válido.");
            return;
        }

        if (registeredEmails.includes(email)) {
            alert("Hemos enviado un correo a " + email + " con las instrucciones para restablecer la contraseña.");
        } else {
            alert("El correo no está registrado.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center rounded">
            <div className="max-w-md w-full mx-auto mt-4 p-8 border border-gray-300 rounded-3xl" style={{ backgroundColor: '#E8E8E8' }}>

                <img src="/next.svg" alt="Logo" className="mx-auto mb-6 w-32 h-auto" />

                <div className="text-center font-bold text-2xl">Recuperar Contraseña</div>

                <div className="mt-5 text-sm text-gray-600">Ingresa tu correo electrónico y te enviaremos las instrucciones para una nueva contraseña.</div>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4" noValidate>
                    <div>
                        <input type="email" placeholder="Correo Electrónico" className="w-full p-2 border rounded mt-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="py-2 px-4 bg-black text-white hover:bg-gray-800 rounded-md text-bold">Recuperar Contraseña</button>
                    </div>

                    <div className="text-center font-bold">
                        <Link href="/auth/login" className="font-bold underline">Atrás para iniciar sesión</Link>
                    </div>
                </form>
            </div>
        </div>
        
    );
}