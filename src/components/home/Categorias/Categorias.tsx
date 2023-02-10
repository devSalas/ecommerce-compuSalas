import "./Categorias.css";

export default function Categorias() {
  return (
    <div className=" w-64 ">
      <nav className="">
        <h4 className="px-4 py-3 bg-red-500 text-white">Categorias</h4>
        <ul className="bg-white border">
          <li>
            <a href="">Computadoras</a>
          </li>
          <li>
            <a href="">Laptos</a>
            <ul className="bg-white shadow-2xl border">
              <li>
                <a href="">sub</a>
              </li>
              <li>
                <a href="">sub</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
