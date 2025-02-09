"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { navigationConfig } from "@/config/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationConfig.map((item) => (
          <NavigationMenuItem key={item.name}>
            {item.href ? (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.ul
                    className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.items?.map((section) => (
                      <React.Fragment key={section.name}>
                        {section.subItems &&
                          Object.entries(section.subItems).map(([category, items]) => (
                            <li key={category} className="row-span-3">
                              <h3 className="mb-2 text-sm font-medium text-muted-foreground">{category}</h3>
                              <ul className="space-y-2">
                                {items.map((subItem) => (
                                  <ListItem key={subItem.name} title={subItem.name} href={subItem.href}>
                                    {subItem.description}
                                  </ListItem>
                                ))}
                              </ul>
                            </li>
                          ))}
                      </React.Fragment>
                    ))}
                  </motion.ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref as any}
            href={href ?? "#"}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

