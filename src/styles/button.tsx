import styled from 'styled-components';
import { COLOR } from './utils/cssConstrain';
export const Button = styled.button`
  font-weight: 700;
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 12px;
  padding: 10px 16px;
  &:hover {
    color: white;
    background-color: #6ae693;
    transition: 0.3s;
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${COLOR.PRIMARY};
  color: ${COLOR.WHITE};
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${COLOR.SECONDARY};
  color: ${COLOR.WHITE};
`;

export const ButtonSuccess = styled(Button)`
  background-color: ${COLOR.SUCCESS};
  color: ${COLOR.WHITE};
`;

export const ButtonInfo = styled(Button)`
  background-color: ${COLOR.INFO};
  color: ${COLOR.WHITE};
`;

export const ButtonDanger = styled(Button)`
  background-color: ${COLOR.DANGER};
  color: ${COLOR.WHITE};
`;

export const ButtonCaution = styled(Button)`
  background-color: ${COLOR.CAUTION};
  color: ${COLOR.WHITE};
`;

export const CloseButton = styled.button`
  background: #fff;
  border: 1px solid ${COLOR.PRIMARY};
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  -webkit-border-radius: 12.5px;
  cursor: pointer;
  transition: 0.3s ease-in;
  -webkit-transition: 0.3s ease-in;
  text-align: center;
  &:hover {
    background: ${COLOR.PRIMARY};
    color: #fff;
    border: 1px solid #fff;
  }
`;
