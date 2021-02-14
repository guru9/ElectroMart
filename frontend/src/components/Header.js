import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
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
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart pr-2'></i>Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>
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
