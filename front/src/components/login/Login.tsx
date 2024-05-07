"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataUser = { email, password };
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataUser)
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('Inicio de sesión exitoso:', userData);
        alert('¡Inicio de sesión exitoso!');
        setEmail('');
        setPassword('');

        // Verificar si el token se ha establecido correctamente
        const token = userData.token;
        if (token) {
          console.log('Token encontrado:', token);
          localStorage.setItem('token', token);
          localStorage.setItem('userData', JSON.stringify(userData));
          setIsLoggedIn(true);
        
          // Almacenar los datos del usuario en el localStorage
        
        
          router.push('/');
        } else {
          console.log('Token no encontrado. El inicio de sesión no fue exitoso.');
        }
        
      } else {
        const errorData = await response.json();
        if (response.status === 404 && errorData.message === 'User not found') {
          setError('El usuario no está registrado. Por favor, regístrate.');
          router.push('/register');
        } else {
          throw new Error(errorData.message || 'Error en el inicio de sesión');
        }
      }
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error);
      alert('señor usuario usted no esta registrado');
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-md p-4">
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
