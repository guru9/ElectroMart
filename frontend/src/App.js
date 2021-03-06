import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import NoPageFound from './components/NoPageFound'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container
          fluid='md'
          style={{ background: '#FFF', padding: '100px 50px' }}
          className='mt-4'
        >
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart' component={CartScreen} />
            <Route component={NoPageFound} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
