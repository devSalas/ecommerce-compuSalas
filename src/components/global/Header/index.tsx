import BtnCarrito from "./BtnCarrito";
import BtnHome from "./BtnHome";
import BtnSession from "./BtnSession";
import Buscador from "./Buscador";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between gap-8 md:p-8 p-4 border-b sticky top-0 bg-white z-50">
        <Logo />

        <Buscador />

        <section className="gap-8 md:flex hidden">
          {/* <BtnSession /> */}
          <BtnCarrito />
        </section>
      </header>

      <nav className="fixed z-50 bg-neutral-50 md:hidden bottom-0 w-full h-16 flex items-center justify-center border-t">
        <section className="gap-8 flex">
          <BtnHome />
          <BtnCarrito />
          {/* <BtnSession /> */}
        </section>
      </nav>
    </>
  );
}
