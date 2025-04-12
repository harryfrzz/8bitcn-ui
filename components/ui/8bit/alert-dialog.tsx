"use client"

import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogAction as ShadcnAlertDialogAction,
  AlertDialogCancel as ShadcnAlertDialogCancel,
  AlertDialogContent as ShadcnAlertDialogContent,
  AlertDialogDescription as ShadcnAlertDialogDescription,
  AlertDialogFooter as ShadcnAlertDialogFooter,
  AlertDialogHeader as ShadcnAlertDialogHeader,
  AlertDialogOverlay as ShadcnAlertDialogOverlay,
  AlertDialogPortal as ShadcnAlertDialogPortal,
  AlertDialogTitle as ShadcnAlertDialogTitle,
  AlertDialogTrigger as ShadcnAlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const alertDialogVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

export interface BitAlertDialogProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Root>,
    VariantProps<typeof alertDialogVariants> {}

function AlertDialog({ ...props }: BitAlertDialogProps) {
  return <ShadcnAlertDialog {...props} />
}

function AlertDialogTrigger({
  className,
  asChild = true,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <ShadcnAlertDialogTrigger
      className={cn(className)}
      asChild={asChild}
      {...props}
    />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <ShadcnAlertDialogPortal {...props} />
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return <ShadcnAlertDialogOverlay className={cn(className)} {...props} />
}

interface BitAlertDialogContentProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Content>,
    VariantProps<typeof alertDialogVariants> {}

function AlertDialogContent({
  className,
  children,
  font,
  ...props
}: BitAlertDialogContentProps) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <div
        className={cn(
          "relative top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
          className
        )}
      >
        <ShadcnAlertDialogContent
          className={cn(
            "rounded-none border-none bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 grid w-full max-w-[calc(100%-2rem)] gap-4 p-6 duration-200 sm:max-w-lg",
            font !== "normal" && pressStart.className,
            className
          )}
          {...props}
        >
          {children}
          <div
            className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
        </ShadcnAlertDialogContent>
      </div>
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <ShadcnAlertDialogHeader className={cn(className)} {...props} />
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ShadcnAlertDialogFooter
      className={cn("flex flex-col-reverse sm:flex-row gap-4", className)}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return <ShadcnAlertDialogTitle className={cn(className)} {...props} />
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return <ShadcnAlertDialogDescription className={cn(className)} {...props} />
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <ShadcnAlertDialogAction
      className={cn(
        "rounded-none active:translate-y-1 transition-transform relative bg-primary",
        className
      )}
      {...props}
    >
      {props.children}
      {/* Pixelated border */}
      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
      {/* Top shadow */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground/20" />
      <div className="absolute top-1.5 left-0 w-3 h-1.5 bg-foreground/20" />
      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-foreground/20" />
      <div className="absolute bottom-1.5 right-0 w-3 h-1.5 bg-foreground/20" />
    </ShadcnAlertDialogAction>
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <ShadcnAlertDialogCancel
      className={cn(
        "rounded-none active:translate-y-1 transition-transform relative bg-background",
        className
      )}
      {...props}
    >
      {props.children}
      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
    </ShadcnAlertDialogCancel>
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
