import Container from "~/components/ui/container";
import type { Route } from "./+types/home";
import ActionLink from "~/components/ui/action-link";
import EmblemLink from "~/components/ui/emblem-link";
import socialMediaData from "~/lib/data/socialMediaData";
import BlogEntry from "~/components/layouts/blog-entry";
import { useEffect, useState } from "react";
import type { BlogMetadata } from "~/lib/services/blogs/blogService";
import blogService from "~/lib/services/blogs/blogService";
import BlogList from "~/components/layouts/blog-list/blog-list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Home = () => {
  const [blogs, setBlogs] = useState<BlogMetadata[] | null>(null);
  useEffect(() => {
    blogService.listLatestBlogs(5).then((blogs) => {
      setBlogs(blogs);
    });
  }, []);
  return (
    <main className="flex flex-col">
      {/* start hero section */}
      <section
        className="mt-36 mb-10"
        id="hero"
      >
        <Container>
          <h1 className="mb-3 text-2xl font-light md:text-3xl">
            Nurfian Qodar
          </h1>
          <h2 className="mb-8 max-w-md text-5xl font-bold text-balance md:max-w-3xl md:text-6xl lg:text-7xl">
            {"Jack of All Trades "}
            <span className="text-teal-500">{"Master of One"}</span>
          </h2>

          <ul className="flex gap-x-5">
            {socialMediaData.map((item, idx) => {
              return (
                <li key={idx}>
                  <EmblemLink
                    to={item.url}
                    icon={item.icon}
                    name={item.name}
                  />
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex gap-x-8">
            <ActionLink
              to="/"
              name="My Resume"
              external
            />
            <ActionLink
              to="/blogs"
              name="Explore Blogs"
            />
          </div>
        </Container>
      </section>
      {/* end hero section */}

      {/* start latest blog section */}
      <section
        className="mt-36 mb-10"
        id="latest-blogs"
      >
        <Container>
          <h2 className="text-center text-3xl font-bold">Blog Terbaru</h2>
          {blogs == null ? <div>Loading...</div> : <BlogList blogs={blogs} />}
        </Container>
        <div></div>
      </section>
      {/* end latest blog section */}

      {/* start latest blog section */}
      <section
        className="my-10"
        id="latest-projects"
      >
        <Container>
          <h2 className="text-center text-2xl font-semibold">Projek</h2>
          <div></div>
        </Container>
      </section>
      {/* end latest blog section */}
    </main>
  );
};

export default Home;
