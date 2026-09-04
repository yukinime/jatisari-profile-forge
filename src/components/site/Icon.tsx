import { icons, type LucideProps } from "lucide-react";

/** Render ikon Lucide berdasarkan nama string dari file konten. */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (icons as Record<string, React.ComponentType<LucideProps>>)[name] ?? icons.Circle;
  return <Cmp aria-hidden="true" {...props} />;
}
