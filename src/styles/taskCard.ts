import styled from 'styled-components';
import { COLOR, FONT, FONT_WEIGHT } from './utils/cssConstrain';

export const TaskGroups = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

export const TaskCardGroup = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  padding: 0px 5px 0px 5px;
  justify-content: flex-start;
  margin: 5px 0px 0px 6px;
  border-radius: 2px;
  > div {
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 2px;
  }
`;

export const TaskGroupFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskCardGroupAdd = styled.div`
  width: 200px;
  position: relative;
  height: 30px;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 5px;
  background-color: #dadada;
  margin: 5px 0px 0px 6px;
  &:hover {
    background-color: #c0c0c0;
    color: #fff;
  }
`;

export const TaskCardGroupHeader = styled.div`
  font-size: ${FONT.MEDIUM}px;
  font-weight: ${FONT_WEIGHT.BOLD};
  padding: 5px 0px 5px 7px;
  cursor: pointer;
`;

export const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: ${COLOR.WHITE};
  transition: 0.3s;
  margin-bottom: 5px;
  &:hover {
    background-color: #f6f6f6;
  }
`;

export const TaskCardTitleText = styled.span`
  font-size: ${FONT.BASE}px;
  line-height: 125%;
  padding: 3px 0px 3px 6px;
`;

export const TaskCardEditImage = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 2px;
  align-items: center;
  transition: 0.3s;
  margin-right: 2px;
  &: hover {
    background-color: #c0c0c0;
  }
`;

export const TaskCardTextbox = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 15px;
  background: #fff;
  box-sizing: border-box;
  display: inlign-block;
`;

export const TaskCardFooter = styled.div`
  position: relative;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 5px;
  &:hover {
    background-color: #c0c0c0;
    color: #fff;
  }
`;
export const TaskCardFooterText = styled(TaskCardTitleText)`
  color: #696969;
`;

export const CreateTaskGroup = styled.form`
  width: 200px;
  background-color: #f2f2f2;
  padding: 0px 5px 0px 5px;
  justify-content: flex-start;
  margin: 5px 0px 0px 6px;
  border-radius: 2px;
`;

export const CreateTaskGroupTextArea = styled.textarea`
  resize: none;
  margin-top: 5px;
  width: 195px;
  border: 2px ${COLOR.PRIMARY} solid;
  outline: 2px ${COLOR.PRIMARY};
  border-radius: 3px;
`;

export const CreateTaskCard = styled.form`
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  background-color: #f2f2f2;
  margin-bottom: 5px;
`;

export const CreateTaskTextArea = styled.textarea`
  resize: none;
  width: 190px;
  height: 70px;
  border: 2px ${COLOR.PRIMARY} solid;
  outline: 2px ${COLOR.PRIMARY};
  border-radius: 3px;
`;
