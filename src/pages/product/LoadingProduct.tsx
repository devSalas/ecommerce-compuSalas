import React from "react";

export default function LoadingProduct() {
  return (
    <div className="max-w-7xl m-auto py-8">
      <section className="grid md:grid-cols-2 h-96 gap-8">
        <article className="w-full h-96 bg-neutral-200 animate-pulse"></article>
        <article className="w-full h-96 bg-neutral-200 animate-pulse"></article>
      </section>
    </div>
  );
}
