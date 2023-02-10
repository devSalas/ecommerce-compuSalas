import Header from "../../components/global/Header";
import Anuncio from "../../components/home/Anuncios/Anuncio";
import AnuncioMediano from "../../components/home/Anuncios/AnuncioMediano";
import AnuncioGrande from "../../components/home/Anuncios/AnuncioGrande";
import Categorias from "../../components/home/Categorias/Categorias";

export default function index() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl m-auto">
        <section className="flex">
          <aside className="">
            <Categorias />
          </aside>
          <article className="lg:flex gap-4 p-4">
            <div>
              <AnuncioMediano
                title="AirPods"
                image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
                category="accesorio"
                description="audifonos inalambricos "
                descuento="SUMER SALE 70%"
                id="1"
                price="192"
                url=""
              />
            </div>
            <div className="flex lg:flex-col lg:w-96">
              <Anuncio
                title="AirPods"
                image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
                category="accesorio"
                description="audifonos inalambricos"
                id="1"
                price="192"
                url=""
              />
              <Anuncio
                title="AirPods"
                image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
                category="accesorio"
                description="audifonos inalambricos"
                id="1"
                price="192"
                url=""
              />
            </div>
          </article>
        </section>

        <main>
          <section></section>

          <AnuncioGrande
            title="AirPods"
            image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
            category="accesorio"
            description="audifonos inalambricos "
            descuento="SUMER SALE 70%"
            id="1"
            price="192"
            url=""
          />
        </main>
      </main>
    </div>
  );
}
