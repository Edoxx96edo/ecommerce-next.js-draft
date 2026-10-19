import { Skeleton } from "@/components/ui/skeleton";
import { CardContent, Card } from "../ui/card";

type LoadingContainerProps = {
  message?: string;
};

function LoadingContainer({ message = "Loading..." }: LoadingContainerProps) {
  return (
    <div className="grid pt-12 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full rounded-md"></Skeleton>
        <Skeleton className="h-4 w-3/4 rounded-md"></Skeleton>
        <Skeleton className="h-4 w-1/2 rounded-md"></Skeleton>
      </CardContent>
    </Card>
  );
}

export default LoadingContainer;
