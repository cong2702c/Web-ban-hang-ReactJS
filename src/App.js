import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Placeorder from "./Pages/Placeorder";
import ProductDetail from "./Pages/ProductDetail";

function App() {
	return (
		<Router className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/pages" component={Home} />
				<Route exact path="/contact" component={ContactUs}/>
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/shop/cart" component={Cart} />
				<Route exact path="/shop/checkout" component={Checkout} />
				<Route exact path="/shop/checkout/placeorder" component={Placeorder} />
				<Route exact path="/Shop/ProductDetail" component={ProductDetail} />
			</Switch>
		</Router>
	);
}

export default App;
