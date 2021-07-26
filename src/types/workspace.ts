import {
  TaskGroupClientState,
  taskGroupInitialState,
  TaskGroupState,
} from './taskGroup';
import { UserState } from './user';

export type WorkspaceState = {
  WorkspaceId: string;
  Title: string;
  Description: string;
  CreateUserId: string;
  AdminUserId: string;
  CreatedDate: string;
  UpdatedDate: string;
  Published: boolean;
  Deleted: boolean;
  CreateUser: UserState;
  AdminUser: UserState;
  TaskGroups: Array<TaskGroupState>;
  WorkspaceUsers: Array<UserState>;
};

export type WorkspaceClientState = WorkspaceState & {
  CreatedTaskGroup: boolean;
  TaskGroups: Array<TaskGroupClientState>;
};

export const workspaceInitialState: WorkspaceClientState = {
  WorkspaceId: '',
  Title: '',
  Description: '',
  CreateUserId: '',
  AdminUserId: '',
  CreatedDate: '',
  UpdatedDate: '',
  Published: false,
  Deleted: false,
  CreateUser: { UserId: '' },
  AdminUser: { UserId: '' },
  CreatedTaskGroup: false,
  TaskGroups: [taskGroupInitialState],
  WorkspaceUsers: [{ UserId: '' }],
};
