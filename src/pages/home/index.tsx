import Header from "../../components/global/Header";
import Anuncio from "../../components/home/Anuncios/Anuncio";
import AnuncioMediano from "../../components/home/Anuncios/AnuncioMediano";
import AnuncioGrande from "../../components/home/Anuncios/AnuncioGrande";
import Categorias from "../../components/home/Categorias/Categorias";
import Card from "../../components/home/Card";
import ProductosSection from "./ProductosSection";

export default function index() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl m-auto px-4">
        <section className="grid md:grid-cols-4 gap-4 mt-4">
          <article>
            <Categorias />
          </article>
          <article className="col-span-3">
            <section className="grid lg:grid-cols-3 gap-4">
              <article className="lg:col-span-2">
                <AnuncioMediano
                  title="AirPods"
                  image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
                  category="accesorio"
                  description="audifonos inalambricos "
                  descuento="SUMER SALE 70%"
                  id="1"
                  price="192"
                />
              </article>
              <article className="flex lg:flex-col gap-4">
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
              </article>
            </section>
          </article>
        </section>
        <section className="grid lg:grid-cols-3 gap-4 mt-4">
          <article className="lg:col-span-2">
            <AnuncioGrande
              title="Xbox Series X"
              image="https://imageio.forbes.com/specials-images/imageserve/5fc62477020e531728a12494/Xbox-Series-X-Console/960x0.jpg?format=jpg&width=960"
              category="Gaminig"
              description="Consola de videojuego"
              descuento="10% Desc."
              price="500"
            />
          </article>
          <article className="flex lg:flex-col gap-4">
            <Anuncio
              title="Iphone"
              image="https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg"
              category="Telefonos"
              description="telefono"
              price="1000"
            />
            <Anuncio
              title="Mando PS5"
              image="https://e.rpp-noticias.io/normal/2020/04/07/521952_924941.jpg"
              category="accesorio"
              description="mando de PlayStation 5"
              price="110"
            />
          </article>
        </section>
        <section className="mt-4">
          <ProductosSection />
        </section>
      </main>
    </div>
  );
}
