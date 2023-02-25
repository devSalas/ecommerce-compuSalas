import React from "react";
import ListaProductos from "../home/ListaProductos";

export default function index() {
  return (
    <main className="max-w-7xl m-auto">
      <section className="mt-4">
        <div className="">
          <h2 className="text-2xl py-4">Products</h2>
        </div>

        <ListaProductos />
      </section>
    </main>
  );
}
