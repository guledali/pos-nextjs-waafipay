import { cn } from "@/lib/utils";

/**
 * A skeleton loading component that provides a placeholder animation
 * while content is being loaded.
 *
 * @example
 * // Basic skeleton
 * <Skeleton className="h-4 w-[200px]" />
 *
 * @example
 * // Skeleton for an image
 * <Skeleton className="h-[200px] w-full rounded-lg" />
 *
 * @example
 * // Multiple skeletons for text lines
 * <div className="space-y-2">
 *   <Skeleton className="h-4 w-[250px]" />
 *   <Skeleton className="h-4 w-[200px]" />
 * </div>
 *
 * @example
 * // Complex card skeleton
 * <Card>
 *   <CardContent>
 *     <Skeleton className="h-[200px] w-full" />
 *     <div className="space-y-2 mt-4">
 *       <Skeleton className="h-4 w-[250px]" />
 *       <Skeleton className="h-4 w-[200px]" />
 *     </div>
 *   </CardContent>
 * </Card>
 *
 * @param props - Component props
 * @param props.className - Additional CSS classes to apply to the skeleton
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
