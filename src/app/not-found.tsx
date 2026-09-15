import { PageHero } from "~/components/page-hero";

export default function NotFound() {
  return (
    <>
      <PageHero
        imageUrl="/images/void.svg"
        subtitle="Are you sure your link is correct?"
        title="404 Not Found"
      />
      <p>
        This is probably not what you wanted to see. Maybe try my{" "}
        <a className="highlighted" href="/">
          home page
        </a>{" "}
        idk 🤷‍♂️
      </p>
    </>
  );
}
