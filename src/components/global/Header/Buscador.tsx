import React from "react";
import Lupa from "../../icons/Lupa";

export default function Buscador() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group flex justify-between w-full md:max-w-lg"
    >
      <div className="w-full flex px-4 border  group-hover:border-neutral-400">
        <input
          className="w-full outline-none"
          type="search"
          name=""
          id=""
          placeholder="buscar"
        />
        <select className="text-slate-500 text-sm outline-none" name="" id="">
          <option value="">All Category</option>
          <option value="">computadoras</option>
          <option value="">procesadores</option>
          <option value="">rams</option>
        </select>
      </div>
      <button className="w-16 h-10 flex justify-center items-center bg-sky-500">
        <Lupa />
      </button>
    </form>
  );
}
