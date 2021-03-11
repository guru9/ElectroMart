import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { getUserDetails, updateUserDetails } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Toaster from '../components/Toaster'
import { validObj } from '../utils/validObj'

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [show, setShow] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, user, error } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userProfileUpdate = useSelector((state) => state.userProfileUpdate)
  const { success, updateError, userProfile, updateLoading } = userProfileUpdate

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (validObj(userProfile)) {
        setName(userProfile.name)
        setEmail(userProfile.email)
        setShowLoader(false)
      } else {
        getProfileInfo()
      }
    }
  }, [])

  const getProfileInfo = async () => {
    try {
      const currentUser = await dispatch(getUserDetails('profile'))
      if (validObj(currentUser)) {
        setName(user.name)
        setEmail(user.email)
      } else {
        setName(userInfo.name)
        setEmail(userInfo.email)
      }
      setShowLoader(false)
    } catch (err) {
      console.log(err)
      setName(userInfo.name)
      setEmail(userInfo.email)
    }
  }

  const updateProfileHandler = (e) => {
    e.preventDefault()

    if (password != confirmPassword) {
      setMessage('Password do not match.')
    } else {
      setMessage(null)
      dispatch(
        updateUserDetails({
          id: user._id,
          name,
          email,
          password,
        })
      )
    }
    setShow(true)
  }

  return (
    <div className='p-4' style={{ boxShadow: '0px 0px 10px 0px #eee' }}>
      <h4>Profile</h4>
      {message && <Message variant='danger'>{message}</Message>}
      {error ||
        (updateError && (
          <Message variant='danger'>{error | updateError}</Message>
        ))}
      {show && success && (
        <Toaster toasterShow={show}>{'Profile updated successfully'}</Toaster>
      )}
      {updateLoading || loading || showLoader ? (
        <Loader />
      ) : (
        <>
          <Form onSubmit={updateProfileHandler} className='pt-4'>
            <Form.Group controlId='name'>
              <Form.Label>Name </Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>Email </Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='confirmPassword'
                placeholder='Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant='dark' type='submit'>
              Update
            </Button>
          </Form>
        </>
      )}
    </div>
  )
}

export default ProfileScreen
