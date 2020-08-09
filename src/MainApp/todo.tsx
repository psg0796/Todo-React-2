import React from 'react';
import TaskTable from '../common/components/taskTable';
import { UserTasksProps } from '../App';

interface Props {
    data: UserTasksProps[]
}

const Todo: React.SFC<Props> = (props) => (
    <TaskTable data={props.data} />
)

export default Todo;