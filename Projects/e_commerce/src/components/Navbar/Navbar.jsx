import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, /*MenuItem, Menu,*/ Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


import logo from "../../assets/logo.webp"   //picture for navigation bar
import useStyles from "./styles";           //import of styles

//'Navbar' accepts 'totalItems' property:
const Navbar = ({ totalItems }) => {
    const classes = useStyles()             //application of styles.js

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    {/* image and page heaing: */}
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        My Commerce App
                    </Typography>

                    <div className={classes.glow} />

                    {/* cart button: */}
                    <div className={classes.button}>
                        <IconButton area-label='Show cart items' color='inherit'>
                            <Badge overlap="rectangular" badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar