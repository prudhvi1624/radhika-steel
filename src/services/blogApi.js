import API from "./api";

export const getBlogs = () => API.get("/blogs");
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
export const updateBlog = (id, data) =>
  API.put(`/blogs/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
