import React, { useState } from 'react';
import PostCardsList from '../../components/page-specific/blog/PostCardsList/PostCardsList';
import BlogApiService from '../../services/api/blog';

import styles from '../../styles/pages/blog.module.scss';

const Blog = ({ postsList, categories }) => {
  const [posts, setPosts] = useState(postsList);

  return (
    <div
      className={styles.blog}
    >
      <h1>Cleankarma Blog</h1>

      {!!postsList.length && <PostCardsList postsList={posts}/>}
    </div>
  )
}

export default Blog

export async function getStaticProps() {
  const { postsList, categories } = await BlogApiService.getPostsRequestsList();

  return {
    props: { 
      postsList,
      categories
    },
    revalidate: 10,
  }
}
