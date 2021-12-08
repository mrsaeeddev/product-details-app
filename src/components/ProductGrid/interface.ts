import { ImageSourcePropType, ImageURISource } from "react-native";

interface brand {
    name: string,
}

export interface product {
    name: string,
    brand: brand,
    price: number,
    img: any,
}

export interface products {
    products: product[]
}