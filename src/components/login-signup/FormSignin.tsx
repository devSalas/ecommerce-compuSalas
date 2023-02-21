import { useState } from "react";
import type { Data } from "./form.types";
import { useFetchCreateUser } from "../../services/query";
import { useNavigate } from "react-router-dom";
import OjitoIcon from "./OjitoIcon";
import OjoCerradoIcon from "./OjoCerradoIcon";
import BarraSeguridad from "./BarraSeguridad";
import MensError from "./MensError";

export default function FormLogin() {
  const [datos, setDatos] = useState<Data>({
    name: "",
    password: "",
    email: "",
  });
  const [ver, setVer] = useState(false);
  const [mgErr, setMgErr] = useState("");

  const { mutate } = useFetchCreateUser();

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(datos, {
      onSuccess(data) {
        localStorage.setItem("token", data.token);
        navigate("/");
      },
      onError() {
        setMgErr("ha ocurrido un error");
      },
    });
  };

  const verContrase = () => setVer(!ver);

  return (
    <div className="md:max-w-lg m-auto md:py-8">
      <form
        className="flex flex-col gap-4 bg-white rounded-2xl p-8 md:shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-semibold text-gray-600">
          Iniciar Sesion
        </h2>
        <label className="flex flex-col gap-1">
          <span className="text-gray-600 font-semibold">Nombre de Usuario</span>
          <input
            className="bg-indigo-50 hover:bg-indigo-100 px-4 py-2 outline-none rounded-md"
            onChange={handleChange}
            type="text"
            name="name"
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-600 font-semibold">Email</span>
          <input
            className="bg-indigo-50 hover:bg-indigo-100 px-4 py-2 outline-none rounded-md"
            onChange={handleChange}
            type="email"
            name="email"
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-600 font-semibold">Contraseña</span>
          <div className="flex px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-md">
            <input
              className="outline-none bg-transparent w-full"
              onChange={handleChange}
              type={ver ? "password" : "text"}
              name="password"
              required
            />
            <button type="button" onClick={verContrase}>
              {ver ? <OjitoIcon /> : <OjoCerradoIcon />}
            </button>
          </div>
          <BarraSeguridad password={datos.password} />
        </label>
        {mgErr ? <MensError err={mgErr} /> : null}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-lg">
          Registrate
        </button>
      </form>
    </div>
  );
}
