import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/src/lib/utils/mergeTailwind";

interface AppLink {
  url: string;
  style?: "link" | "button";
  children: ReactNode;
  className?: string;
}

const linkStyle = {
  link: "",
  button:
    "text-sm rounded-xl bg-gray-600 px-7 py-2 font-medium text-gray-200 md:text-base md:py-3 md:mt-3",
};

// url could be:
// - https://developer.mozilla.org/en-US/docs (external)
// - http://localhost:8099/products (internal)
// - /products (internal)
// - products (internal)

const AppLink = ({ url, style, className, children }: AppLink) => {
  const hostOrigin =
    typeof window !== "undefined" ? window.location.origin : "";

  const isExternalUrl = (str: string) => {
    try {
      return new URL(str).origin !== hostOrigin;
    } catch {
      return false;
    }
  };

  if (isExternalUrl(url)) {
    return (
      <a
        href={url}
        className={cn(className, style ? linkStyle[style] : "")}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    const internalSlug = url.startsWith(hostOrigin)
      ? url.slice(hostOrigin.length) //get slug "/products"
      : `${url.startsWith("/") ? "" : "/"}` + `${url}`;

    return (
      <Link
        href={internalSlug}
        className={cn(className, style ? linkStyle[style] : "")}
      >
        {children}
      </Link>
    );
  }
};

export default AppLink;
