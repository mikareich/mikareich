export function TableOfContents({ children }: React.PropsWithChildren) {
  return (
    <nav aria-label="On this page" className="w-full space-y-2 overflow-hidden">
      <p>On this page</p>
      {children}
    </nav>
  );
}
