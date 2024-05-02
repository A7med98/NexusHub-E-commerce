import axios from "axios";

const basic_URL = "https://fakestoreapi.com";

export const loginAuth = async (username,password) => {
  
    const response = await axios.post(`${basic_URL}/auth/login`, {
      username: username,
      password: password,
    });
    return response;

};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${basic_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
export const fetchTechProducts = async () => {
  try {
    const response = await axios.get(
      `${basic_URL}/products/category/electronics`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${basic_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
export const fetchCart = async (id) => {
  try {
    const response = await axios.get(`${basic_URL}/carts/user/${id}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
export const updateCart = async (id, products, date) => {
  try {
    const response = await axios.post(`${basic_URL}/carts`, {
      userId: id,
      date: date,
      products: products,
    });
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

