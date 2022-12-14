import React, { useState } from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PostCardsList from '../../components/page-specific/blog/PostCardsList/PostCardsList';
import BlogApiService from '../../services/api/blog';

import styles from '../../styles/pages/blog.module.scss';
import { useLocales } from "../../src/locales";

const Blog = ({ postsList, categories }) => {
  const [posts, setPosts] = useState(postsList);
  const { translate } = useLocales();

  return (
    <div
      className={styles.blog}
    >
      <h1>{translate( 'blog' )}</h1>

      {!!postsList.length && <PostCardsList postsList={posts}/>}
    </div>
  )
}

export default Blog;

export async function getStaticProps({ locale }) {
  const { postsList, categories } = await BlogApiService.getPostsRequestsList();

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      postsList,
      categories
    }
  }
}
