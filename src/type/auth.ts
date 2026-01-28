import type { User as LoginSuccessResponse } from "@supabase/supabase-js";

type LoginErrorResponse = {
  error: string;
};

export type LoginResponse = LoginSuccessResponse | LoginErrorResponse;
