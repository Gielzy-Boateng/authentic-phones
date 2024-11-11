import { cn } from "@/lib/utils";

export default function Button({ children, className }) {
  return (
    <button
      className={cn(
        "text-white rounded-lg p-2 text-[14px] transition-all duration-300",
        className
      )}
    >
      {children}
    </button>
  );
}
