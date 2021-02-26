import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(listProducts()), [dispatch])

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <Row>
          {products.map((product, i) => (
            <Col sm={12} md={6} lg={3} xl={3} key={i}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
