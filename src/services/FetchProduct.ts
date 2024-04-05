import axios from "axios";

/* const url = "https://ecomerce-backend-wo0w.onrender.com/api/product"; */
const url = "http://compusalas.sunetya.site/api/product";

export const getProducts = () => {
	return axios.get(url).then((res) => res.data);
};

export const getOneProduct = async (id: string) => {
	const res = await axios.get(`${url}/${id}`);
	return res.data.product;
};
