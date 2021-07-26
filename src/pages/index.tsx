import React, { useContext } from 'react';
import { MainBody } from '../styles/body';
import WorkspaceCardGroup from '../containers/workspace/workspaceCardGroup';
import useSWR from 'swr';
import { apiVersion } from '../utils/api';
import { KeycloakContext } from '../context/keycloak';
import { WorkspacesContext } from '../context/workspace/workspace';
import axiosInstance from '../utils/axiosInstance';
/**
 * Topページを表示するpages.
 *
 * @return {*}
 */
const Top = () => {
  const keycloak = useContext(KeycloakContext);
  const fetcher = (url: string) =>
    axiosInstance
      .get(url, { params: { id: keycloak.UserId } })
      .then((res) => res.data);
  const { data: user, error } = useSWR(
    `/${apiVersion}/api/workspaces/get`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  return (
    <MainBody>
      <WorkspacesContext.Provider value={user}>
        <WorkspaceCardGroup />
      </WorkspacesContext.Provider>
    </MainBody>
  );
};

export default Top;
