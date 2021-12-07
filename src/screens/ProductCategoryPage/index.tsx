import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MainCategoryBanner from "../../components/MainCategoryBanner";
import ProductGrid from "../../components/ProductGrid";
import SubCategorySelector from "../../components/SubCategorySelector";
import { globalStyles } from "../../globalStyles";
import { useQuery } from 'react-query'
import { fetchCategories, fetchProducts, fetchUpdatedProducts } from "../../services";
import Loader from "../../components/Loader";
import { filterSubCategories } from "../../helpers";

function ProductCategoryPage() {
    const [products, setProducts] = useState([])
    const [enableMountCalls, setEnableMountCalls] = useState(true)
    const [enableUpdateCall, setEnableUpdateCall] = useState(false);
    const [subCategoryId, setSubCategoryId] = useState('');

    useEffect(() => {
        setEnableMountCalls(false);
    }, []);

    const { isLoading: isCategoryLoading, error: categoryError, data: categoryData } = useQuery('categoryData', fetchCategories, {
        enabled: enableMountCalls
    })

    const { isLoading: isProductLoading, error: productError, data: productData } = useQuery('productData', fetchProducts, {
        onSuccess: (data) => setProducts(data),
        enabled: enableMountCalls,
    })

    const { isLoading: isUpdateProductLoading, error: updateProductError, data: updatedProductData } = useQuery(['updatedProductData',
        subCategoryId], () => fetchUpdatedProducts(subCategoryId),
        {
            onSuccess: (data) => setProducts(data),
            enabled: enableUpdateCall,
        })

    if (isCategoryLoading) return <Loader />

    const handlePress = (subcategories: any) => {
        setEnableUpdateCall(true)
        setSubCategoryId(subcategories.toLowerCase());
    }

    return (
        <View>
            <MainCategoryBanner name={categoryData[0].name} />
            <SubCategorySelector handlePress={handlePress} subcategories={filterSubCategories(categoryData[0].subCategories)} />
            {isProductLoading ? <Text>Product data loading...</Text> : <ProductGrid products={products} />}
        </View>
    )
}

export default ProductCategoryPage;