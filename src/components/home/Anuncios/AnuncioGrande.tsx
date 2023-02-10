import type { AnuncioMedianoInterface } from "./types";

export default function Anuncio({
  id,
  title,
  description,
  price,
  image,
  descuento,
  url,
}: AnuncioMedianoInterface) {
  return (
    <figure className={`grid grid-cols-2 border h-96`}>
      <div>
        <img className="" src={image} />
      </div>
      <div className="flex flex-col gap-4 p-8 border">
        <p className="text-sm bg-red-50 w-32 text-center p-1 rounded text-red-500">
          {descuento}
        </p>
        <h4 className="text-4xl font-bold">{title}</h4>
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
