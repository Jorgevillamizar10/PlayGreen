import styled from 'styled-components'

export const Containerhistory = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px;
  padding: 60px 0;
  height: 100%;
  width: 100%;
`;

export const ContainerCards= styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  margin-top: 6px;
  height: 400px;
  overflow-y: scroll;
  @media (max-width: 768px) {
    padding: 0px 32px;
    align-items: flex-start;
    width: 80%;
    height: 50vh;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  @media (max-width: 768px) {
    padding: 0px 32px;
  }
`;

export const Title = styled.h1`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  display: flex;
  align-items: center;
  letter-spacing: -0.055em;
  color: ${props => props.theme === 'dark' ? '#FEFEFE':'#161617'};
  margin: 0;
  @media (max-width: 768px) {
    padding: 0px 32px;
  }
`;

export const Description = styled.p`
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: ${props => props.theme === 'dark' ? '#FEFEFE':'#232232'};
  opacity: 0.8;
  margin: 0;
  @media (max-width: 768px) {
    padding: 0px 32px;
  }
`;

export const DateText = styled.label`
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: ${props => props.theme === 'dark' ? '#FEFEFE':'#161617'};
  opacity: 0.8;
  @media (max-width: 768px) {
    padding: 0px 32px;
  }
`;

export const IconSvg = styled.svg`
  fill: ${props => props.theme === 'dark' ? '#FEFEFE':'#161617'};
`;