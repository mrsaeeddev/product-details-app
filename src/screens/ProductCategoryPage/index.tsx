import React, { useEffect } from "react";
import { View } from "react-native";
import MainCategoryBanner from "../../components/MainCategoryBanner";
import ProductGrid from "../../components/ProductGrid";
import SubCategorySelector from "../../components/SubCategorySelector";
import { globalStyles } from "../../globalStyles";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { fetchCategories } from "../../services";

const queryClient = new QueryClient()

function ProductCategoryPage() {
    const { isLoading, error, data } = useQuery('repoData', fetchCategories
    )
    return (
        <View>
            <MainCategoryBanner />
            <SubCategorySelector />
            <ProductGrid />
        </View>
    )
}

export default ProductCategoryPage;