import styled from 'styled-components'

export const ImageContainer = styled.div<{image: string}>`
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(360deg, #000000 0%, #000000 2.85%, rgba(0, 0, 0, 0) 100%), url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 640px) {
    max-width: 640px;
    height: 450px;
  }
  border-radius: 0px 0px 38px 38px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const SubTitle = styled.h3`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #FEFEFE;
  margin: 0;
  padding: 26px 21px;
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