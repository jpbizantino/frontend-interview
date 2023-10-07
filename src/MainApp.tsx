import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

function MainApp() {
  return (
    <>
      <AppTheme>
        <AppRouter></AppRouter>
      </AppTheme>
    </>
  )
}

export default MainApp
