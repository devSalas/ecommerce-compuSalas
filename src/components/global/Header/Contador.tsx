import { useRef } from 'react';
import style from './Contador.module.css'

export default function Contador({ numero }: { numero: number }) {
  const isAdded = useRef<HTMLDivElement>(null);
  if(numero){
    if(isAdded.current){
      isAdded.current.classList.add(style.flip)
      setTimeout(() => {
        if(isAdded.current){
          isAdded.current.classList.remove(style.flip)
        }
        
      }, 500);
      
    }
  }
  return (
    <div ref={isAdded} className="bg-red-500 absolute -top-2 -right-2 text-white w-5 h-5 flex items-center justify-center rounded-full text-sm">
      {numero}
    </div>
  )
}
