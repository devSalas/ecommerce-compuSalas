import type { CardInterface } from "./types";
import { Link } from "react-router-dom";

export default function Anuncio({
  id,
  title,
  description,
  price,
  image,
  descuento,
}: CardInterface) {
  return (
    <figure className="grid grid-cols-2 aspect-video">
      <img className="object-contain w-full h-full" src={image} />
      <div className="flex flex-col gap-4 p-8 border">
        <p className="text-sm bg-red-50 w-32 text-center p-1 rounded text-red-500">
          {descuento}
        </p>
        <Link to={`/product/${id}`}>
          <h4 className="text-4xl font-bold">{title}</h4>
        </Link>
        <p className="text-3xl font-bold text-red-600">${price}</p>
        <p className="text text-neutral-600 mb-4">{description}</p>
        <div>
          <p>La oferta se acaba en:</p>
          <p>10: 28: 54</p>
        </div>
      </div>
    </figure>
  );
}
