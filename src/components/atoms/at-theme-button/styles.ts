import styled from 'styled-components'

export const Button = styled.button<{location: string}>`
  position: absolute;
  width: 62px;
  height: 63px;
  left: ${props => props.location !== '/history' ? '21px' : 'none'};
  right: ${props => props.location === '/history' ? '21px' : 'none'};
  top: 22px;
  background: ${props => props.theme === 'dark' ? '#222243':'#FFFFFF'};
  backdrop-filter: blur(10px);
  border-radius: 18px;
  outline: none;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
`;