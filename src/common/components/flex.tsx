import React from 'react';
import styled, { StyledFunction } from 'styled-components';

interface Props {
  justifyContent?: string;
  alignItems?: string;
  direction?: string;
};

export const FlexDirection = {
  row: 'row',
  column: 'column'
};

// @ts-ignore
const FlexFunction: StyledFunction<Props & React.HTMLProps<HTMLDivElement>> = styled.div;

export const Flex = FlexFunction`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: ${(props: Props) => props.justifyContent || `space-around`};
  align-items: ${(props: Props) => props.alignItems || `center`};
  flex-direction: ${(props: Props) => props.direction};
`;

export default Flex;