import React, { useState } from "react";
/* import { Navigate } from "react-router-dom"; */

interface Props {
  title: string;
  useMutate: () => {} | undefined | any;
  loading?: boolean;
  isSuccess?: boolean;
  data?: {
    message: string;
    status: string;
  };
}

interface StateForm {
  datos: {
    name?: string;
    password: string;
    email: string;
  };
}

const Form = ({ title, useMutate, loading }: Props) => {
  const [showError, setShowError] = useState({ message: "", status: "" });
  const [datos, setDatos] = useState<StateForm["datos"]>({
    password: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({
      ...datos,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    useMutate(datos, {
      onSuccess: (data: object) => {
        setShowError(data);
        setTimeout(() => {
          setShowError({});
        }, 3000);
      },
    });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  /*variable para la interfaz */
  const lenghtPassword = datos.password.length;

  const menorA5 = lenghtPassword > 0 && lenghtPassword < 5;
  const menorA10 = lenghtPassword >= 5 && lenghtPassword < 10;
  const mayorA10 = lenghtPassword >= 10;

  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
      <form onSubmit={handleSubmit} method="post">
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              {title}
            </h1>
            {title.toLocaleLowerCase() == "registrate" && (
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  nombre de Usuario
                </label>

                <input
                  onChange={handleChange}
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="name"
                  required
                />
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Email
              </label>

              <input
                onChange={handleChange}
                type="email"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                name="email"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Contraseña
              </label>

              <input
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                name="password"
                required
                minLength={8}
              />
              <div className="absolute   bottom-2 right-2">
                <svg
                  onClick={handleClickShowPassword}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  {!showPassword && <line x1="1" y1="1" x2="23" y2="23"></line>}
                </svg>
              </div>
            </div>
            {/* barra de seguridad */}
            {title.toLowerCase() === "registrate" ? (
              <div>
                <div className={`grid grid-flow-col grid-cols-3`}>
                  <span
                    className={`h-1  
            ${menorA5 && "bg-orange-500 col-span-1"}
            ${menorA10 && "col-span-2 bg-yellow-500"} 
            ${mayorA10 && "col-span-3 bg-green-500"}`}
                  ></span>
                </div>
                <div>
                  {menorA5 && "contraseña debil"}
                  {menorA10 && "contraseña Medio"}
                  {mayorA10 && "contraseña Fuerte"}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* alerta */}

          {Object.keys(showError).length > 0 && showError?.status != "ok" && (
            <div
              className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700 my-6 "
              role="alert"
            >
              <svg
                className="w-5 h-5 inline mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>
                {showError?.status != "ok" && (
                  <span>
                    <span className="font-medium">Ops!</span>{" "}
                    {showError?.message}
                  </span>
                )}
              </div>
            </div>
          )}

          <button className="h-12 mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide grid place-content-center">
            {loading ? (
              <span className="w-8 h-8 border-4 border-white border-b-red-600 rounded-full inline-block box-border animate-spin"></span>
            ) : (
              title
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
