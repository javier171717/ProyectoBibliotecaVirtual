"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  // Validaciones
  const validateName = (name: string) =>
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,30}$/.test(name);
    const validateEmail = (email: string) =>
    email.length <= 30 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) =>
  password.length <= 8 && /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{0,8}/.test(password);
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone);
  const validateAddress = (address: string) =>
  /^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ#\s,.\-\/]{5,30}$/.test(address);

  

  const handleValidation = () => {
    const newErrors = {
      name: validateName(name)
        ? ""
        : "El nombre no es válido o excede 30 caracteres.",
        email: validateEmail(email)
        ? ""
        : "Por favor, ingresa un correo electrónico válido que no exceda 30 caracteres.",
      password: validatePassword(password)
        ? ""
        : "La contraseña debe tener un máximo de 8 caracteres, incluir al menos una letra mayúscula, un número y un carácter especial (@, $, !, %, ?, &, #).",
      address: validateAddress(address)
        ? ""
        : "La dirección no debe exceder 30 caracteres y solo puede contener caracteres alfanuméricos y básicos (,.-/).",
      phone: validatePhone(phone)
        ? ""
        : "El número de teléfono debe tener exactamente 10 dígitos.",
    };
  
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };
  

  const handleChange = (field: string, value: string) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "address") setAddress(value);
    if (field === "phone") setPhone(value);
  
    let error = "";
    if (field === "name" && !validateName(value)) {
      error = "El nombre no es válido o excede 30 caracteres.";
    } else if (field === "email" && !validateEmail(value)) {
      error = "Por favor, ingresa un correo electrónico válido que no exceda 30 caracteres.";
    } else if (field === "password" && !validatePassword(value)) {
      error =
        "La contraseña debe tener un máximo de 8 caracteres, incluir al menos una letra mayúscula, un número y un carácter especial (@, $, !, %, ?, &, #).";
    } else if (field === "address" && !validateAddress(value)) {
      error =
        "La dirección no debe exceder 30 caracteres y solo puede contener caracteres alfanuméricos y básicos (,.-/).";
    } else if (field === "phone" && !validatePhone(value)) {
      error = "El número de teléfono debe tener exactamente 10 dígitos.";
    }
  
    setErrors((prev) => ({ ...prev, [field]: error }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!handleValidation()) return;

    try {
      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          address,
          phone,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "Serás redirigido a la página de inicio de sesión.",
        }).then(() => {
          setName("");
          setEmail("");
          setPassword("");
          setAddress("");
          setPhone("");
          router.push("/login");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al registrar usuario",
          text:
            responseData.message ||
            "Ha ocurrido un error al intentar registrar el usuario.",
        });
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      Swal.fire({
        icon: "error",
        title: "Error al registrar usuario",
        text: "Error en el servidor. Por favor, inténtalo más tarde.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-40">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Registrarse</h2>
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
              E-mail
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

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => handleChange("address", e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.address && "border-red-500"
              }`}
              placeholder="Dirección"
              required
            />
            {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phone && "border-red-500"
              }`}
              placeholder="Teléfono"
              required
            />
            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => handleChange("password", e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password && "border-red-500"
              }`}
              required
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="bg-gray-200 hover:bg-gray-300 rounded p-1 ml-2"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Registrarse
            </button>
          </div>

          <div className="text-center">
            <p className="mt-4 text-sm text-gray-700">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="text-blue-500 hover:text-blue-800">
                Iniciar sesión
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

