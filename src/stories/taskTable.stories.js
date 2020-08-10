import React from 'react';
import TaskTable from '../common/components/taskTable';
import { Data } from '../mockData';
import * as R from 'ramda';

export default {
  component: TaskTable,
  title: 'TaskTable',
};

export const Table = () => <TaskTable data={Data} />;

export const LargeTable = () => <TaskTable data={R.repeat(Data, 100)} />;
