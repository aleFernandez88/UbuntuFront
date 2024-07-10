@ -3,6 +3,10 @@ import reactLogo from './assets/react.svg'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationDrawer from "./common/navbar-drawer/index"
import SearchBar from "./common/searchbar/Searchbar"





export default function App() {
  
	
  
	return (
	  <>
		<NavigationDrawer />
		<SearchBar/>
		
		
		
		
	  </>
	);
  }
