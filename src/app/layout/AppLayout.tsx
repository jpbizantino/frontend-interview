import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

interface Props {
  children?: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <NavBar />
        <Footer />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '90vh',
          }}
        >
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              overflow: 'auto',
              flexGrow: 1,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}
