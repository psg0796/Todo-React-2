import React, { useState } from 'react';
import TaskTable from '../common/components/taskTable';
import { UserTasksProps } from '../App';
import Button from '../common/components/button';
import Modal from 'antd/lib/modal/Modal';

interface Props {
  data: UserTasksProps[],
  addItem: (task: UserTasksProps) => void
  extras: any,
}

const Todo: React.SFC<Props> = (props) => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const [newId, setId] = useState(0);
  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newIsDone, setIsDone] = useState(false);

  return (
    <>
      <Button type="link" title="+ click here to add a task" onClick={() => setAddModalVisible(true)}/>
      <Modal
        title="Add item to do"
        visible={addModalVisible}
        onOk={() => {setAddModalVisible(false); props.addItem({id: newId, title: newTitle, description: newDescription, isDone: newIsDone})}}
        onCancel={() => setAddModalVisible(false)}
      >
      </Modal>
      <TaskTable data={props.data} />
    </>
  );
}

export default Todo;