import { useSelector } from 'react-redux'
import Product from './Product'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const NoPageFound = () => {
  const productList = useSelector((state) => state.productList)
  const { products } = productList

  return (
    <Jumbotron>
      <Container className='text-center'>
        <img src='/product-404.png' alt='404' />
        <p>
          <strong>This is not a page you're looking for.</strong>
        </p>
        <p>
          Try searching or go to
          <Link to='/'> ElectroMart's home page.</Link>
        </p>
        {!products && (
          <p className='text-muted p-3'>
            Here are some of best products instead:
          </p>
        )}

        {products && (
          <Row>
            {products.map((product, i) => (
              <Col sm={12} md={6} lg={3} xl={3} key={i}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Jumbotron>
  )
}

export default NoPageFound
