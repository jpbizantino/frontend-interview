import { Grid } from '@mui/material'
import { MemberGrid } from '../components/MemberGrid'
import { MemberPage } from '../pages/MemberPage'
import { MemberForm } from './MemberForm'
import { useEffect } from 'react'
import { useAuth } from '../../auth/hooks/useAuth'

export const MemberView = () => {
  const { checkAuthToken } = useAuth()

  useEffect(() => {
    checkAuthToken()
  }, [])

  return (
    <>
      <MemberPage>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={'space-around'}
        >
          <Grid item xs={6}>
            <MemberForm />
          </Grid>
          <Grid item xs={6}>
            <MemberGrid />
          </Grid>
        </Grid>
      </MemberPage>
    </>
  )
}
