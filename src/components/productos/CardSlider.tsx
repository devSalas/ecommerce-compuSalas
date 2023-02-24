import React from "react";
import { Link } from "react-router-dom";
import { CardInterface } from "../home/Anuncios/types";

export default function index({ id, title, image, price }: CardInterface) {
  return (
    <figure className="w-64 snap-start">
      <Link to={`/product/${id}`}>
        <div className="flex flex-col gap-3">
          <img className="object-contain aspect-square " src={image} />
          <div>
            <h4>{title}</h4>
            <p className="text-red-500 font-semibold">S/ {price}</p>
          </div>
        </div>
      </Link>
    </figure>
  );
}
