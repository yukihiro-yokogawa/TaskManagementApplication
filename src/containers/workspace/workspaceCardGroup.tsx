import React, { useContext, useReducer } from 'react';
import WorkspaceCardGroupComponent from '../../components/workspace/workspaceCardGroup';
import {
  ModalContext,
  ModalDispatchContext,
  modalReducer,
} from '../../context/workspace/createWorkspaceModal';
import { WorkspacesContext } from '../../context/workspace/workspace';

/**
 * Workspaceをグループ化して表示する際に使用するロジックをまとめたコンテナコンポーネント.
 *
 * @return {*}
 */
const WorkspaceCardGroup = () => {
  const [state, dispatch] = useReducer(modalReducer, {
    Show: false,
    Component: '',
  });
  const workspaces = useContext(WorkspacesContext);
  return (
    <ModalContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        <WorkspaceCardGroupComponent
          Caption="最近の表示"
          Workspaces={workspaces}
        />
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};

export default WorkspaceCardGroup;
