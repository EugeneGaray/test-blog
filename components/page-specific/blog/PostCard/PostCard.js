import React, { useMemo } from 'react';
import MarkdownContent from '../MarkdownContent/MarkdownContent';

import styles from './styles/post-card.module.scss';


const PostCard = ({ cardData }) => {

  const { categories: { edges: categoriesArray } } = cardData;
  const categoriesList = useMemo(() => {
    return categoriesArray.map((item) => (
      <div
        className={styles['post-card__category']}
        key={item.node.id}
      >
        {item.node.name}
      </div>
    ));
  }, [categoriesArray]);

  return (
    <div
      className={styles['post-card']}
    >

      <div className={styles['post-card__info']}>
        <div className={styles['post-card__title']}>
          {cardData.title}
        </div>

        <MarkdownContent
          className={styles['post-card__excerpt']}
          content={cardData.excerpt}
        />

        <div className={styles['post-card__categories']}>
          {categoriesList}
        </div>

      </div>
    </div>

  );
};

export default PostCard;
