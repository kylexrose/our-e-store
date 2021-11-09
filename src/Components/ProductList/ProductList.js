import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Card, CardActions, CardContent, CardHeader,
  CardMedia, IconButton, Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import React from 'react';
import { useShoppingCart } from '../../Contexts/cartContext';

const ProductList = (props) => {
  const {products} = props;
  
  const { addItemToCart } =  useShoppingCart();

  return (
    <Box style={{ display: 'flex', justifyContent:'space-around', flexWrap: 'wrap'}}>
      {products.map(product => (
        <Box mb={6} key={product.id} >
          <Card sx={{ width: '250px' }}>
            <CardHeader
              action={
                <Box>
                  <Typography color="secondary" fontWeight="bold">
                    $ {product.price} 
                  </Typography>
                </Box>
              }
              title={product.title}
              subheader={product.brand}
            />
            <CardMedia
              component="img"
              height="194"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: "100%"}}>
                <Button variant="text"
                onClick={
                  () => addItemToCart({ id: product.id, title: product.title, price: product.price, image: product.image})}
                  >
                    Add to cart
                  </Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;