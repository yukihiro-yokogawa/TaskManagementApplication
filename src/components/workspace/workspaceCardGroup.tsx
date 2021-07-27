import React, { useContext } from 'react';
import { CaptionH1 } from '~/styles/caption';
import {
  PlusWorkspaceCard,
  PlusWorkspaceCardTextbox,
  WorkspaceCardGroup,
} from '~/styles/workspaceCard';
import WorkspaceCardComponent from './workspaceCard';
import { WorkspaceCardGroupState } from '~/types/card';
import {
  ModalDispatchContext,
  SHOW_ACTION,
} from '~/context/workspace/createWorkspaceModal';
import ModalComponent from '../element/modal';

/**
 * Workspaceをグループ化して表示するコンポーネント.
 *
 * @param {WorkspaceCardGroupState} props
 * @return {*}
 */
const WorkspaceCardGroupComponent = (props: WorkspaceCardGroupState) => {
  const { Caption, Workspaces } = props;
  const dispatch = useContext(ModalDispatchContext);
  return (
    <>
      <CaptionH1>{Caption}</CaptionH1>
      <WorkspaceCardGroup>
        {Workspaces
          ? Workspaces?.map((workspace, index) => (
              <WorkspaceCardComponent
                key={index}
                WorkspaceId={workspace.WorkspaceId}
                Title={workspace.Title}
                Content={workspace.Description}
              />
            ))
          : ''}
        <PlusWorkspaceCard
          onClick={() => {
            dispatch({ type: SHOW_ACTION });
          }}>
          <PlusWorkspaceCardTextbox>+</PlusWorkspaceCardTextbox>
        </PlusWorkspaceCard>
        <ModalComponent />
      </WorkspaceCardGroup>
    </>
  );
};

export default WorkspaceCardGroupComponent;
