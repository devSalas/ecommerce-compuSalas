import React from "react";
import type { CardInterface } from "../Anuncios/types";
import { Link } from "react-router-dom";

export default function index({
  id,
  title,
  description,
  image,
  category,
  price,
}: CardInterface) {
  return (
    <figure>
      <Link to={`/product/${id}`}>
        <img className="object-contain aspect-square mb-1" src={image} />
        <p className="text-sky-500 text-sm">{category}</p>
        <h4>{title}</h4>
        <p className="text-red-500 font-bold">S/ {price}</p>
      </Link>
    </figure>
  );
}
