import React from "react";

export default function index() {
  return (
    <div className="w-full h-screen grid grid-cols-4">
      <div className="border m-2 p-16 bg-red-200 col-span-3">a</div>
      <div className="border m-2 p-16 bg-red-200">b</div>
      <div className="border m-2 p-16 bg-red-200">c</div>
      <div className="border m-2 p-16 bg-red-200">d</div>
      <div className="border m-2 p-16 bg-red-200">e</div>
    </div>
  );
}
