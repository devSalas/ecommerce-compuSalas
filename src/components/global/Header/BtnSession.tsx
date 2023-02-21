import User from "../../icons/Usuario";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function BtnSession() {
  const [active, setActive] = useState(false);

  return (
    <div className="md:relative ">
      <button
        onClick={() => setActive(!active)}
        className=" flex items-center gap-2"
      >
        <User />
        <div className="text-left md:block hidden">
          <p className="text-slate-500 text-sm">Login</p>
          <p className="font-semibold">Account</p>
        </div>
      </button>
      {active ? (
        <div className="absolute z-50 md:top-12 md:w-32 bottom-16 left-0 w-full border shadow-lg rounded m-2 bg-white md:h-40">
          <Link to={"/login"}>
            <button className="p-3 w-full hover:bg-sky-200">Login</button>
          </Link>
          <Link to={"/signin"}>
            <button className="p-3 w-full hover:bg-sky-200">Signin</button>
          </Link>
          <button className="p-3 w-full hover:bg-red-200">Logout</button>
        </div>
      ) : null}
    </div>
  );
}
