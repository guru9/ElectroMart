import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Toaster from '../components/Toaster'
import Prompt from '../components/Prompt'

const CartScreen = ({ history }) => {
  const [show, setShow] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [item, setItem] = useState(null)

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const removeFromCartHandler = (id) => {
    setItem(cartItems.find((item) => item.productId === id))
    setModalShow(true)
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  const removeItem = async (rowData) => {
    await dispatch(removeFromCart(rowData.productId))
    setShow(true)
    setModalShow(false)
  }

  const modalShowChange = (modalValue) => {
    setModalShow(modalValue)
  }

  return (
    <>
    <h3>My Cart ({cartItems.length})</h3><br/>

      {modalShow && item && (
        <Prompt
          modalShow={modalShow}
          promptTitle='Remove Item'
          actionTitle='REMOVE'
          rowData={item}
          handleRemove={removeItem}
          handleModalShow={modalShowChange}
        >
          Are you sure you want to remove this item?
        </Prompt>
      )}
      {show && item && (
        <Toaster toasterShow={show}>
          {`Successfully removed- ${item.name} from your cart`}
        </Toaster>
      )}
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
                          )}<br/>
                          <span className="text-black-50 float-right">Available: {product.countInStock}</span>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={1} className='m-auto'>
                      <Button
                        type='button'
                        variant='light'
                        style={{ boxShadow: 'none', background: 'transparent' }}
                        onClick={(e) =>
                          removeFromCartHandler(product.productId)
                        }
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
                      {cartItems.reduce(
                        (acc, item) => acc + Number(item.qty),
                        0
                      )}
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
                  variant='btn-safran'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  <i className='fas fa-money-check-alt fa-2 pr-2'></i>
                  <strong>Proceed to checkout</strong>
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
