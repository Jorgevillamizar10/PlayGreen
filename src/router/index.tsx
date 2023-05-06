import { useSelector } from 'react-redux'
import { MlLayout } from '../components/molecules/ml-layout'
import { LoginPage } from '../pages/login'
import { sessionSelector } from '../redux/features/sessionSlice'
import { HomePage } from '../pages/home'

export const RouterComponent = () => {
  const { isAuth } = useSelector(sessionSelector)

  return <MlLayout>{!isAuth ? <LoginPage /> : <HomePage />}</MlLayout>
}
