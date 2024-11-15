import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "duration-400 ease-in-out hover:scale-110 mt-2 bg-[#01A981] text-white p-2 rounded-xl focus:ring-0 focus:outline-none focus:border-[#01A981] hover:border-[#01A981] hover:bg-[#01A981]/90 shadow-lg active:scale-95 transition-all",
        utility:
          "duration-400 ease-in-out hover:scale-110 mt-2 text-white bg-gray-500  p-2 rounded-xl focus:ring-0 focus:outline-none focus:border-gray-500 hover:border-gray-500 hover:bg-gray-500/90 shadow-lg active:scale-95 transition-all",
        delete:
          "duration-400 ease-in-out hover:scale-110 mt-2 text-white bg-red-500 p-2 rounded-xl focus:ring-0 focus:outline-none focus:border-red-500 hover:border-red-500 hover:bg-red-500/90 shadow-lg active:scale-95 transition-all",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },

  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
