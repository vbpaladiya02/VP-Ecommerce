import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from "../../assets/sample.png"
import useStyles from "../Navbar/styles"

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inheirt'>
                    <Toolbar>
                        <Typography varriant="h6" className={classes.title} color='inherit'>
                            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                            Commerce.js
                        </Typography>
                        <div className = {classes.grow} />
                        <div className={classes.button} />
                            <IconButton aria-label='Show cart items' color='inherit'>
                                <Badge badgeComtent={2} color='Secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                    </Toolbar>
            </AppBar>
        </> 
    )
}


export default Navbar;