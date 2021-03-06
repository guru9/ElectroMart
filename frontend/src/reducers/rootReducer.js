import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import { USER_LOGOUT } from '../constants/userConstant'
import { cartReducer } from './cartReducer'
import { productDetailsReducer, productListReducer } from './productReducer'
import {
  userDetailsReducer,
  userLoginReducer,
  userProfileUpdateReducer,
  userRegisterReducer,
} from './userReducer'

const config = {
  key: 'root',
  storage,
}

const reducers = persistCombineReducers(config, {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userProfileUpdate: userProfileUpdateReducer,
})

const appReducer = (state, action) => {
  console.info('em actions-', action)

  if (action.type === USER_LOGOUT) {
    storage.removeItem('persist:root')
    state = undefined
  }

  return reducers(state, action)
}

export default appReducer
