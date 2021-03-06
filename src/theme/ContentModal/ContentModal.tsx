import React from 'react';
import Helmet from 'react-helmet';

import { Loader, ShadowBox } from '../index';
import cn from '@utils/classnames';

import './ContentModal.css';
import { metaTitle } from '@utils/metas';

const ContentModal = ({
  title,
  children,
  onClose,
  className = '',
  loading = false,
  full = true,
}: {
  title: string;
  children?: React.JSX.Element | React.JSX.Element[] | string;
  onClose: Function;
  className?: string;
  loading?: boolean;
  full?: boolean;
}) => (
  <React.Fragment>
    <Helmet>
      <title>{metaTitle(title)}</title>
    </Helmet>
    <ShadowBox
      title={title}
      close={onClose}
      className={cn(className, 'content-modal')}
      size={full ? 'large' : 'small'}
    >
      <div className="content-modal__content">
        {loading ? <Loader className="content-modal__loader" /> : children}
      </div>
    </ShadowBox>
  </React.Fragment>
);

export default ContentModal;
