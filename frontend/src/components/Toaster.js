import { Toast } from 'react-bootstrap'
import { useState } from 'react'
const Toaser = ({ toasterShow, children }) => {
  const [show, setShow] = useState(toasterShow)

  return (
    <Toast
      className='toaster-safran'
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
    >
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  )
}

export default Toaser