import React from 'react';
import {Flex, FlexCol, FlexRow} from '../common/components/flex';
import * as R from 'ramda';
import Button from '../common/components/button';

export default {
  component: Flex,
  title: 'Flex',
};

const FlexData = R.repeat(<Button title="Item"/>, 10);

export const Column = () => <FlexCol>{FlexData}</FlexCol>;

export const Row = () => <FlexRow>{FlexData}</FlexRow>;
