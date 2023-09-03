import Link from "./Link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="w-full flex mb-[50px]">
      <div className="mr-auto">
        <Logo width={50} />
      </div>

      <ol className="flex items-center gap-[20px] text-lg text-raisin-black-100">
        <li>
          <span className="text-primary">00</span>
          <Link href="#about">About me</Link>
        </li>
        <li>
          <span className="text-primary">01</span>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <span className="text-primary">02</span>
          <Link href="#contact">Contact</Link>
        </li>
      </ol>
    </nav>
  );
}
