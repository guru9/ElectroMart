import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../mockApi/products'

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product, i) => (
          <Col sm={12} md={6} lg={3} xl={3} key={i}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
