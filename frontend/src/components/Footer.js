import { Container, Row, Col, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      {/* <Container>
        <Row>
          <Col className='text-center py-2'>Copyright &copy; ElectroMart.</Col>
        </Row>
      </Container> */}
      <Navbar bg='dark' variant='dark'>
        <Container>
          <h6 className='text-center py-2 m-auto'>
            Copyright &copy; ElectroMart.
          </h6>
        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer
