import React from 'react';
import { UserTasksProps } from '../../App';

interface Props {
  data: UserTasksProps[]
}

const TaskTable: React.SFC<Props> = (props) => (
  <>
    {props.data}
  </>
)

export default TaskTable;