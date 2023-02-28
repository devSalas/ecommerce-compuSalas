import Header from "../../components/global/Header";
import Anuncio from "../../components/home/Anuncios/Anuncio";
import AnuncioGrande from "../../components/home/Anuncios/AnuncioGrande";
import Categorias from "../../components/home/Categorias/Categorias";
import ProductosSection from "./ListaProductos";
import Inicio from "../../components/global/Inicio";
import Seccion from "../../components/global/Seccion";

export default function index() {
  return (
    <div>
      <main className="max-w-7xl m-auto px-4">
        <section className="grid md:grid-cols-4 gap-4 mt-4">
          <article>
            <Categorias />
          </article>
          <article className="col-span-3">
            <Inicio />
          </article>
        </section>
        <Seccion />
        <section className="mt-4">
          <div>
            <h2 className="text-xl py-4">productos</h2>
          </div>
          <ProductosSection />
        </section>
      </main>
    </div>
  );
}
