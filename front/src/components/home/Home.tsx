
import carouselImagesToPreLoad from "..//../utils/images";
import Cards from '../cards/Cards'
import { getProducts } from '@/helpers/product.helpers';
import Carousel from  "@/components/carousel/Carousel";
import { useState, useEffect } from 'react';





const Home = async() => {
  const products = await getProducts();
  return (
    
    <div className="my-32 flex flex-col items-center justify-center">
  {/*     <Carousel images= {carouselImagesToPreLoad} /> */}
      <Cards products={products}/>
    </div>
  
  )
}

export default Home;
