import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";        //import of styles

// receiving "product" as parameter
const Product = ({ product }) => {
    const classes = useStyles();         //application of styles
     
    return (
        <Card className={classes.root}>

            {/* Product image: */}
            <CardMedia className={classes.media} image={product.image?.url} title={product.name} />

            <CardContent>
                {/* item name and price: */}
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                {/* item description: */}
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
            </CardContent>

            {/* add to cart button */}
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

        </Card >
    )
}

export default Product