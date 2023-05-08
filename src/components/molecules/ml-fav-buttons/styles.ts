import styled from 'styled-components'

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51px;
  width: 51px;
  background: ${props => props.theme === 'dark' ? '#2C2B3E':'#FFFFFF'};
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  outline: none;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  transition: 1s ease-in-out;
  &:hover {
    transition: 1s ease-in-out;
    background: #4F95DA;
  }
`;

export const FavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 81px;
  width: 81px;
  outline: none;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  background: linear-gradient(125.02deg, #236BFE -17.11%, #063BA8 98.58%);
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
  transition: 1s ease-in-out;
  &:hover {
    transition: 1s ease-in-out;
    background: #4F95DA;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px
`;

export const SvgComponent = styled.svg<{theme: string}>`
  fill: ${props => props.theme === 'dark' ? '#FFFFFF':'#D36060'};
`;