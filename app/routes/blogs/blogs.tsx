import { useEffect, useState } from "react";
import BlogList from "~/components/layouts/blog-list/blog-list";
import Container from "~/components/ui/container";
import blogService, {
  type BlogMetadata,
} from "~/lib/services/blogs/blogService";

const Blogs = () => {
  const [latestBlogs, setLatestBlogs] = useState<BlogMetadata[] | null>(null);

  useEffect(() => {
    blogService.listLatestBlogs(5).then((blogs) => {
      setLatestBlogs(blogs);
    });
  }, []);
  return (
    <main className="pt-20">
      <Container>
        <div className="my-20 flex flex-col items-center gap-y-10">
          <h1 className="text-center text-5xl font-bold">
            Jelajahi Artikel Menginspirasi
          </h1>
        </div>
      </Container>
      <Container>
        <h2 className="text-center text-3xl">Blog Terbaru</h2>
        {latestBlogs == null ? (
          <div>Loading...</div>
        ) : (
          <BlogList blogs={latestBlogs} />
        )}
      </Container>
    </main>
  );
};

export default Blogs;
