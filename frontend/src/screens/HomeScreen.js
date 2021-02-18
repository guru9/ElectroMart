import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setproducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setproducts(data)
    }

    fetchProducts()
  }, [])

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
