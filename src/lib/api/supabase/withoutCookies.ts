import type { NextRequest } from "next/server";
import { createSupabaseClient as createSupabaseClientBase } from "./client";

const createSupabaseClient = (request: NextRequest) => {
  return createSupabaseClientBase({
    getAll: () => request.cookies.getAll(),
    setAll: () => {
      // no-op in middleware – cookies are managed via Next middleware response
    },
  });
};

export const getSupabaseUser = async (request: NextRequest) => {
  const supabase = createSupabaseClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
