import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import appReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]

const configureStore = () => {
  const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  )

  console.info('persist state', store.getState())

  let persistor = persistStore(store)

  return {
    persistor,
    store,
  }
}

export default configureStore
