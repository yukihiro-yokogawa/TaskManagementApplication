import React from 'react';
import MoveTaskComponent from '~/components/task/sidebar/moveTask';
import { EditTaskSideBar, EditTaskSideBarContent } from '~/styles/taskCard';

const EditTaskSideBarComponent = () => {
  return (
    <EditTaskSideBar>
      <MoveTaskComponent />
      <EditTaskSideBarContent>メンバーを変更</EditTaskSideBarContent>
      <EditTaskSideBarContent>期間を編集</EditTaskSideBarContent>
    </EditTaskSideBar>
  );
};

export default EditTaskSideBarComponent;
