import { axiosAuthClient } from './axiosAuthClient'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signIn = async (): Promise<any> => {
  let result = null

  // Harcoded user
  const data = {
    username: 'sarah',
    password: 'connor',
  }

  await axiosAuthClient.post('/auth', data).then((response) => {
    result = response
  })

  return result
}
