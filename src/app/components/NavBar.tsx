import { Home, Link } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'

export const NavBar = () => {
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{ justifyContent: 'space-around' }}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Other Page" icon={<Link />} />
    </BottomNavigation>
  )
}
