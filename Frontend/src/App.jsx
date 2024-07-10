import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationDrawer from "./common/navbarDrawer/NavbarDrawer"
import CuadroDeObjetivos from './components/objetivos/Objetivos'
import SearchBar from './common/searchbar/Searchbar'


export default function App() {
  
	
  
	return (
	  <>
		<NavigationDrawer />
		<CuadroDeObjetivos />
		<SearchBar/>
	  </>
	);
  }
