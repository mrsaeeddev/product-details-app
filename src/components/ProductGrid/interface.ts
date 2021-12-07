interface brand {
    name: string,
}

export interface product {
    name: string,
    brand: brand,
    price: number,
}

export interface products {
    products: product[]
}