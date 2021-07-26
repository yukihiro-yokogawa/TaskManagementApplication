import { ChargeUserState } from './user';

export type TaskState = {
  TaskId: string;
  Title: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  Deleted: boolean;
  CreatedDate: string;
  UpdatedDate: string;
  ChargeUsers: Array<ChargeUserState>;
  TaskGroupId: string;
};
export type TaskClientState = TaskState & {
  EditTask: boolean;
};

export const taskInitialState: TaskState = {
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
};
