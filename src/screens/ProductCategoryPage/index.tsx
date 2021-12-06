import React, { useEffect } from "react";
import { View } from "react-native";
import MainCategoryBanner from "../../components/MainCategoryBanner";
import ProductGrid from "../../components/ProductGrid";
import SubCategorySelector from "../../components/SubCategorySelector";
import { globalStyles } from "../../globalStyles";
import { useQuery } from 'react-query'
import { fetchCategories } from "../../services";
import Loader from "../../components/Loader";

function ProductCategoryPage() {
    const { isLoading, error, data } = useQuery('categoryData', fetchCategories)

    if (isLoading) return <Loader />

    return (
        <View>
            <MainCategoryBanner />
            <SubCategorySelector />
            <ProductGrid />
        </View>
    )
}

export default ProductCategoryPage;