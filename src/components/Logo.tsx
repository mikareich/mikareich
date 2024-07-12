export default function Logo() {
  return (
    <a href="/" className="w-fit h-fit">
      <picture>
        <source
          srcSet="/images/initials.svg"
          media="(max-width: 768px)"
          type="image/svg+xml"
        />

        <img src="/images/logo.svg" alt="Logo" />
      </picture>
    </a>
  );
}
