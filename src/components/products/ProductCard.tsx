import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Product } from '@/utils/types';

const isNew = (createdAt: Date) => {
    const createdDate = createdAt; // new Date(createdAt);
    const now = new Date();
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);
    return createdDate >= startOfLastMonth && createdDate <= endOfLastMonth;
};

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card
            sx={{
                position: 'relative',
                width: 300,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': {
                    boxShadow: 6,
                },
                '&:hover .overlay': { opacity: 1 },
                '&:hover .buttons': { opacity: 1 },
                backgroundColor: "secondary.light"
            }}
        >
            {/* Hover Overlay for Entire Card */}
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                }}
            >
                {/* Add to Cart Button first */}
                <Button
                    variant="contained"
                    sx={{ mb: 2, borderRadius: 0, backgroundColor: "background.default", color: "primary.main", textTransform: 'capitalize', padding: '.6rem 4rem' }}
                >
                    Add to cart
                </Button>

                {/* Action Buttons (Share, Compare, Favorite) */}
                <Box display="flex" justifyContent="space-around" width="100%" color="#fff">
                    <IconButton color="inherit">
                        <ShareIcon />
                        <Typography component="small" fontSize="14px">Share</Typography>
                    </IconButton>
                    <IconButton color="inherit">
                        <CompareArrowsIcon />
                        <Typography component="small" fontSize="14px">Compare</Typography>
                    </IconButton>
                    <IconButton color="inherit">
                        <FavoriteBorderIcon />
                        <Typography component="small" fontSize="14px">Like</Typography>
                    </IconButton>
                </Box>
            </Box>

            {/* Product Image */}
            <Box sx={{ position: 'relative', overflow: 'hidden', backgroundColor: "white" }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={product.thumbnail}
                    alt={product.title}
                />
            </Box>

            {/* Discount Badge */}
            {product.discountPercentage > 0.9 && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 45,
                        height: 45,
                        lineHeight: 2.8,
                        backgroundColor: 'tertiary.main',
                        color: 'white',
                        px: 1,
                        borderRadius: '9999999px',
                        zIndex: 3,
                    }}
                >
                    -{Math.round(product.discountPercentage)}%
                </Box>
            )}

            {/* New Badge */}
            {isNew(product.meta.createdAt) && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 45,
                        height: 45,
                        lineHeight: 2.8,
                        backgroundColor: 'tertiary.light',
                        color: 'white',
                        px: 1,
                        borderRadius: '9999999px',
                        zIndex: 3,
                    }}
                >
                    New
                </Box>
            )}

            {/* Product Info */}
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Box display="flex" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        Rp {product.price}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
