import React, { useContext } from 'react';
import CreateWorkspaceComponent from '~/components/workspace/createWorkspace';
import { KeycloakContext } from '~/context/keycloak';
import { WorkspaceState } from '~/types/workspace';
import { apiVersion } from '~/utils/api';
import axiosInstance from '~/utils/axiosInstance';

/**
 * Workspace作成Formにおけるロジックをまとめるコンテナコンポーネント.
 *
 * @return {*}
 */
const CreateWorkspace = () => {
  const keycloak = useContext(KeycloakContext);
  const handleSubmit = (workspace: WorkspaceState) => {
    workspace.CreateUserId = keycloak.UserId;
    workspace.AdminUserId = keycloak.UserId;
    axiosInstance.post(`/${apiVersion}/api/workspace/post`, {
      params: { data: workspace },
    });
  };
  return (
    <CreateWorkspaceComponent
      onSubmit={handleSubmit}></CreateWorkspaceComponent>
  );
};

export default CreateWorkspace;
