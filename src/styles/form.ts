import styled from 'styled-components';
import { COLOR, DEVICE } from './utils/cssConstrain';

export const Form = styled.form`
  & > div {
    margin-top: 15px;
    margin-bottom: auto;
    & > div {
      margin-bottom: 10px;
      padding-right: 60px;
    }
  }
  margin-left: 20px;
`;

export const Input = styled.input`
  font-weight: 500;
  width: calc(100%-2vw);
  @media ${DEVICE.MOBILE_S} {
    width: 115%;
  }
  padding-left: 0.5vw;
  background-color: transparent;
  position: absolute;
  bottom: 0px;
  outline: none;
  border-style: solid;
  border-color: #afafaf;
  border-width: 0px 0px 2px 0px;
  font-size: 20px;
  @media ${DEVICE.MOBILE_L} {
    font-size: 12px;
  }
  -webkit-transition: border-color 0.45s linear;
  transition: border-color 0.45s linear;
`;

export const TextArea = styled.textarea`
  font-weight: 500;
  width: 100%;
  @media ${DEVICE.MOBILE_S} {
    width: 120%;
  }
  height: 35px;
  @media ${DEVICE.MOBILE_L} {
    height: 25px;
  }
  padding-left: 0.5vw;
  background-color: transparent;
  bottom: 0px;
  outline: none;
  border-style: solid;
  border-color: #afafaf;
  border-width: 0px 0px 2px 0px;
  font-size: 20px;
  @media ${DEVICE.MOBILE_L} {
    font-size: 12px;
  }
  -webkit-transition: border-color 0.45s linear;
  transition: border-color 0.45s linear;
`;

export const TextBoxInputLabel = styled.label`
  pointer-events: none;
  z-index: 1;
  color: #afafaf;
  position: absolute;
  padding-left: 0.5vw;
  bottom: 3px;
  font-size: 20px;
  @media ${DEVICE.MOBILE_L} {
    font-size: 12px;
  }
  font-weight: 300;
  -webkit-transition-property: opacity bottom font-size;
  transition-property: opacity bottom font-size;
  -webkit-transition-duration: 0.45s;
  transition-duration: 0.45s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;

export const TextBoxAreaLabel = styled.label`
  pointer-events: none;
  z-index: 1;
  color: #afafaf;
  position: absolute;
  padding-left: 0.5vw;
  top: 18px;
  font-size: 20px;
  @media ${DEVICE.MOBILE_L} {
    font-size: 12px;
  }
  font-weight: 300;
  -webkit-transition-property: opacity bottom font-size;
  transition-property: opacity bottom font-size;
  -webkit-transition-duration: 0.45s;
  transition-duration: 0.45s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;

export const TextBoxLabelError = styled.label`
  position: absolute;
  margin-top: 48px;
  width: 100%;
  color: #e74c3c;
  text-align: center;
  transition: 0.3s;
`;
interface TextBoxInterface {
  readonly value: boolean;
}
export const TextBox = styled.div<TextBoxInterface>`
  position: relative;
  width: 100%;
  padding-top: 10px;
  display: inline-flex;
  margin-bottom: 3vh;
  transition: 0.3s;
  input {
    ${(props) =>
      props.value
        ? `& ~${TextBoxInputLabel}{     opacity: 1;
          z-index: 1;
          bottom: 58%;
          font-size: 12px;}`
        : `&:focus ~ ${TextBoxInputLabel}{     opacity: 1;
      z-index: 1;
      bottom: 58%;
      font-size: 12px;}`}
  }
  textarea {
    resize: vertical;
    ${(props) =>
      props.value
        ? `& ~${TextBoxAreaLabel}{     opacity: 1;
          z-index: 1;
          top: -5px;
          font-size: 12px;}`
        : `&:focus ~ ${TextBoxAreaLabel}{     opacity: 1;
      z-index: 1;
      top: -5px;
      font-size: 12px;}`}
  }
  input,
  textarea {
    font-family: 'Roboto', sans-serif;
    &:focus {
      border-color: ${COLOR.PRIMARY};
    }

    &:focus ~ ${TextBoxInputLabel}, &:focus ~ ${TextBoxAreaLabel} {
      color: ${COLOR.PRIMARY};
    }
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: ${COLOR.PRIMARY};
      font-size: 20px;
      font-weight: 200;
      font-family: 'Roboto', sans-serif;
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      color: ${COLOR.PRIMARY};
      font-size: 20px;
      font-weight: 200;
      font-family: 'Roboto', sans-serif;
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      color: ${COLOR.PRIMARY};
      font-size: 20px;
      font-weight: 200;
      font-family: 'Roboto', sans-serif;
    }
    &:-moz-placeholder {
      /* Firefox 18- */
      color: ${COLOR.PRIMARY};
      font-size: 20px;
      font-weight: 200;
      font-family: 'Roboto', sans-serif;
    }
  }
`;

export const TextBoxInput = styled(TextBox)`
  height: 45px;
`;

export const TextBoxArea = styled(TextBox)`
  @media ${DEVICE.MOBILE_S} {
    width: 120%;
  }
  width: 100%;
`;
