import React from 'react';
import { UserTasksProps } from '../../App';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { clone, not, isEmpty } from 'ramda';
import Button from './button';
import Flex, { FlexDirection } from './flex';
import moment from 'moment';
import styled from 'styled-components';
import { margin8, margin24 } from '../margin';

interface Props {
  data: UserTasksProps[],
  addItem: (task: UserTasksProps) => void,
  deleteItem: (task: UserTasksProps) => void
}

const StyledFlex = styled(Flex)`
  > button {
    margin: ${margin8};
  }
  width: fit-content;
`;

const TableContainer = styled.div`
  margin-top: ${margin24}
`;

const handleItemToggle = (item: UserTasksProps, deleteItem: (task: UserTasksProps) => void, addItem: (task: UserTasksProps) => void) => {
  let newItem = clone(item);
  newItem.key = new Date();
  newItem.isDone = not(newItem.isDone);
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
      title: 'Created On (UTC)',
      dataIndex: 'key',
      render: (date: Date) => moment.utc(date).format("MMMM Do YYYY, h:mm a").toString()
    },
    {
      title: 'Actions',
      dataIndex: 'isDone',
      render: (isDone: boolean, record: UserTasksProps) => (
        <StyledFlex direction={FlexDirection.row}>
          {isDone? <Button type="primary" title="Todo" onClick={() => handleItemToggle(record, props.deleteItem, props.addItem)} /> :
           <Button type="primary" title="Done" onClick={() => handleItemToggle(record, props.deleteItem, props.addItem)} />}
          <Button type="default" isDanger={true} title="Delete" onClick={() => props.deleteItem(record)}/>
        </StyledFlex>
      )
    },
  ];

  return (
    <TableContainer>
      <Table
        expandable={{
          expandedRowRender: (record: UserTasksProps) => <p>{record.description}</p>,
          rowExpandable: (record: UserTasksProps) => not(isEmpty(record.description)),
        }}
        columns={columns}
        dataSource={props.data}
      />
    </TableContainer>
  );
}

export default TaskTable;