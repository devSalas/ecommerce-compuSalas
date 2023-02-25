import { useRef } from 'react';
import style from './Contador.module.css'
import sonido from '../../../../public/sonido-pop.wav'
export default function Contador({ numero }: { numero: number }) {
  const isAdded = useRef<HTMLDivElement>(null);
  const sonidoPop = new Audio(sonido)
  if(numero){
    if(isAdded.current){
      isAdded.current.classList.add(style.flip)
      console.log(sonidoPop)
      sonidoPop.play()
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
