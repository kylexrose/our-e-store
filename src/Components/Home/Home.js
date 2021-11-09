import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import ProductList from '../ProductList/ProductList';
import { fetchProducts } from '../../fakeDatabase';

const HomePage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts().then(
      productData => {
        setProductData(productData);
      }
    )
  }, []);

  return (
    <Layout>
      <Box sx={{ height: '500px' }}>
        <ProductList products={productData} />
      </Box>
    </Layout>
  )
};

export default HomePage;