import Header from "../../components/global/Header";
import Anuncio from "../../components/home/Anuncios/Anuncio";
import AnuncioMediano from "../../components/home/Anuncios/AnuncioMediano";
import AnuncioGrande from "../../components/home/Anuncios/AnuncioGrande";
import Categorias from "../../components/home/Categorias/Categorias";
import Card from "../../components/home/Card";

export default function index() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl m-auto">
        <section className="flex">
          <aside className="">
            <Categorias />
          </aside>
          <article className="flex gap-4 p-4 flex-col lg:flex-row w-full">
            <div className="w-full h-full">
              <AnuncioMediano
                title="AirPods"
                image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
                category="accesorio"
                description="audifonos inalambricos "
                descuento="SUMER SALE 70%"
                id="1"
                price="192"
              />
            </div>
            <div className="flex lg:flex-col lg:w-96 gap-4">
              <Anuncio
                title="AirPods"
                image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
                category="accesorio"
                description="audifonos inalambricos"
                id="1"
                price="192"
              />
              <Anuncio
                title="AirPods"
                image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
                category="accesorio"
                description="audifonos inalambricos"
                id="1"
                price="192"
              />
            </div>
          </article>
        </section>

        {/* <main>
          <AnuncioGrande
            title="AirPods"
            image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
            category="accesorio"
            description="audifonos inalambricos "
            descuento="SUMER SALE 70%"
            id="1"
            price="192"
          />
          <Card
            id="1"
            image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
            title="audifonos"
            category="accesorios"
            price="1234"
            description="lorem lorem lorem lorem lorem"
          />
        </main> */}
      </main>
    </div>
  );
}
