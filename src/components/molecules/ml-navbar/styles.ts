import styled from 'styled-components'

export const ViewportNavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme === 'dark' ? '#222243':'#E5E5E5'};
  position: fixed;
  bottom: 50px;
`;

export const NavbarLimitViewport = styled.div`
  width: 100%;
  padding: 0 20px;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: red;
  height: 85px;
  background: ${props => props.theme === 'dark' ? '#2C2B3E':'#FFFFFF'};
  border-radius: 24px;
`;

export const IconContainer = styled.div<{active: boolean}>`
  width: 59px;
  height: 59px;
  background: ${props => {
    if (props.theme === 'dark' && props.active) {
      return '#1F1F31'
    }

    if (props.active) return '#F5F5F5'
  }};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled.div`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const getCorrectColorForSvg = (theme: string, active: boolean) => {
  if (theme === 'dark' && active) return '#FFFFFF'
  if (active) return '#1A5BE1'

  return '#777777'
}

export const SvgComponent = styled.svg<{active: boolean}>`
  fill: ${props => getCorrectColorForSvg(props.theme, props.active)}
`;