import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
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
            <ScrollView horizontal={true}>{props.products.map((v, i) => <ProductCard key={i} product={v} />)}</ScrollView>
        </View>
    )
}

export default ProductGrid;
