import { useEffect, useState } from "react";
import type { CardInterface } from "./types";

export default function Anuncio({
  id,
  vertical = false,
  category,
  title,
  description,
  price,
  image,
}: CardInterface) {
  const [estilo, setEstilo] = useState(" h-full w-full");

  useEffect(() => {
    if (vertical) setEstilo("w-52 md:h-full h-96");
  }, []);

  return (
    <figure className={`relative -z-50 border ${estilo} aspect-video`}>
      <img
        className="absolute -z-40 top-0 left-0 object-cover w-full h-full"
        src={image}
      />
      <div className="p-4 pb-8 bg-gradient-to-r h-full from-white to-transparent">
        <p className="text-sm text-sky-500">{category}</p>
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-sm text-neutral-600 mb-4">{description}</p>
        <p className="text-xl font-bold text-red-600">${price}</p>
      </div>
    </figure>
  );
}
