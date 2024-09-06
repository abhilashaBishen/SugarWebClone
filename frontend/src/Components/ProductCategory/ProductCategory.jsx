
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Productsdata from "../Assets/Productsdata.js"; 
import './ProductCategory.css'

function ProductCategory({ category }) {
  // console.log('catergor Prop',category)
  // console.log("Product adata here",Productsdata);
 
  const categoryProducts = Productsdata.filter(product => product.category === category); 
// console.log("chekc it heree",categoryProducts);
// console.log("Filtered Products:", categoryProducts); 

const categoryBanner ={
  lips: 'url(https://d32baadbbpueqt.cloudfront.net/Collection/f76cd2bc-ee38-4f95-88cf-67d863f1a3d4.jpg)',
  eyes:'url(https://d32baadbbpueqt.cloudfront.net/Collection/c4d71df7-7256-468f-b3b1-5e625cbac804.jpg)',
face:'url(https://d32baadbbpueqt.cloudfront.net/Collection/225aa2cf-7ec5-4b44-8340-f84ea2251b05.jpg)',
nail: 'url(https://images.sugarcosmetics.com/Collection/6eba1a97-b09c-4451-9f0f-ef4a5c7d784e.gif)',
skincare:'url()',
newlaunch:'url(https://images.sugarcosmetics.com/Collection/9397f9eb-d3f7-4cee-b778-9ff5cc27af70.jpg)',
bestseller:'url(https://images.sugarcosmetics.com/Collection/d62e3eef-e37e-48c7-9b04-ee0996808d44.jpg)',
gifting:'url(https://images.sugarcosmetics.com/Collection/639d81de-7887-4c61-b62e-6c863b905bf4.jpg)'
}

const bannerStyle ={
  backgroundImage:categoryBanner[category] || 'none',
  backgroundSize:'cover',
  backgroundPosition:'center',
  color:'black',
  padding:'120px',
  // marginTop:'-0'
};
  return (
    <div className='containerProCategory'>
      <h1 style={bannerStyle}>
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
        </h1>
      
      <div className="product-list">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;

