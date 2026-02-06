"use client";

import { useRouter } from "next/navigation";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export function LogoutButton() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: add more error handling like src/lib/api/login.ts
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className={navigationMenuTriggerStyle()}>
        Logout
      </button>
    </form>
  );
}
