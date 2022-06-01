import React, {useState} from 'react';
import {ProductsContainer} from './Products.styles';
import Card from '../../components/card';

const Products = () => {
  const [products] = useState([
    {
      color: 'lime',
      department: 'Garden',
      productName: 'Licensed Cotton Towels',
      price: '795.00',
      productAdjective: 'Fantastic',
      productMaterial: 'Fresh',
    },
    {
      color: 'azure',
      department: 'Automotive',
      productName: 'Small Fresh Fish',
      price: '215.00',
      productAdjective: 'Rustic',
      productMaterial: 'Metal',
    },
    {
      color: 'grey',
      department: 'Outdoors',
      productName: 'Incredible Soft Chips',
      price: '797.00',
      productAdjective: 'Handmade',
      productMaterial: 'Granite',
    },
    {
      color: 'mint green',
      department: 'Jewelery',
      productName: 'Handmade Concrete Car',
      price: '660.00',
      productAdjective: 'Licensed',
      productMaterial: 'Cotton',
    },
    {
      color: 'fuchsia',
      department: 'Toys',
      productName: 'Handcrafted Soft Shirt',
      price: '182.00',
      productAdjective: 'Tasty',
      productMaterial: 'Cotton',
    },
    {
      color: 'white',
      department: 'Tools',
      productName: 'Practical Wooden Shirt',
      price: '253.00',
      productAdjective: 'Ergonomic',
      productMaterial: 'Frozen',
    },
    {
      color: 'teal',
      department: 'Beauty',
      productName: 'Generic Plastic Computer',
      price: '962.00',
      productAdjective: 'Sleek',
      productMaterial: 'Wooden',
    },
    {
      color: 'black',
      department: 'Games',
      productName: 'Licensed Steel Keyboard',
      price: '964.00',
      productAdjective: 'Practical',
      productMaterial: 'Rubber',
    },
    {
      color: 'green',
      department: 'Grocery',
      productName: 'Small Wooden Pants',
      price: '163.00',
      productAdjective: 'Awesome',
      productMaterial: 'Metal',
    },
    {
      color: 'silver',
      department: 'Health',
      productName: 'Refined Rubber Fish',
      price: '442.00',
      productAdjective: 'Rustic',
      productMaterial: 'Rubber',
    },
    {
      color: 'teal',
      department: 'Kids',
      productName: 'Practical Concrete Car',
      price: '589.00',
      productAdjective: 'Fantastic',
      productMaterial: 'Wooden',
    },
    {
      color: 'turquoise',
      department: 'Computers',
      productName: 'Tasty Cotton Shirt',
      price: '975.00',
      productAdjective: 'Refined',
      productMaterial: 'Cotton',
    },
    {
      color: 'red',
      department: 'Grocery',
      productName: 'Tasty Rubber Gloves',
      price: '564.00',
      productAdjective: 'Awesome',
      productMaterial: 'Wooden',
    },
    {
      color: 'turquoise',
      department: 'Garden',
      productName: 'Licensed Fresh Ball',
      price: '776.00',
      productAdjective: 'Intelligent',
      productMaterial: 'Frozen',
    },
    {
      color: 'ivory',
      department: 'Baby',
      productName: 'Rustic Cotton Ball',
      price: '570.00',
      productAdjective: 'Tasty',
      productMaterial: 'Rubber',
    },
    {
      color: 'tan',
      department: 'Jewelery',
      productName: 'Refined Frozen Tuna',
      price: '752.00',
      productAdjective: 'Gorgeous',
      productMaterial: 'Rubber',
    },
    {
      color: 'black',
      department: 'Beauty',
      productName: 'Small Wooden Salad',
      price: '709.00',
      productAdjective: 'Generic',
      productMaterial: 'Soft',
    },
    {
      color: 'orchid',
      department: 'Music',
      productName: 'Gorgeous Cotton Keyboard',
      price: '883.00',
      productAdjective: 'Handmade',
      productMaterial: 'Concrete',
    },
    {
      color: 'silver',
      department: 'Grocery',
      productName: 'Fantastic Rubber Mouse',
      price: '965.00',
      productAdjective: 'Unbranded',
      productMaterial: 'Granite',
    },
    {
      color: 'pink',
      department: 'Grocery',
      productName: 'Practical Granite Soap',
      price: '328.00',
      productAdjective: 'Unbranded',
      productMaterial: 'Granite',
    },
  ]);
  return (
    <ProductsContainer>
      {products.map(({productName, price, department}) => (
        <Card
          key={productName}
          productName={productName}
          price={price}
          department={department}
        />
      ))}
    </ProductsContainer>
  );
};

export default Products