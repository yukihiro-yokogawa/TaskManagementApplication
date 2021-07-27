import { TaskClientState } from './task';

export type TaskGroupState = {
  TaskGroupId: string;
  Name: string;
  DisplayOrder: string;
  Deleted: boolean;
  CreatedDate: string;
  UpdatedDate: string;
  Tasks: Array<TaskClientState>;
  WorkspaceId: number;
};

export type TaskGroupClientState = TaskGroupState & {
  CreatedTask: boolean;
};

export const taskGroupInitialState: TaskGroupClientState = {
  TaskGroupId: '',
  Name: '',
  DisplayOrder: '',
  Deleted: false,
  CreatedDate: '',
  UpdatedDate: '',
  CreatedTask: false,
  WorkspaceId: 0,
  Tasks: [
    {
      TaskId: '',
      Title: '',
      Description: '',
      StartDate: '',
      EndDate: '',
      Deleted: false,
      CreatedDate: '',
      UpdatedDate: '',
      ChargeUsers: [
        {
          ChargeUserId: '',
          UserId: '',
          TaskId: '',
        },
      ],
      TaskGroupId: '',
      EditTask: false,
    },
  ],
};
