import React from "react";
import type { Route } from "./+types/single-blog";
import blogService, { type Blog } from "~/lib/services/blogs/blogService";
import Container from "~/components/ui/container";
import ReactMarkdown from "react-markdown";
import dateFotmatter from "~/lib/formatter/dateFormatter";

export const loader = async ({ params }: Route.LoaderArgs): Promise<Blog> => {
  const blog = await blogService.getBlogBySlug(params.id);
  return blog;
};

const SingleBlog: React.FC<Route.ComponentProps> = ({ loaderData }) => {
  const { content, createdAt, series, tags, title, author } = loaderData;

  return (
    <main className="pt-20">
      <section className="my-10">
        <Container>
          <div className="container flex flex-col items-center justify-center">
            <div className="prose dark:prose-invert">
              <h1>{title}</h1>
              <time>
                Diunggah pada:{" "}
                {dateFotmatter.format(new Date(createdAt.seconds * 1000))}
              </time>
              <br />
              <i>Seri: {series}</i>
              <br />
              <address className="font-semibold text-teal-500">
                By: {author}
              </address>
              <div className="mt-10">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="container flex items-center justify-center">
            <div className="prose dark:prose-invert flex gap-x-5">
              {tags.map((tag, idx) => {
                return <span key={idx}>#{tag}</span>;
              })}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SingleBlog;
