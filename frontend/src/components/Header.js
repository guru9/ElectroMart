import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
  NavDropdown,
} from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
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
                <NavDropdown
                  title='Guru'
                  id='basic-nav-dropdown'
                  className='pr-4'
                >
                  <NavDropdown.Item href=''>
                    <i class='fas fa-user-circle pr-2'></i>My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''>
                    <i class='fas fa-shopping-bag pr-2'></i>Orders
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''>
                    <i class='fab fa-gratipay pr-2'></i>Wishlist
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''>
                    <i class='fas fa-sign-out-alt pr-2'></i>Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart pr-2'></i>Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link className='btn-dark rounded'>
                    <i className='fas fa-user pr-2'></i>Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
