import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter, Route } from "react-router-dom"
import ProductDetails from "./Pages/ProductDetails"
import Cart from "./Pages/Cart"
import signIn from "./Pages/signIn"



function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Header />
        </header>


        <main>

          <Route path='/' component={Main} exact />
          <Route path ="/cart/:id?" component ={Cart}></Route>
          <Route path='/product/:id' component={ProductDetails}></Route>
          <Route path='/sign-in' component={signIn}></Route>

        </main>

        <footer>
          <Footer />
        </footer>


      </div>
    </BrowserRouter>

  );
}

export default App;
