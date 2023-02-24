import React from "react";

export default function Contador({ numero }: { numero: number }) {
  return (
    <div className="bg-red-500 absolute -top-2 -right-2 text-white w-5 h-5 flex items-center justify-center rounded-full text-sm animate-bounce">
      {numero}
    </div>
  );
}
