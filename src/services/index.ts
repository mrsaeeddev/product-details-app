export const fetchProducts = async () => fetch('http://localhost:3000/product').then(res => res.json())

export const fetchCategories = async () => fetch('http://localhost:3000/category').then(res => res.json())
