import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <h6 className='py-2 m-auto'>Copyright &copy; ElectroMart.</h6>
        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer
