import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Ratings from '../components/Ratings'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()
  useEffect(() => dispatch(listProductDetails(match.params.id)), [
    dispatch,
    match,
  ])

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productStatus =
    product && product.countInStock === 0 ? 'Out of Stock' : 'In Stock'

  const productQty =
    product &&
    [...Array(product.countInStock).keys()].map((x) => (
      <option key={x + 1} value={x + 1}>
        {x + 1}
      </option>
    ))

  return (
    <>
      <Link className='btn btn-dark my-4' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : product === {} ? (
        <Message>Product Empty.</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup>
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
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col className='m-auto'>Qty</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {productQty}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Link
                  to={`/cart/${match.params.id}?qty=${qty}`}
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
      )}
    </>
  )
}

export default ProductScreen
