import type { CardInterface } from "./types";
import { Link } from "react-router-dom";

export default function Anuncio({
  id,
  category,
  title,
  description,
  price,
  image,
  descuento,
}: CardInterface) {
  return (
    <figure className="relative border w-full h-full aspect-video">
      <img
        className="absolute top-0 left-0 -z-10 h-full w-full object-contain"
        src={image}
      />
      <div className="p-8 md:p-10 h-full bg-gradient-to-r from-white to-transparent">
        <p className="text font-semibold text-red-500">{descuento}</p>
        <p className="text text-sky-500">{category}</p>
        <Link to={`/product/${id}`}>
          <h4 className="text-3xl w-60 font-bold">{title}</h4>
        </Link>
        <p className="text text-neutral-600  mb-16 ">{description}</p>
        <Link to={`/product/${id}`}>
          <a
            className="bg-sky-500 hover:bg-sky-600 px-6 py-3 text-white"
            href=""
          >
            SHOP NOW
          </a>
        </Link>
      </div>
    </figure>
  );
}
