import { Route, Routes } from 'react-router-dom'
import { MemberView } from '../views/MemberView'

export const MemberRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MemberView />} />
    </Routes>
  )
}
