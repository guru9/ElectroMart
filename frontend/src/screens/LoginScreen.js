import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { doLogin } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(doLogin(email, password))
  }

  return (
    <div className='p-4' style={{ boxShadow: '0px 0px 10px 0px #eee' }}>
      {error && <Message variant='danger'>{error}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <h4>SIGN IN</h4>
          <Form onSubmit={loginHandler} className='pt-4'>
            <Form.Group controlId='email'>
              <Form.Label>Email </Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant='dark' type='submit'>
              Sign In
            </Button>
          </Form>
          <Row className='py-4'>
            <Col>
              New Customer?{' '}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                Register
              </Link>
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default LoginScreen
