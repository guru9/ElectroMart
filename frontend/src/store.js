import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import appReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const intialState = {}
const middleware = [thunk]

const configureStore = () => {
  const store = createStore(
    appReducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

  console.info('persisit state', store.getState())

  let persistor = persistStore(store)

  return {
    persistor,
    store,
  }
}

export default configureStore
