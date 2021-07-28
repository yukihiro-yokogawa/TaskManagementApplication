import styled from 'styled-components';
import { COLOR, DEVICE, FONT, FONT_WEIGHT } from './utils/cssConstrain';

export const WorkspaceCardGroup = styled.div`
  width: 100%;
  height: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  & > :nth-child(n) {
    margin-right: 20px;
  }
  & > :nth-child(n + 9) {
    margin-top: 20px;
  }
  @media ${DEVICE.LAPTOP_L} {
    & > :nth-child(n + 7) {
      margin-top: 20px;
    }
  }
  @media ${DEVICE.LAPTOP} {
    & > :nth-child(n + 5) {
      margin-top: 20px;
    }
  }
  @media ${DEVICE.TABLET} {
    & > :nth-child(n + 3) {
      margin-top: 20px;
    }
  }
`;

export const WorkspaceCard = styled.div`
  width: calc((90% - 40px * 1) / 8);
  height: auto;
  padding-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media ${DEVICE.LAPTOP_L} {
    width: calc((90% - 40px * 1) / 6);
  }
  @media ${DEVICE.LAPTOP} {
    width: calc((90% - 40px * 1) / 4);
  }
  @media ${DEVICE.TABLET} {
    width: calc((90% - 40px * 1) / 2);
  }
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
    background-color: #6ae693;
  }
`;

export const PlusWorkspaceCard = styled(WorkspaceCard)`
  padding-top: 20px;
  background-color: #dcdcdc;
  color: ${COLOR.PRIMARY};
  font-size: ${FONT.XXLARGE}px;
`;

export const WorkspaceCardTextbox = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 9px;
  box-sizing: border-box;
`;

export const PlusWorkspaceCardTextbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const WorkspaceCardTitleText = styled.div`
  font-size: ${FONT.LARGE}px;
  font-weight: ${FONT_WEIGHT.BOLD};
  line-height: 125%;
`;
