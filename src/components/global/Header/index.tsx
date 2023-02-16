import React from "react";
import BtnCarrito from "./BtnCarrito";
import BtnMeGusta from "./BtnMeGusta";
import BtnSession from "./BtnSession";
import Buscador from "./Buscador";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between gap-8 md:p-8 p-4 border-b-2">
        <Logo />

        <Buscador />

        <section className="gap-8 md:flex hidden">
          <BtnSession />
          <BtnMeGusta />
          <BtnCarrito />
        </section>
      </header>

      <nav className="fixed md:hidden bottom-0 w-full h-16 flex items-center justify-center border bg-white">
        <section className="gap-8 flex">
          <BtnMeGusta />
          <BtnCarrito />
          <BtnSession />
        </section>
      </nav>
    </>
  );
}
