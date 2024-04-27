import Cards from '../cards/Cards'
import productsToPreload from '../../utils/products'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <HomeContainer>
      <Cards products={productsToPreload}/>
    </HomeContainer>
  )
}

export default Home
