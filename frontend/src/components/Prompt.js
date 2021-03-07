import { Modal, Button } from 'react-bootstrap'

const Prompt = ({
  handleModalShow,
  handleRemove,
  modalShow,
  promptTitle,
  rowData,
  actionTitle,
  children,
}) => {
  const handleClose = () => {
    handleModalShow(false)
  }

  return (
    <div>
      <Modal
        size='md'
        show={modalShow}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
        aria-labelledby='example-modal-sizes-title-sm'
      >
        <Modal.Header closeButton>
          <Modal.Title>{promptTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant='outline-dark' onClick={handleClose}>
            <strong>CANCEL</strong>
          </Button>
          <Button variant='dark' onClick={() => handleRemove(rowData)}>
            <strong>{actionTitle}</strong>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Prompt
