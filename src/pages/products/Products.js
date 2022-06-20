import React, {useEffect} from 'react';
import {
  GridContainer,
  ProductsContainer,
} from './Products.styles';
import Card from '../../components/card';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../utils/api';
import {receivedProducts} from '../../state/productsSlice';

const Products = () => {
  // getting ready to use our useAppDispatch hook;
  const dispatch = useDispatch();
  useEffect(() => {
    // The response we get from getProducts promise will then be sent to our reducer via dispatch.
    getData().then((products) => {
      dispatch(receivedProducts(products.data.products.items));
    });
  }, [dispatch]);
  const products = useSelector((state) => state.products.products);
  return (
    <ProductsContainer>
      <GridContainer>
        {products&&products.map((product) => (
          <Card
            key={product.id}
            product={product}
          />
        ))}
      </GridContainer>
    </ProductsContainer>
  );
};

export default Products;
