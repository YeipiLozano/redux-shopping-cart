import React, {useState} from 'react';
import {
  GridContainer,
  ProductsContainer,
  TagsContainer,
} from './Products.styles';
import Card from '../../components/card';
import Checkbox from '../../components/checkbox';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const {products, loading, categories} = useProducts();
  console.log(categories);
  return (
    <ProductsContainer>
      <div>
        <TagsContainer>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <h2>Categories</h2>
              {categories.map((category)=>(
                <Checkbox key={category.id} label={category.name} />
              ))}            
            </>
          )}
        </TagsContainer>
      </div>
      <GridContainer>
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              productName={product.name}
              price={product.price}
              department={product.categories[0]}
              image={product.images[0]}
            />
          ))
        )}
      </GridContainer>
    </ProductsContainer>
  );
};

export default Products;
