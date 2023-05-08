import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HistoryPage } from '../pages/history'
import { useSelector } from 'react-redux'
import { sessionSelector } from '../redux/features/sessionSlice'

export const RouterComponent = () => {
  const { isAuth } = useSelector(sessionSelector)

  return (
    <BrowserRouter>
      <Routes>
        {isAuth ? (
          <Route>
            <Route path='/' element={<HomePage />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='*' element={<HomePage />} />
          </Route>
        ) : (
          <Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<LoginPage />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}
