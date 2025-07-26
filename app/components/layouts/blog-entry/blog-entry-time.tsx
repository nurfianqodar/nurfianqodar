import React from "react";
import dateFotmatter from "~/lib/formatter/dateFormatter";

export interface BlogEntryTimeProps {
  time: Date;
}

const BlogEntryTime: React.FC<BlogEntryTimeProps> = ({ time }) => {
  return (
    <time dateTime={dateFotmatter.format(time)}>
      {dateFotmatter.format(time)}
    </time>
  );
};

export default BlogEntryTime;
