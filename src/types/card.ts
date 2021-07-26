import { WorkspaceState } from './workspace';

export type WorkspaceCardState = {
  WorkspaceId: string;
  Title: string;
  Content: string;
};

export type TaskCardState = {
  Caption: string;
  Title: string;
  Content: string;
};

export type WorkspaceCardGroupState = {
  Caption: string;
  Workspaces: Array<WorkspaceState>;
};
