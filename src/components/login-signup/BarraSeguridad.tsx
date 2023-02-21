import { useState, useEffect } from "react";

export default function BarraSeguridad({ password }: { password: string }) {
  const [longitud, setLongitud] = useState(0);

  useEffect(() => {
    if (password.length === 0) setLongitud(0);
    if (password.length > 0) setLongitud(1);
    if (password.length > 4) setLongitud(2);
    if (password.length > 8) setLongitud(3);
  }, [password]);

  if (longitud === 0) return null;

  return (
    <>
      <div className="grid">
        <span
          className={`h-1  
              ${longitud === 1 && "bg-orange-500"}
              ${longitud === 2 && "bg-yellow-500"} 
              ${longitud === 3 && "bg-green-500"}`}
        ></span>
      </div>
      <p className="text-gray-700">
        {longitud === 1 && "contraseña debil"}
        {longitud === 2 && "contraseña Medio"}
        {longitud === 3 && "contraseña Fuerte"}
      </p>
    </>
  );
}
