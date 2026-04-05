import { SOCIALS } from "~/content/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="small flex gap-8 border-gray-300 border-t py-10">
      <span className="mr-auto truncate">Mika Reich ― {currentYear}</span>

      <a className="highlighted truncate max-sm:hidden" href={SOCIALS.github}>
        GitHub
      </a>
      <a
        className="highlighted truncate max-sm:hidden"
        href={`mailto:${SOCIALS.email}`}
      >
        Email
      </a>
      <a className="highlighted truncate max-sm:hidden" href={SOCIALS.discord}>
        Discord
      </a>
    </footer>
  );
}
