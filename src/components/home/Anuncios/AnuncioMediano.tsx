import type { CardInterface } from "./types";

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
      <img className="absolute top-0 left-0 -z-10" src={image} />
      <div className="p-8 md:p-10">
        <p className="text font-semibold text-red-500">{descuento}</p>
        <p className="text text-sky-500">{category}</p>
        <h4 className="text-4xl font-bold">{title}</h4>
        <p className="text text-neutral-600 mb-16 ">{description}</p>
        <a className="bg-sky-500 px-6 py-3 text-white" href="">
          SHOP NOW
        </a>
      </div>
    </figure>
  );
}
