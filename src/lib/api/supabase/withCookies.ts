import { cookies } from "next/headers";
import { createSupabaseClient as createSupabaseClientBase } from "./client";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

const createServerClient = async (setCookies: boolean) => {
  const cookieStore = await cookies();

  return createSupabaseClientBase({
    getAll: () => cookieStore.getAll(),
    setAll: setCookies
      ? (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, { ...options, ...cookieOptions });
          });
        }
      : () => {},
  });
};

export const supabaseServer = {
  withSetCookies: () => createServerClient(true),
  readOnly: () => createServerClient(false),
};

export const getSupabaseUser = async () => {
  const supabase = await supabaseServer.readOnly();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export const logoutSupabaseUser = async () => {
  const supabase = await supabaseServer.withSetCookies();
  await supabase.auth.signOut();
};
