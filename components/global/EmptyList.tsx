import { cn } from "@/lib/utils";
type EmptyListProps = {
  message?: string;
  className: string;
};

function EmptyList({
  message = "Nothing to display.",
  className,
}: EmptyListProps) {
  return (
    <div className={cn("flex text-2xl", className)}>
      <p>{message}</p>
    </div>
  );
}

export default EmptyList;
