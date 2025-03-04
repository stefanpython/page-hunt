import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function BookSkeleton() {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative pt-4 px-4 flex justify-center">
        <div className="relative h-[200px] w-[150px] bg-gray-200 animate-pulse" />
      </div>
      <CardContent className="flex-1 pt-6">
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mt-2" />
        <div className="h-3 w-1/4 bg-gray-200 rounded animate-pulse mt-2" />
        <div className="space-y-2 mt-4">
          <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
      </CardFooter>
    </Card>
  );
}
