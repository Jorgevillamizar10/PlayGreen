import styled from 'styled-components'

export const LimitViewport = styled.div`
  width: 100%;
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

export const ViewportSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${props => props.theme === 'dark' ? '#222243':'#E5E5E5'};
`;