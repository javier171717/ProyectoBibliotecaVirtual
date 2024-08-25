"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { loginUser } from '../../utils/auth.js';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataUser = { email, password };
    try {
      const userData = await loginUser(dataUser);
      console.log('Inicio de sesión exitoso:', userData);

      Swal.fire({
        icon: 'success',
        title: '¡Inicio de sesión exitoso!',
        text: '¡Bienvenido de nuevo!',
        confirmButtonText: 'Aceptar',
      });

      const token = userData.token;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(userData));
        router.push('/');
      } else {
        console.log('Token no encontrado. El inicio de sesión no fue exitoso.');
      }
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error.message);
      Swal.fire({
        icon: 'info',
        title: '¡Usuario no registrado!',
        text: 'Por favor, regístrate para acceder a más funciones.',
        confirmButtonText: 'Entendido',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-24"> {/* Ajuste de margen superior */}
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              className="bg-gray-200 hover:bg-gray-300 rounded p-1 ml-2"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>

          <div className="text-center">
            <a className="block mt-4 text-sm text-blue-500 hover:text-blue-800" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

