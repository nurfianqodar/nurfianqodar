import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/home-layout.tsx", [index("routes/home.tsx")]),
  layout("./routes/blogs/blogs-layout.tsx", [
    ...prefix("blogs", [
      index("./routes/blogs/blogs.tsx"),
      route(":id", "./routes/blogs/single-blog/single-blog.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
