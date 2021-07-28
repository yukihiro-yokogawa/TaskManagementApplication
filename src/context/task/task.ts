import { createContext, Dispatch } from 'react';
import { EditTask, editTaskInitialState } from '~/types/task';

/**
 * Task編集時の情報を保管するContext関数.
 * @type {*}
 */
export const EditTaskContext = createContext<EditTask>(editTaskInitialState);

/**
 * EditTaskContextを書き換えるためのReducer関数.
 *
 * @type {*}
 */
export const EditTaskDispatchContext = createContext<
  Dispatch<{ type: string; payload: any }>
>(() => {});

/**
 * Task編集時に使用するサイドバーのstore state関数を変更するaction関数.
 *
 * @param {*} state
 * @param {{ type: string; payload: any }} action
 * @return {*}
 */
export const EditTaskReducer = (
  state: any,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case MOVE_TASK: {
      return {
        ...state,
        sideBar: {
          move: true,
          memberChange: false,
          periodChange: false,
          copy: false,
        },
      };
    }
    case MOVE_TASK_FINISH: {
      return {
        ...state,
        sideBar: {
          move: false,
        },
      };
    }
    case MEMBER_CHANGE: {
      return {
        ...state,
        sideBar: {
          move: false,
          memberChange: true,
          periodChange: false,
          copy: false,
        },
      };
    }
    case MEMBER_CHANGE_FINISH: {
      return {
        ...state,
        sideBar: {
          memberChange: false,
        },
      };
    }
    case PERIOD_CHANGE: {
      return {
        ...state,
        sideBar: {
          move: false,
          memberChange: false,
          periodChange: true,
          copy: false,
        },
      };
    }
    case PERIOD_CHANGE_FINISH: {
      return {
        ...state,
        sideBar: {
          periodChange: false,
        },
      };
    }
    case COPY_TASK: {
      return {
        ...state,
        sideBar: {
          move: false,
          memberChange: false,
          periodChange: false,
          copy: true,
        },
      };
    }
    case COPY_TASK_FINISH: {
      return {
        ...state,
        sideBar: {
          copy: false,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const MOVE_TASK = 'MOVE_TASK';
export const MOVE_TASK_FINISH = 'MOVE_TASK_FINISH';
export const MEMBER_CHANGE = 'MEMBER_CHANGE';
export const MEMBER_CHANGE_FINISH = 'MEMBER_CHANGE_FINISH';
export const PERIOD_CHANGE = 'PERIOD_CHANGE';
export const PERIOD_CHANGE_FINISH = 'PERIOD_CHANGE_FINISH';
export const COPY_TASK = 'COPY_TASK';
export const COPY_TASK_FINISH = 'COPY_TASK_FINISH';
