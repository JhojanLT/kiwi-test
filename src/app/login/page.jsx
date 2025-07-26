"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

export default function page() {

    const router = useRouter();

    const handleRedirect = (text) => {
    console.log(`Ingresaste con ${text}`)
    router.push('/analytics');
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      console.log("Datos del formulario:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("¡Inicio de sesión exitoso!");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-6 items-center justify-center">
      <section className="flex flex-col justify-center w-[70%]  m-auto md:px-16 order-2 lg:order-1 mt-7 lg:mt-0 xl:h-[100vh]">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome Back <span>👋</span>
          </h1>
          <p className="text-gray-600 text-xl CAMBIAR-FUENTE">
            Today is a new day. It's your day. You shape it.
            <br />
            Sign in to start managing your projects.
          </p>
        </header>

        <form
          className="space-y-4"
          aria-label="Login form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Example@email.com"
              className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Formato de email inválido",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="At least 8 characters"
              className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "La contraseña es requerida",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
             className="w-full py-2 bg-primary-color text-white rounded-lg font-medium bg-gray-800 hover:bg-gray-mainGray hover:text-primary-light transition"
>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500 text-sm">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

           <button
            type="button"
            className="w-full py-2 border bg-[#F3F9FA] border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
            onClick={()=>handleRedirect('Google')}
          >
            <img src="assets/images/Google.png" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <button
            type="button"
            className="w-full py-2 border bg-[#F3F9FA] border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
            onClick={()=>handleRedirect('Facebook')}
          >
            <img src="assets/images/Facebook.png" alt="Facebook" className="w-5 h-5" />
            Sign in with Facebook
          </button>

        </form>

        <footer className="mt-8 text-center text-sm text-gray-600">
          Don't you have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
          <br />
          <p className="mt-6 text-xs text-gray-400">
            © 2023 ALL RIGHTS RESERVED
          </p>
        </footer>
      </section>

      <section className="lg:px-8 h-40 lg:h-auto m-auto md:max-w-max  min-w-[90%] lg:min-w[70%] order-1 lg:order-2 xl:h-[100vh]">
        <img
          src="assets/images/Login_Art.png"
          alt="Artwork with flowers"
          className="w-full h-full object-cover rounded-xl"
        />
      </section>
    </main>
  );
}
