import { useState } from "react";

export default function Image({ src }: { src: string }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e: any) => {
    const w = e.target.width;
    const h = e.target.height;

    const hw = w / 2;
    const hh = h / 2;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    setPosition({
      x: ((x - hw) / hw) * 200,
      y: ((y - hh) / hh) * 200,
    });
  };

  return (
    <div className="flex">
      <img onMouseMove={handleMove} className="border cursor-move" src={src}  />
      <div className=" border relative overflow-hidden w-60 h-60">
        <img
          className="absolute cursor-move"
          style={{
            scale: "300%",
            right: `${position.x}px`,
            bottom: `${position.y}px`,
          }}
          src={src}
        />
      </div>
    </div>
  );
}
