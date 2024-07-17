import * as React from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/material'
import { useState } from 'react'
import searchFunction from './SearchFunction'

const Search = styled('div')(() => ({
	position: 'relative',
	borderRadius: '100px',
	backgroundColor: 'white',
	width: '328px',
	padding: '0px 16px 0px 16px',
	height: '56px',
	gap: '16px',
	left: '16px',
}))

const SearchIconWrapper = styled('div')(() => ({
	padding: '0px 16px', //
	position: 'absolute',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '0px',
	margin: '5% 2%',
}))

const StyledInputBase = styled(InputBase)(() => ({
	color: 'black',
	margin: '6% 15%',
	width: '100%',
	padding: '0px 16px',
	fontFamily: 'Lato',
	fontSize: '16px',
	lineHeight: '24px',
	fontWeight: 400,
	height: '16px',
}))



export default function SearchBar({ customStyles }) {
	const [searchQuery, setSearchQuery] = useState('');
	const handleSearch = async () => {  
        try {  
            await searchFunction(searchQuery); 

        } catch (error) {  
            console.error('Error al buscar:', error);  
        }  
    };  

    const handleKeyPress = (e) => {  
        if (e.key === 'Enter') {  
            handleSearch();  
        }  	}
	
	
	
	
	return (
		<Box>
			<Search
				sx={{
					display: 'flex',
					gap: '0px',
					margin: 'auto',
					width: '75%',
					minWidth: '310px',
					maxWidth: '500px',
					padding: '0px',
					left: '0px',
					textAlignLast: 'center',
					...customStyles,
				}}
			>
				<SearchIconWrapper sx={{ position: 'relative' }} onClick={handleSearch}>
					<SearchIcon />
				</SearchIconWrapper>

				<StyledInputBase
					placeholder='Buscar Microemprendimientos'
					value={searchQuery}  
   					onChange={(e) => setSearchQuery(e.target.value)}  
					onKeyPress={handleKeyPress}
					sx={{ margin: '0px', alignSelf: 'center', padding: '0px' }}
				/>
			</Search>
		</Box>
	)
}
