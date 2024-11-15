import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} 
    className={cn(className="border-t-[0.5px] border-gray rounded-xl")} 
    {...props} 
    />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, title, children, ...props  }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        "border-y-2 bg-white ring-0 focus:outline-0 border-l-8 hover:border-[#01A981] border-l-[#01A981] hover:bg-[#01A981]/5"
      )}
      {...props}>
        <h2 className={cn("font-medium text-lg transition-all")}>{title}</h2>
      {children}
      <ChevronDownIcon
        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300" // Icon Styling
      /> 
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
   
    className={cn("overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
     "border-b border-x rounded-md px-2 mx-2 shadow-md mb-2" // Content Styling
    )}
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
