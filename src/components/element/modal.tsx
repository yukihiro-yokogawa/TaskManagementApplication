import React, { useContext } from 'react';
import CreateWorkspace from '~/containers/workspace/createWorkspace';
import {
  HIDDEN_ACTION,
  ModalContext,
  ModalDispatchContext,
} from '~/context/workspace/createWorkspaceModal';
import { CloseButton } from '~/styles/button';
import { ModalContent, ModalHeader, ModalOverlay } from '~/styles/modal';

/**
 * モーダルを表示する共通のコンポーネント.
 *
 * @return {*}
 */
const ModalComponent = () => {
  const { Show, Component } = useContext(ModalContext);
  const dispatch = useContext(ModalDispatchContext);
  return (
    <>
      {Show ? (
        <ModalOverlay onClick={() => dispatch({ type: HIDDEN_ACTION })}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <CloseButton
                onClick={() => dispatch({ type: HIDDEN_ACTION })}
                type="button">
                ×
              </CloseButton>
            </ModalHeader>
            {Component === 'showCreateWorkspace' ? <CreateWorkspace /> : ''}
          </ModalContent>
        </ModalOverlay>
      ) : null}
    </>
  );
};

export default ModalComponent;
