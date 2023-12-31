import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../components/NavBar'

const drawerWidth = 240

const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
       
       <NavBar drawerWidth={drawerWidth}/>

       <Box
         component='main'
         sx={{ flexGrow:1, p:3 }}>
       
         { children }

       </Box>

    </Box>
  )
}

export default JournalLayout