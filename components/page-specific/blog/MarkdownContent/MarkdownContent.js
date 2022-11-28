import React from 'react';

const MarkdownContent = ({ className, content }) => {
  return (
    // eslint-disable-next-line react/no-danger
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default MarkdownContent;
