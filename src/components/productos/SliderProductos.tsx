import { useRef } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SliderProductos({ title, children }: Props) {
  const slider = useRef() as React.MutableRefObject<HTMLDivElement>;

  const left = () => (slider.current.scrollLeft -= 256 * 2);
  const right = () => (slider.current.scrollLeft += 256 * 2);

  return (
    <section>
      <div className="flex justify-between items-center px-6 py-3 bg-neutral-100 rounded-xl">
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="relative py-8">
        <div className="absolute top-0 left-0 h-full flex items-center pl-4">
          <button
            className="w-12 h-12 bg-rose-500 hover:bg-rose-600 rounded-full flex justify-center items-center shadow-lg"
            onClick={left}
          >
            <FlechaIzquierda />
          </button>
        </div>
        <div
          ref={slider}
          className="overflow-x-scroll grid grid-rows-1 grid-flow-col gap-4 h-96 scroll-smooth snap-x snap-mandatory"
        >
          {children}
        </div>
        <div className="absolute top-0 right-0 h-full flex items-center pr-4">
          <button
            className="w-12 h-12 bg-rose-500 hover:bg-rose-600 rounded-full flex justify-center items-center shadow-lg"
            onClick={right}
          >
            <FlechaDerecha />
          </button>
        </div>
      </div>
    </section>
  );
}

const FlechaIzquierda = () => (
  <svg
    className="fill-white"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
  </svg>
);
const FlechaDerecha = () => (
  <svg
    className="fill-white"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
  </svg>
);
