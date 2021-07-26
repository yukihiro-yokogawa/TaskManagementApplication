import { useContext, useEffect, useReducer } from 'react';
import useSWR from 'swr';
import TaskCardGroup from '../containers/task/taskCardGroup';
import { KeycloakContext } from '../context/keycloak';
import {
  LOAD_TASK,
  WorkspaceContext,
  WorkspaceDispatchContext,
  WorkspaceReducer,
} from '../context/workspace/workspace';
import { WorkspaceClientState } from '../types/workspace';
import { apiVersion } from '../utils/api';
import axiosInstance from '../utils/axiosInstance';
import _ from 'lodash';

const Task = (props: { workspaceId: string }) => {
  const keycloak = useContext(KeycloakContext);
  const fetcher = (url: string) =>
    axiosInstance
      .get(url, {
        params: { userId: keycloak.UserId, workspaceId: props.workspaceId },
      })
      .then((res) => {
        const workspace: WorkspaceClientState = res.data;
        return workspace;
      });
  const { data: workspace, error } = useSWR(
    `/${apiVersion}/api/workspace/get`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const [state, dispatch] = useReducer(WorkspaceReducer, workspace);
  useEffect(() => {
    if (workspace) {
      dispatch({
        type: LOAD_TASK,
        payload: { taskGroupIndex: 0, taskIndex: 0, task: workspace },
      });
    }
  }, [workspace]);
  if (workspace) {
    return (
      <WorkspaceContext.Provider value={state}>
        <WorkspaceDispatchContext.Provider value={dispatch}>
          <TaskCardGroup />
        </WorkspaceDispatchContext.Provider>
      </WorkspaceContext.Provider>
    );
  } else {
    return <div>loading</div>;
  }
};
export const getServerSideProps = async (context: any) => {
  return { props: { workspaceId: context.query.workspaceId } };
};
export default Task;
