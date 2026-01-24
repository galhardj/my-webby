"use client";

import * as React from "react";
import Link from "next/link";

// import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function NavigationMenuBar() {
  //   const isMobile = useIsMobile()

  return (
    <NavigationMenu className="mx-auto px-6 py-6">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/css-framework">CSS plugin pages</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/products">Products</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/login">Login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>New things to come</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Tailwind pages</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/login">Login page</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blogs SSG</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/ui-in-the-work">UI In The Work</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
