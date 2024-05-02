import Cards from '../cards/Cards'
import productsToPreload from '../../utils/products'

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <Cards products={productsToPreload}/>
    </div>
  )
}

export default Home
