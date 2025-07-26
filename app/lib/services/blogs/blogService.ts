import { Firestore, Timestamp } from "firebase/firestore";
import { data } from "react-router";
import { firestore } from "~/lib/firebase";

export interface BlogMetadata {
  id: string;
  title: string;
  tags: string[];
  series: string;
  createdAt: Timestamp;
}

export interface Blog extends BlogMetadata {
  content: string;
}

class BlogService {
  constructor(private firestore: Firestore) {}

  async getBlogBySlug(slug: string): Promise<Blog> {
    throw new Error();
  }

  async searchBlogs(take: number): Promise<BlogMetadata[]> {
    return [];
  }
}

const blogService = new BlogService(firestore);

export default blogService;
