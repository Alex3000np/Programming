import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";    //import of "Product"

import useStyles from "./styles";           //import of styles

//'Products' accepts 'products', 'onAddToCart' property:
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();            //application of styles

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            {/* Displays all products: */}
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} /> {/* application of "Product" and "cart" */}
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;