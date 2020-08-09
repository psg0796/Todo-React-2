import React, { useState } from 'react';
import TaskTable from '../common/components/taskTable';
import { UserTasksProps } from '../App';
import Button from '../common/components/button';
import Modal from 'antd/lib/modal/Modal';
import moment from 'moment';
import { Input } from 'antd';

const { TextArea } = Input;
moment().format();

interface Props {
  data: UserTasksProps[],
  addItem: (task: UserTasksProps) => void,
  deleteItem: (task: UserTasksProps) => void,
  extras: any,
}

const Todo: React.SFC<Props> = (props) => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");

  return (
    <>
      <Button type="link" title="+ click here to add a task" onClick={() => setAddModalVisible(true)}/>
      <Modal
        title="Add item to do"
        visible={addModalVisible}
        onOk={() => {setAddModalVisible(false); props.addItem({key: new Date(), title: newTitle, description: newDescription, isDone: false})}}
        onCancel={() => setAddModalVisible(false)}
      >
        Title : <Input onChange={e => setTitle(e.target.value)} placeholder="Enter the title to be displayed" />
        Description: <TextArea onChange={e => setDescription(e.target.value)} placeholder="Enter any description"/>
      </Modal>
      <TaskTable data={props.data} addItem={props.addItem} deleteItem={props.deleteItem} />
    </>
  );
}

export default Todo;