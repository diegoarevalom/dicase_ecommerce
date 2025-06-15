"use client";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from 'next/navigation';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    //Estados para manejar los campos del formulario y errores
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    //Estados para mostrar/ocultar contraseñas
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Hook para redireccionar
    const router = useRouter();

    // Manejadores de eventos para los campos del formulario
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Validación de campos
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-])[A-Za-z\d@$!%*?&\-]{8,}$/;

        if (!formData.name) newErrors.name = "El nombre es obligatorio.";
        if (!formData.surname) newErrors.surname = "El apellido es obligatorio.";
        if (!formData.email) newErrors.email = "El correo es obligatorio.";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Correo inválido.";
        if (!formData.password) newErrors.password = "La contraseña es obligatoria.";
        else if (!passwordRegex.test(formData.password)) newErrors.password = "Debe cumplir con los requisitos de contraseña.";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Debes confirmar la contraseña.";
        else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = "Las contraseñas no coinciden.";
        if (!formData.terms) newErrors.terms = "Debes aceptar los términos y políticas.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Manejo del envío del formulario
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

            // Verificar si el usuario ya existe
            const userExists = existingUsers.some((user: any) => user.email === formData.email);

            if (userExists) {
                alert("El usuario ya está registrado.");
            } else {
                // Agregar el nuevo usuario
                const newUser = {
                    name: formData.name,
                    surname: formData.surname,
                    email: formData.email,
                    password: formData.password,
                };
                existingUsers.push(newUser);
                localStorage.setItem("users", JSON.stringify(existingUsers));
                alert("Registro exitoso. Puedes iniciar sesión ahora.");

                // Redireccionar al login
                router.push('/auth/login');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 mt-10" noValidate>
            <div>
                <label htmlFor="name" className="text-sm font-bold text-gray-900">Nombre</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mt-1"/>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="surname" className="text-sm font-bold text-gray-900">Apellido</label>
                <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full p-2 border rounded mt-1"/>
                {errors.surname && <p className="text-red-500 text-sm mt-1">{errors.surname}</p>}
            </div>

            <div>
                <label htmlFor="email" className="text-sm font-bold text-gray-900">Correo Electrónico</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mt-1"/>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="relative">
                <label htmlFor="password" className="text-sm font-bold text-gray-900">Contraseña</label>
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mt-1 pr-10"/>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-600">
                    {showPassword ? "🙈" : "👁️"}
                </button>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                <p className="text-gray-600 text-sm mt-1">Mínimo 8 caracteres, con mayúscula, minúscula, número y símbolo(@$!%*?&-).</p>
            </div>

            <div className="relative">
                <label htmlFor="confirm-password" className="text-sm font-bold text-gray-900">Confirmar Contraseña</label>
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded mt-1 pr-10"/>
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-9 text-gray-600">
                    {showConfirmPassword ? "🙈" : "👁️"}
                </button>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <div>
                <label htmlFor="terms" className="flex items-center flex-wrap text-sm text-gray-900">
                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} className="mr-2"/> <span className="mr-1">He leído y acepto los</span> <Link href="/legal/terms" className="font-bold mr-1">Términos y Condiciones</Link> <span className="mr-1">y la</span> <Link href="/legal/privacy" className="font-bold">Política de Privacidad.</Link>
                </label>
                {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
            </div>

            <div className="text-center">
                <button type="submit" className="py-2 px-4 bg-black text-white hover:bg-gray-800 rounded-md text-bold">Registrarse</button>
            </div>
        </form>
    );
}

export default RegisterForm;
