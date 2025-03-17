import {Nav, Layout, Home, Electronics, Mens, NotFound, Womens, Jewelery, Product } from "./components/index"
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App({nav, data}) {
  return (
    <>
    <Nav nav={nav} />

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home data={data} />} />
        <Route path='/electronics' element={<Electronics data={data} />} />
        <Route path="/men's_clothing" element={<Mens data={data} />} />
        <Route path="/women's_clothing" element={<Womens data={data} />} />
        <Route path="/jewelery" element={<Jewelery data={data} />} />
        <Route path="/product/:id" element={<Product data={data} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
