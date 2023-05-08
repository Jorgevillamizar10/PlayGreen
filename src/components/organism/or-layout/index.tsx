import { ReactNode } from 'react'
import { ThemeButton } from '../../atoms/at-theme-button'
import { NavbarComponent } from '../../molecules/ml-navbar'
import { sessionSelector } from '../../../redux/features/sessionSlice'
import { useSelector } from 'react-redux'

export const MlLayout = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useSelector(sessionSelector)

  return (
    <section>
      <ThemeButton />
      {children}
      {isAuth && <NavbarComponent />}
    </section>
  )
}
