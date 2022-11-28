import React from 'react';

import styles from './styles/_blog-post-header.module.scss';

const BlogPostHeader = ({
  postData
}) => {

  return (
    <div className={styles['blog-post-header']}>
      <div className={styles['blog-post-header__title']}>
        {postData.title}
      </div>
    </div>
  );
};

export default BlogPostHeader;
