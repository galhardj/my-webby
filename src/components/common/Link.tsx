import Link from "next/link";
import { ReactNode } from "react";

interface AppLink {
  url: string;
  style: "link" | "button";
  children: ReactNode;
}

const linkStyle = {
  link: "",
  button:
    "text-md mt-3 rounded-xl bg-gray-600 px-7 py-3 font-medium text-gray-200",
};

// url could be:
// - https://developer.mozilla.org/en-US/docs (external)
// - http://localhost:8099/products (internal)
// - /products (internal)
// - products (internal)

const AppLink = ({ url, style, children }: AppLink) => {
  const hostOrigin = location.origin;

  const isExternalUrl = (str: string) => {
    try {
      return new URL(str).origin != hostOrigin;
    } catch {
      return false;
    }
  };

  if (isExternalUrl(url)) {
    return (
      <a
        href={url}
        className={linkStyle[style]}
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
      <Link href={internalSlug} className={linkStyle[style]}>
        {children}
      </Link>
    );
  }
};

export default AppLink;
