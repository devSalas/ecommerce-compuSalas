import React from "react";
import Contador from "./Contador";
import Carrito from "../../icons/Carrito";
import { useStore } from "../../../stores/productStore";
import { Link } from "react-router-dom";

export default function BtnCarrito() {
  const store = useStore();

  return (
    <button className="flex items-center gap-6">
      <div className="relative">
        <Link to={"/checkout"}>
          <Carrito />
          <Contador numero={store.Products.length} />
        </Link>
      </div>
      <div className="text-left md:block hidden">
        <Link to={"/checkout"}>
          <p className="text-slate-500 text-sm">Total</p>
          <p className="font-semibold">$0.00</p>
        </Link>
      </div>
    </button>
  );
}
