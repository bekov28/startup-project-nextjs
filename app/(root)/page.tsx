import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Berd" },
      _id: 1,
      description: "This is a description",
      image: "https://cdn.pixabay.com/photo/2023/11/18/09/06/cloud-8395956_1280.png",
      category: "Robots",
      title: "We Robots",
    },
  ];
  {
    return (
      <>
        <section className="pink_container">
          <h1 className="heading">
            Share Your Startup, <br /> Connect With Entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
          </p>

          <SearchForm query={query} />
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Showing results for "${query}"` : "All Startups"}
          </p>

          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post} />)
            ) : (
              <p className="no-results">No Startups found</p>
            )}
          </ul>
        </section>
      </>
    );
  }
}
