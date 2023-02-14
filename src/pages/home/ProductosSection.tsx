import React from "react";
import Card from "../../components/home/Card";

export default function ProductosSection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card
        id="1"
        image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
        title="audifonos"
        category="accesorios"
        price="1234"
        description="lorem lorem lorem lorem lorem"
      />
      <Card
        id="1"
        image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
        title="audifonos"
        category="accesorios"
        price="1234"
        description="lorem lorem lorem lorem lorem"
      />
      <Card
        id="1"
        image="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/noname-34-1024x560.png"
        title="audifonos"
        category="accesorios"
        price="1234"
        description="lorem lorem lorem lorem lorem"
      />
    </section>
  );
}
