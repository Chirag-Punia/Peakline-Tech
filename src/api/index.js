import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api' });

export const getProducts = () => API.get('/products');
export const getProduct = (id) => API.get(`/products/${id}`);
export const createProduct = (formData) => API.post('/products', formData);
export const updateProduct = (id, formData) => API.put(`/products/${id}`, formData);
export const deleteProduct = (id) => API.delete(`/products/${id}`);