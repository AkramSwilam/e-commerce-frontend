/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./components/Home/Home"
import Layout from "./components/Layout/Layout"
import Products from "./components/Products/Products"
import NotFound from "./components/NotFound/NotFound"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Cart from "./components/Cart/Cart"
import Categories from "./components/Categories/Categories"
import Brands from "./components/Brands/Brands"

import { CounterContextProvide } from './Context/counter';
import { UserContext, UserContextProvider } from './Context/user';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';
import { useContext } from 'react';
import ProtectedAuthRoutes from './components/ProtectedAuthRoutes/ProtectedAuthRoutes';
import ProductDetails from './components/ProductDetails/ProductDetails';



let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRouter><Home /></ProtectedRouter> },
      { index: 'home', element: <ProtectedRouter><Home /></ProtectedRouter> },
      { path: "products", element: <ProtectedRouter><Products /></ProtectedRouter> },
      { path: "register", element: <ProtectedAuthRoutes><Register /></ProtectedAuthRoutes> },
      { path: "login", element: <ProtectedAuthRoutes><Login /></ProtectedAuthRoutes> },
      { path: "cart", element: <ProtectedRouter><Cart /></ProtectedRouter> },
      { path: "categories", element: <ProtectedRouter><Categories /></ProtectedRouter> },
      { path: "brands", element: <ProtectedRouter><Brands /></ProtectedRouter> },
      { path: "product-details/:id", element: <ProtectedRouter><ProductDetails /></ProtectedRouter> },
      { path: "*", element: <NotFound /> },
    ]
  }
])

function App() {
  // let userContext=useContext(UserContext)
  // if(localStorage.getItem("userToken")){
  //   userContext.setUserToken(localStorage.getItem("userToken"))
  // }


  return <UserContextProvider>
    <CounterContextProvide>
      <RouterProvider router={routers}></RouterProvider>
    </CounterContextProvide>
  </UserContextProvider>

}

export default App;
