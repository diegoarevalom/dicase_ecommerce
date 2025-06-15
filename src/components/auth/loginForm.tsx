"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

const LoginForm = () => {

    // Estados para manejar los campos del formulario y errores
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{email?: string, password?: string}>({});

    // Manejadores de eventos para los campos del formulario
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setErrors(prev => ({ ...prev, email: undefined }));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setErrors(prev => ({ ...prev, password: undefined }));
    };


    // Validación de campos
    const validate = () => {
        const newErrors: { email?: string, password?: string } = {};
        if (!email) {
            newErrors.email = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "El correo electrónico no es válido.";
        }
        if (!password) {
            newErrors.password = "La contraseña es obligatoria.";
        } else if (password.length < 8) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Manejo del envío del formulario (Temporalmente en simulación hasta tener un backend)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            if (email === "admin@correo.com" && password === "12345678") {
            alert("Login exitoso");
            } else {
            alert("Email o contraseña incorrectos");
            }
        }
    };

    return (
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-10" noValidate>
            <div>
                <input type="email" placeholder="Correo Electrónico" className={`w-full p-2 border rounded mt-1 ${errors.email ? "border-red-500" : "border-gray-400"}`} value={email} onChange={handleEmailChange} />
                {errors.email && (<p className="text-red-600 text-sm mt-1">{errors.email}</p>)}
            </div>

            <div>
                <input type="password" placeholder="Contraseña" className={`w-full p-2 border rounded mt-1 ${errors.password ? "border-red-500" : "border-gray-400"}`} value={password} onChange={handlePasswordChange} />
                {errors.password && (<p className="text-red-600 text-sm mt-1">{errors.password}</p>)}
            </div>

            <div className="text-center">
                <Link href="/auth/forgot-password" className="font-bold underline">¿Has olvidado tu contraseña?</Link>
            </div>

            <div className="text-center">
                <button type="submit" className="py-2 px-4 bg-black text-white hover:bg-gray-800 rounded-md text-bold">Iniciar Sesión</button>
            </div>
                    
            <div className="text-center font-bold">
                ¿No tienes una cuenta? {''} <Link href="/auth/register" className="font-bold underline">Regístrate aquí</Link>
            </div>
        </form>
        
    );
}

export default LoginForm;