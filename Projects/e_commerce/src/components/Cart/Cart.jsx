import React from "react";

import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles"    //import of styles.js
import CartItem from "./CartItem/CartItem";
//Link functionality:
import { Link } from 'react-router-dom';


//takes properties:
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();      //application of styles.js

    // 1. function - if cart is empty:
    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, please
            <Link to='/' className={classes.link}> start adding some</Link>!
        </Typography>
    );

    // 2. function - if cart is populated:
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>

            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    //check if cart has products to prevent an error
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