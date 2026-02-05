import { createServerClient } from "@supabase/ssr";

type CookieAdapter = {
  getAll: () => any;
  setAll?: (cookiesToSet: any[]) => void;
};

const getSupabaseEnv = () => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase env variables");
  }

  return { supabaseUrl, supabaseAnonKey };
};

export const createSupabaseClient = ({ getAll, setAll }: CookieAdapter) => {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseEnv();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll,
      setAll: setAll ?? (() => {}),
    },
  });
};
