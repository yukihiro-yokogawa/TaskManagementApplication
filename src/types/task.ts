import { taskGroupInitialState } from './taskGroup';
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

export type EditTask = {
  task: TaskClientState;
  taskGroupIndex: Number;
  taskIndex: Number;
  sideBar: {
    move: boolean;
    memberChange: boolean;
    periodChange: boolean;
    copy: boolean;
  };
};

export const editTaskInitialState: EditTask = {
  task: { ...taskInitialState, EditTask: false },
  taskGroupIndex: 0,
  taskIndex: 0,
  sideBar: {
    move: false,
    memberChange: false,
    periodChange: false,
    copy: false,
  },
};
