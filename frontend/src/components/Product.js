import { Card } from 'react-bootstrap'
import Ratings from './Ratings'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <>
    <Card className='my-4 p-3'>
      <Link to={`/product/${product._id}`} className='prod-thumb'>
        <Card.Img variant='top' className='rounded' src={product.image} />
        <Card.Title className='pt-1 prod-name'>{product.name}</Card.Title>
      </Link>
      <Card.Body className='p-0'>
        <Card.Text className='prod-desc'>{product.description}</Card.Text>
        <Card.Text as='div'>
          <div className='my-3' as='h6'>
            <Ratings
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Product
