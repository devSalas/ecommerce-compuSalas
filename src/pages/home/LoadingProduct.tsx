import React from "react";

export default function LoadingProduct() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      <div className="aspect-square bg-neutral-100 rounded-xl animate-pulse"></div>
      <div className="aspect-square bg-neutral-100 rounded-xl animate-pulse"></div>
      <div className="aspect-square bg-neutral-100 rounded-xl animate-pulse"></div>
      <div className="aspect-square bg-neutral-100 rounded-xl animate-pulse"></div>
    </section>
  );
}
