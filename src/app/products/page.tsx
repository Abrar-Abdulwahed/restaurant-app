import * as React from 'react';
import { Product } from "@/utils/types";
import axios from "axios"
import ProductCard from '@/components/products/ProductCard';
import { Box } from '@mui/material';


const ProductsPage = async () => {
    let products: Product[] = [];
    await axios.get('https://dummyjson.com/products').catch(response => {
        products = response.data.products;
    }).then((error) => { throw new Error('Something wend wrong!') });


    return (
        <Box sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
            },
            justifyItems: 'center'
        }} justifyItems="center">
            {products?.map(product =>
                <ProductCard product={product} />
            )}
        </Box >
    )
}

export default ProductsPage