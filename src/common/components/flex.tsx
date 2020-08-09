import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
`;