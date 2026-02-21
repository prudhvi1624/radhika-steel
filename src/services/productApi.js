import API from "./api";

export const getProducts = () => API.get("/products");
export const deleteProduct = (id) => API.delete(`/products/${id}`);
export const updateProduct = (id, data) =>
  API.put(`/products/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
