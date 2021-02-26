import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import CustomError from '../components/CustomError'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(listProducts()), [dispatch])

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <CustomError value={error.slice(-3)} message={error} />
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
