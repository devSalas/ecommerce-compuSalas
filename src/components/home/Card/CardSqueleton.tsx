import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
function CardSkeleton() {
    return(<figure>
      {/* <img className="object-contain aspect-square mb-1" src={image} /> */}
      <Skeleton className="object-contain aspect-square mb-1"/>
      <p className="text-sky-500 text-sm"><Skeleton count={1}/></p>
      <h4><Skeleton count={1}/></h4>
      <p className="text-red-500 font-bold"><Skeleton count={1}/></p>
  </figure>)
} 

export default CardSkeleton;