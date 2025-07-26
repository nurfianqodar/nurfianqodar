import Container from "~/components/ui/container";
import type { Route } from "./+types/home";
import ActionLink from "~/components/ui/action-link";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Home = () => {
  return (
    <main className="flex flex-col">
      {/* start hero section */}
      <section className="mt-36 mb-10" id="hero">
        <Container>
          <h1 className="mb-3 text-2xl font-light md:text-3xl">
            Nurfian Qodar
          </h1>
          <h2 className="mb-8 max-w-md text-4xl font-bold text-balance sm:text-5xl md:max-w-3xl md:text-6xl lg:text-7xl">
            {"Jack of All Trades "}
            <span>{"Master of One"}</span>
          </h2>

          <div className="mt-8 flex gap-x-8">
            <ActionLink to="/" name="My Resume" external />
            <ActionLink to="/blogs" name="Explore Blogs" />
          </div>
        </Container>
      </section>
      {/* end hero section */}

      {/* start latest blog section */}
      <section className="my-10" id="latest-blogs">
        <Container>
          <h2 className="text-center">Blog Terbaru</h2>
        </Container>
      </section>
      {/* end latest blog section */}

      {/* start latest blog section */}
      <section className="my-10" id="latest-projects">
        <Container>
          <h2 className="text-center">Projek</h2>
        </Container>
      </section>
      {/* end latest blog section */}
    </main>
  );
};

export default Home;
