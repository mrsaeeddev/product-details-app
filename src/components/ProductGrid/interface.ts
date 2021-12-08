import { ImageSourcePropType } from "react-native";

interface brand {
    name: string,
}

export interface product {
    name: string,
    brand: brand,
    price: number,
    img: ImageSourcePropType,
}

export interface products {
    products: product[]
}