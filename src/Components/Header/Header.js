import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

import {Link} from "react-router-dom";

const Header = () => {

    return (
        <AppBar style={{background: 'red', display: 'flex' }} position="static">
            <Toolbar>
                <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link style={{ fontWeight: 900, color:'white', textDecoration:'none'}} to="/">
                        My Shopping Cart
                    </Link>
                </Typography>
                <Button style={{fontWeight: 900}} color="inherit">Login</Button>
                <Link to="/cart">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <ShoppingCartIcon style={{color: 'white'}} />
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Header;