import React from 'react';
import { UserTasksProps } from '../../App';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import * as R from 'ramda';
import Button from './button';
import { FlexRow } from './flex';

interface Props {
  data: UserTasksProps[]
}

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Created On',
    dataIndex: 'id',
  },
  {
    title: 'Actions',
    dataIndex: 'isDone',
    render: (isDone: boolean) => (
      <FlexRow>
        {isDone? <Button title="Todo"/> : <Button title="Done"/>}
        <Button title="Delete" />
      </FlexRow>
    )
  },
];

const TaskTable: React.SFC<Props> = (props) => {
  const expandable = {
    expandedRowRender: (record: UserTasksProps) => <p>{record.description}</p>,
    rowExpandable: (record: UserTasksProps) => R.isEmpty(record.description),
  };

  return <Table expandable={expandable} columns={columns} dataSource={props.data} />
}

export default TaskTable;