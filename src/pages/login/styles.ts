import { TextField } from '@mui/material';
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 22px;
`;

export const ContainerText = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const FormContainer = styled.form`
  width: 330px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 22px;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: ${props => props.theme === 'dark' ? '#fff':'#161617'};
  `;

export const Paragraph = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme === 'dark' ? '#FEFEFE':'#232232'};
  opacity: 0.8;
  letter-spacing: 1px;
`;

export const Anchor = styled.a`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme === 'dark' ? 'rgba(254, 254, 254, 0.8)':'rgba(35, 34, 50, 0.8)'};

  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  padding: 22px 38px;
  gap: 10px;
  width: 122px;
  height: 66px;
  background: linear-gradient(99deg, #236BFE 6.69%, #0D4ED3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 25px;
  border: none;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FEFEFE;
  cursor: pointer;
`;

export const Input =  styled(TextField)`
  width: 100%;
  .MuiInputBase-root {
    border-bottom: none !important;
    background: ${props => props.theme === 'dark' ? '#2F2F43':'#FFFFFF'} !important;
    border: 1px solid rgba(0, 0, 0, 0.06) !important;
    border-radius: 18px;
  }
  .MuiFormLabel-root{
    font-family: 'DM Sans' !important;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #3C3C3C;
    opacity: 0.6;
  }
  .MuiFormLabel-root:after{
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme === 'dark' ? '#FEFEFE':'#3C3C3C'} !important;
    opacity: 0.6;
  }
  .MuiFormLabel-colorPrimary {
    color: ${props => props.theme === 'dark' ? '#FEFEFE':'#3C3C3C'} !important;
    opacity: 0.6;
  }
  .MuiFilledInput-root{
    font-family: 'DM Sans' !important;
    color: ${props => props.theme === 'dark' ? '#FEFEFE':'#161617'} !important;
  }
  .MuiFilledInput-root:before {
    border-bottom: none !important;
  }
  .MuiFilledInput-root::after {
    border-radius: 18px !important;
    border-bottom: none !important;
  }
`;