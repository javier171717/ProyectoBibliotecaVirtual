"use client"
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';

const Register = () => {
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!name || !email || !password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario de registro
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Mostrar alerta de éxito y limpiar los campos
    alert('Registro exitoso');
    setName('');
    setEmail('');
    setPassword('');
    router.push('/');
 
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Registrarse
          </button>
          <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
