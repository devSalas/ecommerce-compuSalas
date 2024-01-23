import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Lupa from "../../icons/Lupa";
import { queryStore } from "../../../stores/productStore";
import {useSearchParams,  useRoutes} from 'react-router-dom';

export default function Buscador() { 
  const {setQuery,query} = queryStore()
  const searchParams=useSearchParams()
  
  useEffect(()=>{
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const valorSearch = urlParams.get('search');
      if(valorSearch == null) return
      setQuery(valorSearch ?? "")

  },[])



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    const newUrl = new URLSearchParams()
    newUrl.set("search",query)
    window.history.pushState(null, null, '?search='+e.target.value);

    
    let searchTerm= e.target.value.trim()
    if(searchTerm == " ") return 
    
    setQuery(searchTerm);


  };

  const handleSubmit =(e:FormEvent<HTMLFormElement>)=>e.preventDefault()




  return (
    <form
      onSubmit={handleSubmit}
      className="group flex justify-between w-full md:max-w-lg"
    >
      <div className="w-full flex px-4 border  group-hover:border-neutral-400">
        <input
          onChange={handleChange}
          className="w-full outline-none"
          type="search"
          placeholder="buscar"
          value={query}
          
        />
        {/* <select className="text-slate-500 text-sm outline-none" name="" id="">
          <option value="">All Category</option>
          <option value="">computadoras</option>
          <option value="">procesadores</option>
          <option value="">rams</option>
        </select> */}
      </div>
      <button className="w-16 h-10 flex justify-center items-center bg-sky-500">
        <Lupa />
      </button>
    </form>
  );
}
