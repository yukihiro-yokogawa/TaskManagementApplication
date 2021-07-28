import styled from 'styled-components';

export const AllBody = styled.body`
  font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
    'Hiragino Sans', Meiryo, sans-serif;
`;

export const MainBody = styled.div`
  width: 95%;
  margin-right: auto;
  margin-left: auto;
`;

export const FlexBox = styled.div<{
  justifyContent:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end'
    | undefined;
  alignItems: 'stretch' | 'center' | 'start' | 'end' | 'baseline' | undefined;
}>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''}
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')}
`;
