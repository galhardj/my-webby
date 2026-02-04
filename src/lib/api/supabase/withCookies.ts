import { cookies } from "next/headers";
import { createSupabaseClient as createSupabaseClientBase } from "./client";

export const createSupabaseClient = async () => {
  const cookieStore = await cookies();

  return createSupabaseClientBase({
    getAll: () => cookieStore.getAll(),
    setAll(cookiesToSet) {
      cookiesToSet.forEach(({ name, value, options }) => {
        cookieStore.set(name, value, {
          ...options,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
        });
      });
    },
  });
};

export const getSupabaseUser = async () => {
  const supabase = await createSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export const logoutSupabaseUser = async () => {
  const supabase = await createSupabaseClient();
  await supabase.auth.signOut();
};
