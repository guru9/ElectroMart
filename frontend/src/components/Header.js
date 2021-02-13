import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap'

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
            <Navbar.Brand href='/'>ElectroMart</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Form inline>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='mr-sm-2'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
              <Nav className='ml-auto'>
                <Nav.Link href='/cart'>
                  <i className='fas fa-shopping-cart pr-2'></i>Cart
                </Nav.Link>
                <Nav.Link href='/login'>
                  <i className='fas fa-user pr-2'></i>Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
