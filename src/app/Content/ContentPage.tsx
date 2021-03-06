import React from 'react';

import { useStoreState, useActions } from 'unistore-hooks';
import { actions } from '@store/index';
import { State } from '@store/types';
import { ContentModal } from '@theme';
import cn from '@utils/classnames';
import { Page } from '@app/types';

import './Content.css';

const ContentPage = ({
  className = '',
  onClose,
  slug,
}: {
  className?: string;
  onClose: Function;
  slug: string;
}) => {
  const { loadPage } = useActions(actions);
  const { page } = useStoreState<State>(['page']);

  React.useEffect(() => {
    loadPage(slug);
  }, [slug]);

  return (
    <ContentModal
      className={cn(className, 'content-page')}
      onClose={onClose}
      title={page.data.title}
      loading={page.loading}
    >
      <div
        className="gutenberg-content"
        dangerouslySetInnerHTML={{ __html: page.data.content }}
      />
    </ContentModal>
  );
};

export default ContentPage;
