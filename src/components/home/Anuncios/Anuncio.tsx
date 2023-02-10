import { useEffect, useState } from "react";
import type { AnuncioInterface } from "./types";

export default function Anuncio({
  id,
  vertical = false,
  horizontal = false,
  left = false,
  category,
  title,
  description,
  price,
  image,
  url,
}: AnuncioInterface) {
  const [estilo, setEstilo] = useState(" h-full w-full");

  useEffect(() => {
    if (vertical) setEstilo("w-52 h-full");
    if (horizontal) setEstilo("w-full h-52");
  }, []);

  return (
    <figure className={`relative border ${estilo}`}>
      <div className={`absolute top-4 ${left ? "left-1/2" : "left-4"}`}>
        <p className="text-sm text-sky-500">{category}</p>
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-sm text-neutral-600 mb-4">{description}</p>
        <p className="text-xl font-bold text-red-600">${price}</p>
      </div>
      <img className="" src={image} />
    </figure>
  );
}
