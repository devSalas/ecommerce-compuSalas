import React from "react";
import Skeleton from "react-loading-skeleton";
import CardSkeleton from "../../components/home/Card/CardSqueleton";

export default function LoadingProduct() {
  const data = new Array(20).fill(0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-16">
      {data.map((el,index) => (
        <CardSkeleton key={index}/>
      ))}
    </div>
  );
}

