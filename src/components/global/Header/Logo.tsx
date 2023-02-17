import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h2 className="text-2xl md:block hidden font-bold">
        Compu<span className="text-blue-600">Salas</span>
      </h2>
    </Link>
  );
}
