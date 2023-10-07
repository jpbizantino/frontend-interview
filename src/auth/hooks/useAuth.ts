import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store/store'
import { signIn } from '../api/authApi'
import {
  onChecking,
  onClearErrorMessage,
  onLogin,
  onLogout,
} from '../slices/authSlice'

export const useAuth = () => {
  const { error, errorMessage } = useSelector((state: RootState) => state.auth)

  const dispatch = useAppDispatch()

  const startLogin = async () => {
    dispatch(onChecking())
    try {
      await signIn()
        .then((response) => {
          if (response) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('exp', response.data.exp)
            dispatch(onLogin())
          } else {
            errorProcess('Error on API call')
          }
        })
        .catch(() => {
          errorProcess('Error on API call')
        })
    } catch (error) {
      errorProcess('Error on API call')
    }
  }

  const errorProcess = (message: string) => {
    localStorage.clear()

    dispatch(onLogout(message))
    setTimeout(() => {
      dispatch(onClearErrorMessage())
    }, 10 * 1000)
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(onLogout(undefined))

    //Logout if token expired
    const exp = Number(localStorage.getItem('exp') ?? 0)
    if (exp * 1000 < Date.now()) return dispatch(onLogout(undefined))

    try {
      dispatch(onLogin())
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout(undefined))
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogout(undefined))
  }

  return {
    error,
    errorMessage,
    checkAuthToken,
    startLogin,
    startLogout,
  }
}
