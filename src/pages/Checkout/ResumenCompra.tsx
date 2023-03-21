import React from "react";

export default function ResumenCompra({ store }: any) {
  return (
    <section className="rounded bg-neutral-100 text-gray-800 p-6 ">
      <h3 className="font-bold text-2xl text-slate-600 py-4">
        Resumen de Compra
      </h3>
      <div className="flex justify-between py-2 border-t">
        <p>Subtotal</p>
        <p>{store.subTotal}</p>
      </div>
      <div className="flex justify-between py-2 border-b">
        <p>Envío</p>
        <p>Gratis</p>
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">Total</p>
        <p className="text-red-500 text-xl font-bold">{store.totalPrice}</p>
      </div>
    </section>
  );
}
