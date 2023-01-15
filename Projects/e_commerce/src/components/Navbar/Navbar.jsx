import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, /*MenuItem, Menu,*/ Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//'Link' to switch between pages:
import { Link, useLocation } from 'react-router-dom';


import logo from "../../assets/logo.webp"   //picture for navigation bar
import useStyles from "./styles";           //import of styles

//'Navbar' accepts 'totalItems' property:
const Navbar = ({ totalItems }) => {
    const classes = useStyles()             //application of styles.js
    const location = useLocation();         //verifies actual location (page)

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    {/* logo image and page heaing: */}
                    <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        My Commerce App
                    </Typography>

                    <div className={classes.grow} />
                    {/* only if path is home "/" - then do show cart button */}
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            {/* 'IconButton' also serves as a link to /cart page */}
                            <IconButton component={Link} to="/cart" area-label='Show cart items' color='inherit'>
                                <Badge overlap="rectangular" badgeContent={totalItems} color="secondary">   
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar