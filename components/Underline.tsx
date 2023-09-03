import tailwindMerge from "@/utils/tailwindMerge";

type UnderlineProps = {
  context?: "text";
  children: React.ReactNode;
  className?: string;
};

const containerStyles = tailwindMerge<UnderlineProps>(
  "group relative whitespace-nowrap",
  {
    context: "text",
    use: "text-baby-powder mx-2",
  }
);

export default function Underline({
  children,
  context = "text",
  className,
}: UnderlineProps) {
  return (
    <span className={`${containerStyles({ context })} ${className}`}>
      <span className="absolute bottom-1 left-0 w-full h-1.5 bg-primary opacity-60 transition-all group-hover:h-full"></span>
      <span className="relative">{children}</span>
    </span>
  );
}
