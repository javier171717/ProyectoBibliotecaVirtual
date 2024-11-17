"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!name || !email || !message) {
      setError('Por favor, completa todos los campos');
      return;
    }

    // Validación del nombre (máximo 30 caracteres)
    if (name.length > 30) {
      setError('El nombre no debe superar los 30 caracteres');
      return;
    }

    // Validación del email usando una expresión regular simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido');
      return;
    }

    // Validación del mensaje (máximo 100 caracteres)
    if (message.length > 100) {
      setError('El mensaje no debe superar los 100 caracteres');
      return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario de contacto
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Mostrar alerta de éxito y limpiar los campos
    alert('Mensaje enviado correctamente');
    setName('');
    setEmail('');
    setMessage('');
    setError('');
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-24"> {/* Ajuste de margen superior */}
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Nombre
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
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Correo electrónico
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
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Mensaje"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

