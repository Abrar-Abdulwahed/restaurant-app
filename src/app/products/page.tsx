import * as React from 'react';
import { Product } from "@/utils/types";
import axios from "axios"
import ProductCard from '@/components/products/ProductCard';
import { Container, Box } from '@mui/material';

const ProductsPage = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/products`);
    const products: Product[] = response.data.products;
    console.log('products are', products)

    return (
        <Container maxWidth="xl">
            <Box sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(4, 1fr)',
                },
                justifyItems: 'center'
            }} justifyItems="center">
                {products?.map(product =>
                    <ProductCard product={product} />
                )}
            </Box >
        </Container>
    )
}

export default ProductsPage