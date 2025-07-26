import React from "react";
import { Link } from "react-router";
import BlogEntryTitle from "./blog-entry-title";
import BlogEntryTime from "./blog-entry-time";

export interface BlogEntryProps {
  slug: string;
  title: string;
  time: Date;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ slug, time, title }) => {
  return (
    <Link
      to={`/blogs/article/${slug}`}
      className="flex w-full max-w-3xl flex-col border-b-1 border-black/40 py-10 dark:border-white/40"
    >
      <BlogEntryTitle blogTitle={title} />
      <BlogEntryTime time={time} />
    </Link>
  );
};

export default BlogEntry;
