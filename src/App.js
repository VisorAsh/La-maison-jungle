//import './App.css'
import { useState } from 'react'
import Cart from './Cart'
import Banner from './Banner'
import Footer from './Footer'
import logo from './assets/logo.png'
import ShoppingList from './ShoppingList'
import './Layout.css'

function App() {
  const [cart, updateCart] = useState([])
  return (
    <div>
      <Banner>
      <img src={logo} alt='Floral Store' className='lmj-logo' />
				<h1 className='lmj-title'>Visor Floral Store</h1>
      </Banner>
      <div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
      <Footer />
    </div>
  );
}

export default App;
