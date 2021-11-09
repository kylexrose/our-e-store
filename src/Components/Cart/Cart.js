import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Layout from '../layout/Layout';
import { useShoppingCart } from '../../Contexts/cartContext';
import ReplayIcon from '@mui/icons-material/Replay';

const Cart = () => {
    const { shoppingCart, total, emptyCart } = useShoppingCart();

    if (shoppingCart.length < 1) {
        return (
            <Layout>
                theres no items to show here
            </Layout>
        )
    }

    return (
        <Layout>
            <Box>
                {shoppingCart.map(item =>
                    <Box key={item.id} mb={4}>
                        <CartItem item={item} />
                    </Box>
                )}
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
                <Box mb={2}>
                    <Typography fontWeight="bold">
                        Total: $ {total}
                    </Typography>
                </Box>
                <Box mb={2}>
                    <Button
                        variant="contained"
                        onClick={emptyCart}
                        startIcon={<ReplayIcon />}
                    >Empty Cart</Button>
                </Box>
                <Box mb={2}>
                    <Link to="/">
                        <Button variant="contained">Back to home</Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    )
};

export default Cart;