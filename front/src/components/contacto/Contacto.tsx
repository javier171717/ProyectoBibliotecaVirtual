"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateName = (name: string) =>
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,30}$/.test(name);
  const validateEmail = (email: string) =>
    email.length <= 30 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMessage = (message: string) => message.length <= 300;

  const handleValidation = () => {
    const newErrors = {
      name: validateName(name)
        ? ""
        : "El nombre no es válido o excede 30 caracteres.",
      email: validateEmail(email)
        ? ""
        : "Por favor, ingresa un correo electrónico válido que no exceda 30 caracteres.",
      message: validateMessage(message)
        ? ""
        : "El mensaje no debe exceder 300 caracteres.",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (field: string, value: string) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "message") setMessage(value);

    let error = "";
    if (field === "name" && !validateName(value)) {
      error = "Por favor, ingresa un nombre válido.";
    } else if (field === "email" && !validateEmail(value)) {
      error = "Por favor, ingresa un correo electrónico válido que no exceda 30 caracteres.";
    } else if (field === "message" && !validateMessage(value)) {
      error = "El mensaje no debe exceder 300 caracteres.";
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!handleValidation()) return;

    // Lógica para enviar el mensaje al servidor
    Swal.fire("Mensaje enviado exitosamente.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-40">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name && "border-red-500"
              }`}
              placeholder="Nombre"
              required
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email && "border-red-500"
              }`}
              placeholder="Correo electrónico"
              required
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.message && "border-red-500"
              }`}
              placeholder="Escribe tu mensaje"
              rows={5}
              required
            />
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
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


