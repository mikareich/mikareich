export default function Logo() {
  return (
    <a href="/" className="h-fit w-fit">
      <picture>
        <source
          srcSet="/initials.svg"
          media="(max-width: 768px)"
          type="image/svg+xml"
        />

        <img src="/logo.svg" alt="Logo" />
      </picture>
    </a>
  );
}
