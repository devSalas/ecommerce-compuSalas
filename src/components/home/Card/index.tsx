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
    <figure className="mb-4  min-w-[16rem]">
      <Link to={`/product/${id}`}>
        <div className="flex flex-col gap-3">
          <img className="object-contain aspect-square " src={image} />
          <div>
            <p className="text-sky-500 text-sm">{category}</p>
            <h4>{title}</h4>
            <p className="text-red-500 font-bold">S/ {price}</p>
          </div>
        </div>
      </Link>
    </figure>
  );
}
