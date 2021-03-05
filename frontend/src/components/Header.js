import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
  NavDropdown,
  Badge,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import { doLogout } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

const Header = () => {
  let history = useHistory()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userProfileUpdate = useSelector((state) => state.userProfileUpdate)
  const { userProfile } = userProfileUpdate

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const logoutHandler = () => {
    dispatch(doLogout())
    history.push('/login')
  }

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const userName =
    Object.keys(userProfile).length > 0 && userInfo
      ? userProfile.name
      : userInfo && Object.keys(user).length > 0
      ? user.name
      : userInfo && userInfo.name

  return (
    <>
      <header>
        <Navbar
          bg='dark'
          variant='dark'
          expand='lg'
          fixed='top'
          collapseOnSelect
        >
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>ElectroMart</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Form inline className='ml-5 px-2 rounded'>
                <FormControl type='text' placeholder='Search' />
                <Button variant='outline-light' disabled>
                  <i className='fas fa-search'></i>
                </Button>
              </Form>
              <Nav className='ml-auto'>
                {userInfo && (
                  <NavDropdown
                    title={userName}
                    id='basic-nav-dropdown'
                    className='pr-5'
                  >
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>
                        <i className='fas fa-user-circle pr-2'></i>My Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/orders'>
                      <NavDropdown.Item>
                        <i className='fas fa-shopping-bag pr-2'></i>Orders
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item href=''>
                      <i className='fab fa-gratipay pr-2'></i>Wishlist
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler}>
                      <i className='fas fa-sign-out-alt pr-2'></i>Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}

                <LinkContainer to='/cart' className='pr-3'>
                  <Nav.Link>
                    <i
                      className={`fas fa-shopping-cart  ${
                        cartItems.length === 0 && 'pr-2'
                      }`}
                    >
                      {cartItems.length > 0 && (
                        <Badge className='cart-badge badge-safran'>
                          {cartItems.length}
                        </Badge>
                      )}
                    </i>
                    Cart
                  </Nav.Link>
                </LinkContainer>
                {!userInfo && (
                  <LinkContainer to='/login'>
                    <Nav.Link className='btn-dark rounded'>
                      <i className='fas fa-user pr-2'></i>Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
