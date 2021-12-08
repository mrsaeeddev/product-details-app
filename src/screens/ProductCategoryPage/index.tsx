import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MainCategoryBanner from "../../components/MainCategoryBanner";
import ProductGrid from "../../components/ProductGrid";
import SubCategorySelector from "../../components/SubCategorySelector";
import { globalStyles } from "../../globalStyles";
import { QueryClient, useQuery, useQueryClient } from 'react-query'
import { fetchCategories, fetchProducts, fetchUpdatedProducts } from "../../services";
import Loader from "../../components/Loader";
import { filterSubCategories } from "../../helpers";

function ProductCategoryPage() {
    const [products, setProducts] = useState([])

    const [subCategoryId, setSubCategoryId] = useState('');

    const [enableUpdateCall, setEnableUpdateCall] = useState(false);

    const queryClient = useQueryClient();

    const { isLoading: isCategoryLoading, error: categoryError, data: categoryData, isFetching: isCategoryFetching } = useQuery('categoryData', fetchCategories)

    const { isLoading: isProductLoading, error: productError, data: productData, refetch, isFetching: isProductFetching } = useQuery('productData', fetchProducts, {
        onSuccess: (data) => setProducts(data),
    })

    const { isLoading: isUpdateProductLoading, error: updateProductError, data: updatedProductData, isFetching: isUpdateProductFetching } = useQuery(['productData', subCategoryId], () => fetchUpdatedProducts(subCategoryId),
        {
            onSuccess: (data) => setProducts(data),
            enabled: enableUpdateCall
        })


    if (isProductLoading || isProductFetching) return <Loader />
    if (isUpdateProductLoading || isUpdateProductFetching) return <Loader />

    const handlePress = (subcategory: string) => {
        setEnableUpdateCall(true);
        setSubCategoryId(subcategory.toLowerCase());
    }

    const handleAllProducts = () => {
        setEnableUpdateCall(false);
        setSubCategoryId('')
        refetch();
    }

    return (
        <View>
            {isCategoryLoading || isCategoryFetching ? <Loader /> : <MainCategoryBanner name={categoryData[0].name} />}
            <SubCategorySelector handlePress={handlePress} handleAllProducts={handleAllProducts} subcategories={filterSubCategories(categoryData[0].subCategories)} />
            {isProductFetching ? <Loader /> : <ProductGrid products={products} />}
            {products.length === 0 && <Text style={globalStyles.textCenter}>Awe! No products to show in this category. We maybe soon adding them. In the meantime, see other products.</Text>}
        </View>
    )
}

export default ProductCategoryPage;