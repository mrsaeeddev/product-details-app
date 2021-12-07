import { API_URL } from "../constants/server"


export const fetchProducts = async () => fetch(`${API_URL}/product`).then(res => res.json())

export const fetchUpdatedProducts = async (subcategoryId: string) => fetch(`${API_URL}/product/?subcategory-id=${subcategoryId}`).then(res => res.json())

export const fetchCategories = async () => fetch(`${API_URL}/category`).then(res => res.json())
