import { Toast } from 'react-bootstrap'
import { useState } from 'react'

const Toaster = ({ toasterShow, children }) => {
  const [show, setShow] = useState(toasterShow)

  return (
    <Toast
      className='toaster-success'
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
    >
      <Toast.Body>
        <i className='far fa-check-circle pr-2'></i>
        {children}
      </Toast.Body>
    </Toast>
  )
}

export default Toaster
