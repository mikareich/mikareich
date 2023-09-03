import Link from "./Link";
import Logo from "./Logo";

const links = [
  {
    name: "About me",
    href: "/about-me",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function NavBar() {
  return (
    <nav className="w-full flex mb-[100px]">
      <div className="mr-auto">
        <Logo />
      </div>

      <ol className="flex items-center gap-[20px] text-lg text-raisin-black-100">
        {links.map(({ name, href }, index) => (
          <li key={name}>
            <span className="text-primary">
              {
                // make index two digits
                index.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
              }
            </span>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
