import React, { Dispatch } from 'react';
import { createContext } from 'react';
import { ShowModalState } from '~/types/modal';

/**
 * modalで使用するstore state関数.
 * @type {*}
 * */
export const ModalContext = createContext<ShowModalState>({
  Show: false,
  Component: '',
});

/**
 * modalで使用するstore state関数を変更するdispatch関数.
 * @type {*}
 * */
export const ModalDispatchContext = createContext<
  Dispatch<{
    type: string;
  }>
>(() => {});

/**
 * modalで使用するstore state関数を変更するaction関数.
 *
 * @param {*} _state
 * @param {{ type: string }} action
 * @return {*}
 */
export const modalReducer = (_state: any, action: { type: string }) => {
  switch (action.type) {
    case SHOW_ACTION: {
      return { Show: true, Component: action.type };
    }
    case HIDDEN_ACTION: {
      return { Show: false, Component: '' };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const SHOW_ACTION = 'showCreateWorkspace';
export const HIDDEN_ACTION = 'hiddenModal';
