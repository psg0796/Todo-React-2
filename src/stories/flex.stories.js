import React from 'react';
import {Flex, FlexCol, FlexRow} from '../common/components/flex';
import { repeat } from 'ramda';
import Button from '../common/components/button';

export default {
  component: Flex,
  title: 'Flex',
};

const FlexData = repeat(<Button title="Item"/>, 10);

export const Column = () => <div style={{height: '100vh'}}>
    <FlexCol>
      {FlexData}
    </FlexCol>
  </div>;

export const Row = () => <FlexRow>{FlexData}</FlexRow>;
