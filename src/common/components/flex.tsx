import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
`;