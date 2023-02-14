import React from "react";
import type { CardInterface } from "../Anuncios/types";

export default function index({
  id,
  title,
  description,
  image,
  category,
  price,
}: CardInterface) {
  return (
    <figure className="flex flex-col gap-3 border p-3">
      <div className="aspect-square">
        <img
          className="bg-slate-100 w-full h-full object-contain"
          src={image}
          alt=""
        />
      </div>
      <div>
        <p className="text-sky-500 text-sm">{category}</p>
        <div className="flex justify-between mb-2">
          <h4 className="font-semibold">{title}</h4>
          <p className="text-red-500 font-semibold">${price}</p>
        </div>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </figure>
  );
}
