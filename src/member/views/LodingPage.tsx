import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'
import { Typography } from '@mui/material'

export const LoadingView = () => {
  const navigate = useNavigate()
  const { error, startLogin } = useAuth()

  useEffect(() => {
    startLogin()
  }, [])

  useEffect(() => {
    if (error == 'authenticated') {
      navigate('/members')
    }
  }, [error])

  return (
    <div>
      {' '}
      <Typography variant="h2">Loading</Typography>
    </div>
  )
}
