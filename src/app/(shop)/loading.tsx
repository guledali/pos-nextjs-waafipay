import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="w-full">
            <CardContent className="p-4">
              <Skeleton className="h-[200px] w-full rounded-lg" />
              <div className="space-y-2 mt-4">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Skeleton className="h-10 w-[120px]" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
