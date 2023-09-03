export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-w-[280px] p-[20px] sm:px-[40px] lg:px-[100px] sm:container mx-auto mt-[20px] sm:mt-[100px]">
      {children}
    </main>
  );
}
