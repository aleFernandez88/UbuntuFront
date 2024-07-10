import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, Box } from '@mui/material';

const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: 'white',
  width: '328px',
  padding: '0px 16px 0px 16px',
  height:'56px',
  gap:'16px',
  left: '16px',
}));

const SearchIconWrapper = styled('div')(() => ({
  padding: '0px 16px', // 
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0px',
  margin:'5% 2%',
  


}));

const StyledInputBase = styled(InputBase)(() => ({
  color: 'black',
  margin:'6% 15%',
  width: '100%',
  padding:'0px 16px',
  fontFamily:'Lato',
  fontSize:'16px',
  lineHeight:'24px',
  fontWeight: 400,
  height:'16px',
  

}));

export default function SearchBar() {
  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        
          <StyledInputBase 
            placeholder="Buscar Microemprendimientos"
          />
        
      </Search>
    </Box>
  );
}