import React, { useEffect } from "react";
import { View, Text } from "react-native";
import MainCategoryBanner from "../../components/MainCategoryBanner";
import ProductGrid from "../../components/ProductGrid";
import SubCategorySelector from "../../components/SubCategorySelector";
import { globalStyles } from "../../globalStyles";
import { useQuery } from 'react-query'
import { fetchCategories, fetchProducts } from "../../services";
import Loader from "../../components/Loader";
import { filterSubCategories } from "../../helpers";

function ProductCategoryPage() {
    const { isLoading: isCategoryLoading, error: categoryError, data: categoryData } = useQuery('categoryData', fetchCategories)

    const { isLoading: isProductLoading, error: productError, data: productData } = useQuery('productData', fetchProducts)


    if (isCategoryLoading) return <Loader />

    return (
        <View>
            <MainCategoryBanner name={categoryData[0].name} />
            <SubCategorySelector subcategories={filterSubCategories(categoryData[0].subCategories)} />
            {isProductLoading ? <Text>Product data loading...</Text> : <ProductGrid products={productData} />}
        </View>
    )
}

export default ProductCategoryPage;