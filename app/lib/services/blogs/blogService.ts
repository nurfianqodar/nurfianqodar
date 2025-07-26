import {
  Firestore,
  query,
  getDocs,
  orderBy,
  Timestamp,
  collection,
  CollectionReference,
  limit,
} from "firebase/firestore";
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
  private collection: CollectionReference;
  constructor(private firestore: Firestore) {
    this.collection = collection(firestore, "blogs");
  }

  async getBlogBySlug(slug: string): Promise<Blog> {
    throw new Error();
  }

  async searchBlogs(take: number): Promise<BlogMetadata[]> {
    return [];
  }

  async listLatestBlogs(take: number): Promise<BlogMetadata[]> {
    const q = query(this.collection, orderBy("createdAt"), limit(take));
    const snapshot = await getDocs(q);

    const blogs = snapshot.docs.map((d) => {
      const data = d.data() as Omit<BlogMetadata, "id">;
      const blogMeta: BlogMetadata = {
        id: d.id,
        ...data,
      };
      return blogMeta;
    });
    return blogs;
  }
}

const blogService = new BlogService(firestore);

export default blogService;
