import {
  Firestore,
  query,
  getDocs,
  orderBy,
  Timestamp,
  collection,
  CollectionReference,
  limit,
  where,
  QueryConstraint,
  DocumentReference,
  doc,
  getDoc,
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
  author: string;
}

type BlogSearchQuery = {
  title?: string; // Optional: cari berdasarkan isi judul (manual)
  series?: string; // Optional: exact match
  tags?: string[]; // Optional: array-contains-any
};

class BlogService {
  private collection: CollectionReference;
  constructor(private firestore: Firestore) {
    this.collection = collection(firestore, "blogs");
  }

  async getBlogBySlug(slug: string): Promise<Blog> {
    const ref: DocumentReference = doc(this.collection, slug);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      throw new Error(`Blog with slug "${slug}" not found`);
    }

    const data = snapshot.data() as Omit<Blog, "id">;
    return { id: snapshot.id, ...data };
  }

  async searchBlogs(
    take: number,
    queryInput: BlogSearchQuery,
  ): Promise<BlogMetadata[]> {
    const constraints: QueryConstraint[] = [];

    // filter by series
    if (queryInput.series) {
      constraints.push(where("series", "==", queryInput.series));
    }

    // filter by tags
    if (queryInput.tags && queryInput.tags.length > 0) {
      constraints.push(where("tags", "array-contains-any", queryInput.tags));
    }

    constraints.push(limit(take));

    const q = query(this.collection, ...constraints);
    const snapshot = await getDocs(q);

    // manual filter by title
    const blogs = snapshot.docs
      .map((d) => ({
        id: d.id,
        ...(d.data() as Omit<BlogMetadata, "id">),
      }))
      .filter((blog) => {
        if (queryInput.title) {
          return blog.title
            .toLowerCase()
            .includes(queryInput.title.toLowerCase());
        }
        return true;
      });

    return blogs;
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
