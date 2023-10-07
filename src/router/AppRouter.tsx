import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MemberRoutes } from '../member/routes/MemberRoutes'
import { LoadingView } from '../member/views/LodingPage'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoadingView />} />
          <Route path="/members/*" element={<MemberRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
