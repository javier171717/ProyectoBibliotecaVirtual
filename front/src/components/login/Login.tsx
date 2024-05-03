"use client"
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // Agrega esta línea
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!email || !password) {
      setError('Por favor, ingresa tu correo electrónico y contraseña');
      return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario de inicio de sesión
    // Por ejemplo, puedes hacer una solicitud a una API para validar las credenciales del usuario

    // Si el inicio de sesión es exitoso, muestra una alerta y redirige al usuario a la página de inicio
    console.log('Inicio de sesión exitoso:', { email, password });
    alert('¡Inicio de sesión exitoso!');
    setEmail('');
    setPassword('');
    router.push('/');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
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
    type={showPassword ? "text" : "password"}
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
    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
    className="bg-gray-200 hover:bg-gray-300 rounded p-1 ml-2"
  >
    {showPassword ? "🙈" : "👁️"}
  </button>
</div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
