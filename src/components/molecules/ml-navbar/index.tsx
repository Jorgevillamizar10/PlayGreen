import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeSelector } from '../../../redux/features/themeSlice'
import {
  ViewportNavbarContainer,
  Navbar,
  IconContainer,
  ButtonIcon,
  NavbarLimitViewport,
  SvgComponent
} from './styles'
import { setAuth } from '../../../redux/features/sessionSlice'
import { useLocation } from 'react-router-dom'

const HomeIcon = ({ theme, active }: { theme: string; active: boolean }) => (
  <SvgComponent
    xmlns='http://www.w3.org/2000/svg'
    width={19}
    height={20}
    theme={theme}
    active={active}
  >
    <path d='M18.364 8.127 10.55 1.024a1.556 1.556 0 0 0-2.102 0L.636 8.127a1.566 1.566 0 0 0-.511 1.156v9.03a1.564 1.564 0 0 0 1.563 1.562h15.624a1.564 1.564 0 0 0 1.563-1.563V9.284a1.566 1.566 0 0 0-.511-1.156Z' />
  </SvgComponent>
)

const HistoryIcon = ({ theme, active }: { theme: string; active: boolean }) => (
  <SvgComponent
    xmlns='http://www.w3.org/2000/svg'
    width={19}
    height={19}
    theme={theme}
    active={active}
  >
    <path d='M9.5.125A9.375 9.375 0 1 0 18.875 9.5 9.385 9.385 0 0 0 9.5.125Zm4.42 6.06-3.867 3.867a.782.782 0 0 1-1.105-1.104l3.867-3.867a.782.782 0 0 1 1.104 1.104Z' />
  </SvgComponent>
)

const LogoutIcon = ({ theme, active }: { theme: string; active: boolean }) => (
  <SvgComponent
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={19}
    theme={theme}
    active={active}
  >
    <path d='M15.708 4.292 14.24 5.76l2.687 2.698H6.333v2.084h10.594l-2.687 2.687 1.468 1.48L20.917 9.5l-5.209-5.208ZM2.167 2.208H10.5V.125H2.167A2.09 2.09 0 0 0 .083 2.208v14.584a2.09 2.09 0 0 0 2.084 2.083H10.5v-2.083H2.167V2.208Z' />
  </SvgComponent>
)

export const NavbarComponent = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { theme } = useSelector(themeSelector)
  const [navbarState, setNavbarState] = useState({
    home: false,
    history: false,
    logout: false
  })

  useEffect(() => {
    if (location.pathname === '/') {
      setNavbarState((state) => {
        return { ...state, home: true }
      })
    }

    if (location.pathname === '/history') {
      setNavbarState((state) => {
        return { ...state, history: true }
      })
    }
  }, [location])

  return (
    <ViewportNavbarContainer theme={theme}>
      <NavbarLimitViewport>
        <Navbar theme={theme}>
          <IconContainer theme={theme} active={navbarState.home}>
            <a href='/' aria-label='home'>
              <HomeIcon theme={theme} active={navbarState.home} />
            </a>
          </IconContainer>
          <IconContainer theme={theme} active={navbarState.history}>
            <a href='/history' aria-label='history'>
              <HistoryIcon theme={theme} active={navbarState.history} />
            </a>
          </IconContainer>
          <IconContainer theme={theme} active={navbarState.logout}>
            <ButtonIcon
              onClick={() => {
                setNavbarState((state) => {
                  return { ...state, logout: true }
                })
                dispatch(setAuth(false))
              }}
            >
              <LogoutIcon theme={theme} active={navbarState.logout} />
            </ButtonIcon>
          </IconContainer>
        </Navbar>
      </NavbarLimitViewport>
    </ViewportNavbarContainer>
  )
}
