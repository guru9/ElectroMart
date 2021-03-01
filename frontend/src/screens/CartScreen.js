import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  ListGroup,
  Image,
  ButtonGroup,
  Button,
  Form,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  const removeFromCartHandler = (id) => {
    console.log('remove prod')
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <Message>
          Cart Empty. <Link to='/'>Go Back</Link>
        </Message>
      ) : (
        <Row>
          <Col md={8}>
            <ListGroup>
              {cartItems.map((product, id) => (
                <ListGroup.Item key={id}>
                  <Row>
                    <Col md={3}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={8}>
                      <Row>
                        <Col md={8}>
                          <Link
                            to={`/product/${product.productId}`}
                            className='prod-thumb'
                          >
                            {product.name}
                          </Link>
                          <strong>
                            <h4 className='pt-2'>${product.price}</h4>
                          </strong>
                        </Col>
                        <Col md={4} className='m-auto'>
                          {product.countInStock > 0 && (
                            <Form.Control
                              as='select'
                              value={product.qty}
                              onChange={(e) =>
                                dispatch(
                                  addToCart(
                                    product.productId,
                                    Number(e.target.value)
                                  )
                                )
                              }
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          )}
                        </Col>
                      </Row>
                    </Col>
                    <Col md={1} className='m-auto'>
                      <Button
                        type='button'
                        variant='light'
                        style={{ boxShadow: 'none', background: 'transparent' }}
                        onClick={() => removeFromCartHandler(product.productId)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <strong>PRICE DETAILS</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>
                    <strong>
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </strong>
                  </Col>
                </Row>
                <Row className='pt-4'>
                  <Col>SUBTOTAL</Col>
                  <Col>
                    <strong>
                      $
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn btn-safran btn-block'
                  variant='dark'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  <i className='fas fa-money-check-alt fa-2 pr-2'></i>
                  Proceed to checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  )
}

export default CartScreen
