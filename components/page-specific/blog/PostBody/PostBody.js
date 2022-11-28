import React, { useState } from 'react';
import List from '../../../List';
import MarkdownContent from '../MarkdownContent/MarkdownContent';

import styles from './styles/post-body.module.scss';

const PostBody = ({ postData }) => {

  return (
      <div>
        <List.BlogPostHeader
          postData={postData}
        />
        <div className={styles['post-body__content']}>
          <MarkdownContent content={postData.content} />
        </div>
      </div>
  );
};

export default PostBody;
