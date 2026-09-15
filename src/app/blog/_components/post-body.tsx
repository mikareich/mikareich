import { TableOfContents } from "./table-of-contents";

export function PostBody({
  children,
  toc,
}: React.PropsWithChildren<{ toc: React.ReactNode }>) {
  return (
    <main className="flex justify-between gap-4">
      <div className="max-w-prose overflow-hidden">
        <details className="max-lg:mb-4 lg:hidden">
          <summary className="mt-6 mb-4 cursor-pointer font-bold font-heading text-portfolio-text-strong text-xl sm:text-2xl">
            <span className="highlighted">On this page </span>
          </summary>
          <TableOfContents>{toc}</TableOfContents>
        </details>
        <article className="prose mb-8">{children}</article>
      </div>
      <div className="sticky top-5 h-min max-w-72 overflow-hidden max-lg:hidden">
        <TableOfContents>{toc}</TableOfContents>
      </div>
    </main>
  );
}
