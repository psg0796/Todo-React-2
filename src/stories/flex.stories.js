import React from 'react';
import Flex, {FlexDirection} from '../common/components/flex';
import { repeat } from 'ramda';
import Button from '../common/components/button';

export default {
  component: Flex,
  title: 'Flex',
};

const FlexData = repeat(<Button title="Item"/>, 10);

export const Column = () => <div style={{height: '100vh'}}>
    <Flex direction={FlexDirection.column}>
      {FlexData}
    </Flex>
  </div>;

export const Row = () => <Flex direction={FlexDirection.row}>{FlexData}</Flex>;
