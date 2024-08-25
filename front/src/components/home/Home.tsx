
import Cards from '../cards/Cards'
import { getProducts } from '@/helpers/product.helpers';


const Home = async() => {
  const products = await getProducts();
  return (
    
    <div className="my-32 flex flex-col items-center justify-center">
  
      <Cards products={products}/>
    </div>
  
  )
}

export default Home;

/* 
{ <Carousel images= {carouselImagesToPreLoad} /> }
import Carousel from  "@/components/carousel/Carousel";
import carouselImagesToPreLoad from "..//../utils/images"; */