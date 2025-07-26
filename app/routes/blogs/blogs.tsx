import { useEffect, useState } from "react";
import BlogList from "~/components/layouts/blog-list/blog-list";
import Container from "~/components/ui/container";
import blogService, {
  type BlogMetadata,
} from "~/lib/services/blogs/blogService";

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogMetadata[] | null>(null);
  useEffect(() => {
    blogService.listLatestBlogs(5).then((blogs) => {
      setBlogs(blogs);
    });
  }, []);
  return (
    <main className="pt-20">
      <Container>
        <div className="my-20 flex flex-col items-center gap-y-10">
          <h1 className="text-center text-5xl font-bold">
            Jelajahi Artikel Menginspirasi
          </h1>
          <input
            className="h-14 w-full max-w-md rounded-full bg-slate-100 px-8 focus:ring-4 focus:ring-teal-500 focus:ring-offset-0 focus:ring-offset-teal-500 dark:bg-slate-700"
            type="search"
            placeholder="Cari Judul Artikel"
            onChange={(e) => {}}
          />
        </div>
      </Container>
      <Container>
        <h2 className="text-center text-3xl">Blog Terbaru</h2>
        {blogs == null ? <div>Loading...</div> : <BlogList blogs={blogs} />}
      </Container>
    </main>
  );
};

export default Blogs;
