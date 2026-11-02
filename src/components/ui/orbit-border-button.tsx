import { forwardRef } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Local equivalent: Originkit requires a separate signed-in account.
export const OrbitBorderButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => <Button ref={ref} className={cn("orbit-border", className)} {...props} />,
);
OrbitBorderButton.displayName = "OrbitBorderButton";