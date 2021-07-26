import styled from 'styled-components';
import { DEVICE } from './utils/cssConstrain';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  z-index: 2;
  padding: 0.5em 1em 1em 1em;
  background: #fff;
  border-radius: 10px;
  @media ${DEVICE.DESKTOP_L} {
    width: 640px;
  }
  @media ${DEVICE.TABLET} {
    width: 420px;
  }
  @media ${DEVICE.MOBILE_L} {
    width: 320px;
  }
  @media ${DEVICE.MOBILE_M} {
    width: 280px;
  }
  @media ${DEVICE.MOBILE_S} {
    width: 200px;
  }
  transition: 0.3s;
`;

export const ModalHeader = styled.div`
  position: absolute;
  transition: 0.3s;
  @media ${DEVICE.DESKTOP_L} {
    left: calc(50% + 300px);
  }
  @media ${DEVICE.TABLET} {
    left: calc(50% + 190px);
  }
  @media ${DEVICE.MOBILE_L} {
    left: calc(50% + 140px);
  }
  @media ${DEVICE.MOBILE_M} {
    left: calc(50% + 120px);
  }
  @media ${DEVICE.MOBILE_S} {
    left: calc(50% + 80px);
  }
`;

export const ModalFooter = styled.div`
  height: 50px;
  background-color: #ffffff;
  border-top: 1px solid #bdbdbd;
  border-radius: 0 0 5px 5px;
  justify-content: flex-end;
`;
