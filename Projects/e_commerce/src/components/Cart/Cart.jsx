import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles"    //import of styles.js
import CartItem from "./CartItem/CartItem";


//takes "cart" as property:
const Cart = ({ cart }) => {
    const classes = useStyles();      //application of styles.js

    // 1. if cart is empty
    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    );

    // 2. if cart is populated
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>

            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</button>
                    <button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</button>
                </div>
            </div>
        </>
    );

    //check if cart has products
    if (!cart.line_items) return 'Loading';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;