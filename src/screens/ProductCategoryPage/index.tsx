import React from "react";
import { View } from "react-native";
import MainCategoryBanner from "../../components/MainCategoryBanner";
import ProductGrid from "../../components/ProductGrid";
import SubCategorySelector from "../../components/SubCategorySelector";
import { globalStyles } from "../../globalStyles";

function ProductCategoryPage() {
    return (
        <View>
            <MainCategoryBanner />
            <SubCategorySelector />
            <ProductGrid />
        </View>
    )
}

export default ProductCategoryPage;