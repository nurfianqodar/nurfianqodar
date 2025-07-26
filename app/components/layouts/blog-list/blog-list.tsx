import React from "react";
import type { BlogMetadata } from "~/lib/services/blogs/blogService";
import BlogEntry from "../blog-entry";

export interface BlogListProps {
  blogs: BlogMetadata[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <ul className="mt-14 flex flex-col items-center">
      {blogs == null ? (
        <div>Loading...</div>
      ) : (
        blogs.map((b, idx) => {
          return (
            <li
              className="flex w-full items-center justify-center"
              key={idx}
            >
              <BlogEntry
                slug={b.id}
                time={new Date(b.createdAt.seconds * 1000)}
                title={b.title}
              />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default BlogList;
