import { cn } from "@/lib/utils";

export default function WidthConstraint({ className, children }) {
  return (
    <div className={cn("mx-auto max-w-[1200px] p-5", className)}>
      {children}
    </div>
  );
}
