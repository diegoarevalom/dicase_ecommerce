import RegisterForm from "@/src/components/auth/registerForm";

function register(){

    return (
        <div className="min-h-screen flex flex-col justify-center rounded">
            <div className="max-w-md w-full mx-auto mt-4 p-8 border border-gray-300 rounded-3xl" style={{ backgroundColor: '#E8E8E8' }}>

                <img src="/images/dicase-logo-negro.png" alt="Logo" className="mx-auto mb-1 w-60 h-auto" />

                <div className="text-center font-bold text-2xl">Registrate en Dicase</div>

                <RegisterForm />
            </div>
        </div>
    );
}

export default register;
