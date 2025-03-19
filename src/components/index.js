/* App.jsx */

import Nav from './Nav/Nav';
import Layout from './Layout/Layout';
import Home from "../pages/Home/Home";
import Electronics from '../pages/Electronics/Electronics';
import Mens from '../pages/Mens/Mens';
import NotFound from './NotFound/NotFound';
import Womens from '../pages/Womens/Womens';
import Jewelery from '../pages/Jewelery/Jewelery';
import { Outlet } from 'react-router-dom';
import Product from './Product/Product';
import Basket from "../pages/Basket/Basket";

/* Nav */

import NavItem from "./Nav/NavItem/NavItem"
import { IoSearchSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";

/* Product */

import { useParams } from "react-router-dom";
import Buy from "../components/Buy/Buy"
import star from "../assets/star.png"

export {Nav, Layout, Home, Electronics, Mens, NotFound, Womens, 
    Jewelery, Outlet, Product, Basket, NavItem, IoSearchSharp,
    SlBasket, NavLink, useParams, Buy, star
}