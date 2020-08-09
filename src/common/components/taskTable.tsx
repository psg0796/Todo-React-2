import React from 'react';
import { UserTasksProps } from '../../App';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import * as R from 'ramda';
import Button from './button';
import { FlexRow } from './flex';
import moment from 'moment';

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
    dataIndex: 'key',
    render: (date: Date) => moment.utc(date).format("MMMM Do YYYY, h:mm a").toString()
  },
  {
    title: 'Actions',
    dataIndex: 'isDone',
    render: (isDone: boolean) => (
      <FlexRow>
        {isDone? <Button type="primary" title="Todo"/> : <Button type="primary" title="Done"/>}
        <Button type="default" isDanger={true} title="Delete" />
      </FlexRow>
    )
  },
];

const TaskTable: React.SFC<Props> = (props) => 
  <Table
    expandable={{
      expandedRowRender: (record: UserTasksProps) => <p>{record.description}</p>,
      rowExpandable: (record: UserTasksProps) => !R.isEmpty(record.description),
    }}
    columns={columns}
    dataSource={props.data}
  />

export default TaskTable;