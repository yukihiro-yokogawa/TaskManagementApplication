import React from 'react';
import Link from 'next/link';
import {
  WorkspaceCard,
  WorkspaceCardTextbox,
  WorkspaceCardTitleText,
} from '~/styles/workspaceCard';
import { WorkspaceCardState } from '~/types/card';

/**
 * プロジェクト用のタスクカードを表示するコンポーネント.
 *
 * @param {CardState} props
 * @return {*}
 */
const WorkspaceCardComponent = (props: WorkspaceCardState) => {
  const { WorkspaceId, Title } = props;
  return (
    <Link
      href={{
        pathname: `/task`,
        query: { workspaceId: WorkspaceId },
      }}
      passHref>
      <WorkspaceCard>
        <WorkspaceCardTextbox>
          <WorkspaceCardTitleText>{Title}</WorkspaceCardTitleText>
        </WorkspaceCardTextbox>
      </WorkspaceCard>
    </Link>
  );
};

export default WorkspaceCardComponent;
