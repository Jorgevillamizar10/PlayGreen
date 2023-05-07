import styled from 'styled-components'

export const ImageContainer = styled.div<{image: string}>`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 640px) {
    max-width: 640px;
    height: 450px;
  }
  border-radius: 0px 0px 32px 32px;
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 47px;
`;

export const ViewportHomeSection = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: ${props => props.theme === 'dark' ? '#222243':'#E5E5E5'};
`;