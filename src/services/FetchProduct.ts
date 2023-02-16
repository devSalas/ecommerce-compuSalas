import axios from "axios";

export const getProducts = () => {
	return axios
		.get("https://ecomerce-backend-wo0w.onrender.com/api/product")
		.then((res) => res.data);
};

const getOneProduct = (id: string) => {
	return axios
		.get("https://ecomerce-backend-wo0w.onrender.com/api/product", {
			params: { id },
		})
		.then((res) => res.data);
};
