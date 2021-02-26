import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Spinner
        animation='border'
        style={{
          margin: 'auto',
          display: 'block',
          width: '100px',
          height: '100px',
        }}
      ></Spinner>
      <span>
        <strong>Loading...</strong>
      </span>
    </div>
  )
}

export default Loader
