import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../component/Breadcrums/Breadcrums';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../component/DescriptionBox/DescriptionBox';
import ReletableProduct from '../component/ReletableProduct/ReletableProduct';

function Product() {
    const {all_product} = useContext(ShopContext);
    const {ProductId} = useParams();
    const product  = all_product.find((e)=>e.id === Number(ProductId))
  return (
    <div>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <ReletableProduct/>
    </div>
  )
}

export default Product;
