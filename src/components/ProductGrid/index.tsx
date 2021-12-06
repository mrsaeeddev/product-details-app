import React from "react";
import { View, StyleSheet } from "react-native";
import ProductCard from "../ProductCard";
import { globalStyles } from "../../globalStyles";

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center' // if you want to fill rows left to right
    },
})

function ProductGrid() {
    return (
        <View style={styles.grid}><ProductCard />
            <ProductCard />
        </View>
    )
}

export default ProductGrid;
