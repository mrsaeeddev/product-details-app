import React from "react";
import { View, StyleSheet } from "react-native";
import ProductCard from "../ProductCard";
import { globalStyles } from "../../globalStyles";
import { products } from "./interface";

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center' // if you want to fill rows left to right
    },
})

function ProductGrid(props: products) {

    return (
        <View style={styles.grid}>
            {props.products.map((v) => <ProductCard product={v} />)}
        </View>
    )
}

export default ProductGrid;
