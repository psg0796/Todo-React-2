import React from 'react';
import TaskTable from '../common/components/taskTable';
import { Data } from '../mockData';
import { repeat } from 'ramda';

export default {
  component: TaskTable,
  title: 'TaskTable',
};

export const Table = () => <TaskTable data={Data} />;

export const LargeTable = () => <TaskTable data={repeat(Data, 100)} />;
