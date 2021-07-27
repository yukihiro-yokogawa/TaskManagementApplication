import { createContext, Dispatch } from 'react';
import {
  WorkspaceClientState,
  workspaceInitialState,
  WorkspaceState,
} from '../../types/workspace';
import _ from 'lodash';
import { taskGroupInitialState } from '../../types/taskGroup';
/**
 * Workspaceの一覧を保管するContext関数.
 * @type {*} */
export const WorkspacesContext = createContext<Array<any>>([]);

/**
 * WorkspacesContextを書き換えるためのReducer関数.
 *
 * @param {Array<any>} state
 * @param {{ type: string; payload: WorkspaceState }} action
 * @return {*}
 */
export const WorkspacesReducer = (
  state: Array<any>,
  action: { type: string; payload: WorkspaceState }
) => {
  switch (action.type) {
    case REGISTER_WORKSPACE: {
      return state.push(action.payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

/**
 * Workspaceの情報を保管するContext関数.
 * @type {*} */
export const WorkspaceContext = createContext<WorkspaceClientState>(
  workspaceInitialState
);

/**
 * WorkspaceContextを書き換えるためのReducer関数.
 *
 * @type {*}
 * */
export const WorkspaceDispatchContext = createContext<
  Dispatch<{
    type: string;
    payload: any;
  }>
>(() => {});

/**
 * Task関連作成時に使用するstore state関数を変更するaction関数.
 *
 * @param {*} state
 * @param {({
 *     type: string;
 *     payload: {
 *       taskGroupIndex: React.Key | null | undefined;
 *       taskIndex: React.Key | null | undefined;
 *       task: any;
 *     };
 *   })} action
 * @return {*}
 */
export const WorkspaceReducer = (
  state: any,
  action: {
    type: string;
    payload: {
      taskGroupIndex: React.Key | null | undefined;
      taskIndex: React.Key | null | undefined;
      task: any;
      taskGroup: any;
    };
  }
) => {
  switch (action.type) {
    case LOAD_TASK: {
      return { ...action.payload.task };
    }
    case CREATE_TASK_GROUP: {
      return { ...state, CreatedTaskGroup: true };
    }
    case PUSH_TASK_GROUP: {
      state.CreatedTaskGroup = false;
      state.TaskGroups.push(action.payload.taskGroup);
      return { ...state };
    }
    case CHANGE_TASK_GROUP: {
      _.forEach(state.TaskGroups, (taskGroup) => {
        taskGroup.EditTaskGroup = false;
      });
      state.TaskGroups[Number(action.payload.taskGroupIndex)].EditTaskGroup =
        true;
      return { ...state };
    }
    case EDIT_TASK_GROUP: {
      state.TaskGroups[Number(action.payload.taskGroupIndex)].EditTaskGroup =
        false;
      return { ...state };
    }
    case CANCEL_CREATE_TASK_GROUP: {
      return { ...state, CreatedTaskGroup: false };
    }
    case CREATE_TASK: {
      state.TaskGroups[Number(action.payload.taskGroupIndex)].CreatedTask =
        true;
      return { ...state };
    }
    case PUSH_TASK: {
      state.TaskGroups[Number(action.payload.taskGroupIndex)].CreatedTask =
        false;
      state.TaskGroups[Number(action.payload.taskGroupIndex)].Tasks.push(
        action.payload.task
      );
      return {
        ...state,
      };
    }
    case CHANGE_TASK: {
      _.forEach(
        state.TaskGroups[Number(action.payload.taskGroupIndex)].Tasks,
        (task) => {
          task.EditTask = false;
        }
      );
      state.TaskGroups[Number(action.payload.taskGroupIndex)].Tasks[
        Number(action.payload.taskIndex)
      ].EditTask = true;
      return { ...state };
    }
    case EDIT_TASK: {
      state.TaskGroups[Number(action.payload.taskGroupIndex)].Tasks[
        Number(action.payload.taskIndex)
      ].EditTask = false;
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const LOAD_TASK = 'LOAD_TASK';
export const REGISTER_WORKSPACE = 'REGISTER_WORKSPACE';
export const CREATE_TASK_GROUP = 'CREATE_TASK_GROUP';
export const PUSH_TASK_GROUP = 'PUSH_TASK_GROUP';
export const CHANGE_TASK_GROUP = 'CHANGE_TASK_GROUP';
export const EDIT_TASK_GROUP = 'EDIT_TASK_GROUP';
export const CANCEL_CREATE_TASK_GROUP = 'CANCEL_CREATE_TASK_GROUP';
export const CREATE_TASK = 'CREATE_TASK';
export const PUSH_TASK = 'PUSH_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
