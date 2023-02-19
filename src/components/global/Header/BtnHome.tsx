import React from "react";
import Home from "../../icons/Home";
import { Link } from "react-router-dom";

export default function BtnSession() {
  return (
    <button className=" flex items-center gap-2">
      <Link to={"/"}>
        <Home />
      </Link>
    </button>
  );
}
