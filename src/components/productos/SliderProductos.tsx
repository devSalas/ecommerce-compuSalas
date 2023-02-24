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
      <div className="flex justify-between items-center px-6 py-3">
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 h-full flex items-center pl-4">
          <button
            className="w-12 h-12 bg-white hover:bg-neutral-200 rounded-full flex justify-center items-center shadow-lg"
            onClick={left}
          >
            <img className="w-6 h-6" src="/src/assets/left.svg" alt="" />
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
            className="w-12 h-12 bg-white hover:bg-neutral-200 rounded-full flex justify-center items-center shadow-lg"
            onClick={right}
          >
            <img className="w-6 h-6" src="/src/assets/right.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
