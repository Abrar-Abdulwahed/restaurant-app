"use client";
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Product } from "@/utils/types";
import { Card, CardContent, CardActions, CardHeader, CardMedia, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';


const ProductCard = ({ product }: { product: Product }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={product.title}
                subheader={product.category}
            />
            <CardMedia
                component="img"
                height="194"
                image={product.images[0]}
                alt={product.title}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductCard