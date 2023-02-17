import { useQuery } from "@tanstack/react-query";
import { getProducts, getOneProduct } from "../services/FetchProduct";

export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: getProducts });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getOneProduct(id),
  });
};
