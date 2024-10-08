import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        green:
        "flex w-[129px] h-10 rounded  bg-[#2A5B45] text-[white] items-center justify-center cursor-pointer",
        red:
        "flex w-[129px] h-10 rounded  bg-[#EF4444] text-[white] items-center justify-center cursor-pointer",

        black:
        "w-[168px] h-10 no-underline text-white flex items-center justify-center text-sm leading-4 rounded bg-[#1f1815]",
        login:
        "w-[130px] h-[40px] rounded-1 bg-[#515051]",
        buttonProductCard:
        "bg-[#2A5B45] w-[60px] h-[32px] rounded-1 opacity-[70%] text-white",
        buttonModalCart:
        "bg-[#234352] rounded-[50%]  text-white p-0 m-0",
        payAndBuy:
        "flex w-[196px] h-10 rounded opacity-[30%] bg-[#2A5B45] text-[white] items-center justify-center cursor-pointer",
        backToStore:
        "flex w-[158px] h-10 rounded opacity-[0px] bg-[#2A5B45] text-[white] items-center justify-center cursor-pointer"

      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
