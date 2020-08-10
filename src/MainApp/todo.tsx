import React, { useState } from 'react';
import TaskTable from '../common/components/taskTable';
import { UserTasksProps } from '../App';
import Button from '../common/components/button';
import Modal from 'antd/lib/modal/Modal';
import moment from 'moment';
import { Input, notification } from 'antd';
import styled from 'styled-components';
import { margin24 } from '../common/margin';
import * as R from 'ramda';

const { TextArea } = Input;
moment().format();

interface Props {
  data: UserTasksProps[],
  addItem: (task: UserTasksProps) => void,
  deleteItem: (task: UserTasksProps) => void,
  extras: any,
}

const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-top: ${margin24};
`;

const Todo: React.SFC<Props> = (props) => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");

  const reset = () => {
    setTitle("");
    setDescription("");
  };

  const onModalCancel = () => {
    reset();
    setAddModalVisible(false);
  }

  const key = "AddItemModal";

  const onModalOk = () => {
    if(R.isEmpty(newTitle)) {
      notification.error({
        key,
        message: 'Title is required',
        description: 'Unable to create the task due to lack of information'
      })
    } else {
      setAddModalVisible(false);
      props.addItem({
        key: new Date(),
        title: newTitle,
        description: newDescription,
        isDone: false
      });
      notification.success({
        key,
        message: 'Task created successfully',
      })
      setTimeout(() => reset(), 200);  
    }
  }

  return (
    <>
      <StyledButton size="large" type="link" title="+ click here to add a task" onClick={() => setAddModalVisible(true)}/>
      <Modal
        title="Add item to do"
        visible={addModalVisible}
        onOk={onModalOk}
        onCancel={onModalCancel}
      >
        <h2>Title : <Input onChange={e => setTitle(e.target.value)} placeholder="Enter the title to be displayed" value={newTitle}/></h2>
        <h3>Description: <TextArea disabled={R.isEmpty(newTitle)} onChange={e => setDescription(e.target.value)} placeholder="Enter any description" value={newDescription}/></h3>
        <Button title="reset" isDanger={true} type="primary" onClick={reset} />
      </Modal>
      <TaskTable data={props.data} addItem={props.addItem} deleteItem={props.deleteItem} />
    </>
  );
}

export default Todo;