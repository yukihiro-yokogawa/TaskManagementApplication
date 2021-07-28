import React from 'react';
import MoveTask from '~/containers/task/sidebar/moveTask';
import { EditTaskSideBar, EditTaskSideBarContent } from '~/styles/taskCard';

const EditTaskSideBarComponent = () => {
  return (
    <EditTaskSideBar>
      <MoveTask />
      <EditTaskSideBarContent>メンバーを変更</EditTaskSideBarContent>
      <EditTaskSideBarContent>期間を編集</EditTaskSideBarContent>
    </EditTaskSideBar>
  );
};

export default EditTaskSideBarComponent;
