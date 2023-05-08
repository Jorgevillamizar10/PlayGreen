import styled from 'styled-components'

export const CardComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 77px;
  background: ${props => props.theme === 'dark' ? '#212135':'#FFFFFF'};
  border-radius: 12px;
  @media (min-width: 768px) {
    padding: 0px;
    max-width: 83%;
    height: 110px;
  }
`;

export const ContainerButtons = styled.div`
  height: 77px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 110px;
  }
`;

export const CardImage = styled.div<{image: string}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 77px;
  width: 80%;
  background-image: linear-gradient(360deg, #000000 0%, #000000 2.85%, rgba(0, 0, 0, 0) 100%), url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  & span {
    padding: 24px 15px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.045em;
    color: #FEFEFE;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 768px) {
    height: 110px;
  }
`;

export const SvglikeComponent = styled.svg`
  fill: ${props => props.theme === 'dark' ? '#FFFFFF':'#2067F8'};
`;