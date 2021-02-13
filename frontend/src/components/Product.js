import { Card, Button } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-4 p-3'>
      <a href={`/product/${product.id}`} className='prod-thumb'>
        <Card.Img variant='top' src={product.image} />
        <Card.Title className='prod-name'>{product.name}</Card.Title>
      </a>
      <Card.Body className='p-0'>
        <Card.Text className='prod-desc'>{product.description}</Card.Text>
        <Button variant='Secondary'>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
