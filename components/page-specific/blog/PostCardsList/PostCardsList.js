import React, { useMemo } from 'react';
import PostCard from '../PostCard/PostCard';

import styles from './styles/post-cards-list.module.scss';

const PostCardsList = ({ postsList, isSearchedPosts }) => {

  const postCardsList = useMemo(() => {
    return postsList.map((item) => <PostCard cardData={item} key={item.id} />);
  }, [postsList]);
  
  return (
    <>
      {
        !postsList?.length
        && (
        <div>postsEmpty</div>
        )
      }
      <div className={styles['post-cards-list']}>
        {postCardsList}
      </div>
    </>
  );
};

export default PostCardsList;
