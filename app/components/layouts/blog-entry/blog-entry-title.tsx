import React from "react";

export interface BlogEntryTitleProps {
  blogTitle: string;
}

const BlogEntryTitle: React.FC<BlogEntryTitleProps> = ({ blogTitle }) => {
  return <h2 className="mb-5 text-xl font-semibold underline">{blogTitle}</h2>;
};

export default BlogEntryTitle;
