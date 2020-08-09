import React from 'react';
import { UserTasksProps } from '../../App';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import * as R from 'ramda';
import Button from './button';
import { FlexRow } from './flex';
import moment from 'moment';

interface Props {
  data: UserTasksProps[],
  addItem: (task: UserTasksProps) => void,
  deleteItem: (task: UserTasksProps) => void
}

const handleItemToggle = (item: UserTasksProps, deleteItem: (task: UserTasksProps) => void, addItem: (task: UserTasksProps) => void) => {
  let newItem = R.clone(item);
  newItem.key = new Date();
  newItem.isDone = R.not(newItem.isDone);
  addItem(newItem);

  setTimeout(() => deleteItem(item), 200);
}

const TaskTable: React.SFC<Props> = (props) => {
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
      render: (isDone: boolean, record: UserTasksProps) => (
        <FlexRow>
          {isDone? <Button type="primary" title="Todo" onClick={() => handleItemToggle(record, props.deleteItem, props.addItem)} /> :
           <Button type="primary" title="Done" onClick={() => handleItemToggle(record, props.deleteItem, props.addItem)} />}
          <Button type="default" isDanger={true} title="Delete" onClick={() => props.deleteItem(record)}/>
        </FlexRow>
      )
    },
  ];

  return (
    <Table
      expandable={{
        expandedRowRender: (record: UserTasksProps) => <p>{record.description}</p>,
        rowExpandable: (record: UserTasksProps) => !R.isEmpty(record.description),
      }}
      columns={columns}
      dataSource={props.data}
    />
  );
}

export default TaskTable;