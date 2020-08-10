import React from 'react';
import TaskTable from '../common/components/taskTable';
import { UserTasksProps } from '../App';

interface Props {
  data: UserTasksProps[]
  addItem: (task: UserTasksProps) => void,
  deleteItem: (task: UserTasksProps) => void,
}

const Done: React.SFC<Props> = (props) => (
  <TaskTable data={props.data} addItem={props.addItem} deleteItem={props.deleteItem} />
)

export default Done;