import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";    //import of "Product"

import useStyles from "./styles";           //import of styles

//All products on main page:
// const products = [
//     { id: 1, name: "shoes", description: "running shoes", price: "$5", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Adidas_Conductor_High_Olympics_1988_re-edition_sneakers.jpg/640px-Adidas_Conductor_High_Olympics_1988_re-edition_sneakers.jpg" },
//     { id: 2, name: "macbook", description: "apple macbook", price: "$10", image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Macbook_white_redjar_20060603.jpg" },

// ];

//console.log(products)

const Products = ({products}) => {
    const classes = useStyles();            //application of styles

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            {/* Displays all products: */}
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} /> {/* //application of "Product" */}
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;