import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
import Toaster from '../components/Toaster'

const HomeScreen = (history) => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(listProducts()), [dispatch])

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const welcomeUser =
    localStorage.getItem('userLoggedIn') &&
    history.location.pathname &&
    atob(localStorage.getItem('userLoggedIn'))

  return (
    <>
    <h3>LATEST PRODUCTS</h3>
      {welcomeUser && <Toaster>{welcomeUser}</Toaster>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        products &&
        (products.length === 0 ? (
          <Message>Products Empty.</Message>
        ) : (
          <Row>
            {products.map((product, i) => (
              <Col sm={12} md={6} lg={3} xl={3} key={i}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        ))
      )}
    </>
  )
}

export default HomeScreen
