'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={clsx(
      'bg-surface-muted dark:bg-surface-muted-dark w-full',
      'inline-flex  items-center gap-2 justify-start rounded-2xl px-2 py-1.5 text-tabs-text-trigger mb-4',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={clsx(
      'px-3 py-1',
      'inline-flex items-center justify-center gap-2 whitespace-nowrap  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer [&_svg]:pointer-events-none  [&_svg]:shrink-0 [&_svg]:stroke-2 outline-none',
      'border border-transparent',
      'cursor-pointer',
      'text-text-muted',
      'dark:text-text-muted-dark',
      'data-[state=active]:shadow',
      'data-[state=active]:rounded-xl',

      'data-[state=active]:border-border',
      'data-[state=active]:dark:border-border-dark',
      'data-[state=active]:focus:border-border-accent',
      'data-[state=active]:dark:focus:border-border-accent-dark',

      'data-[state=active]:bg-neutral-50',
      'data-[state=active]:dark:bg-neutral-950',
      'data-[state=active]:hover:bg-neutral-100',
      'data-[state=active]:dark:hover:bg-neutral-900',
      'data-[state=active]:active:bg-neutral-200',
      'data-[state=active]:dark:active:bg-neutral-800',

      'data-[state=active]:text-text-primary',
      'data-[state=active]:dark:text-text-primary-dark',
      'data-[state=active]:[&_svg]:stroke-neutral-800',
      'data-[state=active]:dark:[&_svg]:stroke-neutral-200',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={clsx(
      'mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
