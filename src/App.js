//import './App.css'
import { useState, useEffect } from 'react'
import Cart from './Cart'
import Banner from './Banner'
import Footer from './Footer'
import logo from './assets/logo.png'
import ShoppingList from './ShoppingList'
import './Layout.css'

function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

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
