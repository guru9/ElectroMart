import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Ratings from '../components/Ratings'
import axios from 'axios'

const ProductScreen = ({ match }) => {
  const [product, setproduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setproduct(data)
    }

    fetchProduct()
  }, [])

  const productStatus = product.countInStock === 0 ? 'Out of Stock' : 'In Stock'
  return (
    <>
      <Link className='btn btn-dark my-4' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
            className='prod-image'
          />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>{productStatus}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link
                to='/cart'
                className={`btn btn-warning btn-block ${
                  product.countInStock === 0 && 'disabled'
                }`}
              >
                <i className='fas fa-shopping-cart pr-2'></i>
                <strong>Add To Cart</strong>
              </Link>
              <Link
                to='/cart'
                className={`btn btn-safran btn-block ${
                  product.countInStock === 0 && 'disabled'
                }`}
              >
                <i className='fas fa-bolt  pr-2'></i>
                <strong>Buy Now </strong>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
