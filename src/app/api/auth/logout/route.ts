import { NextResponse } from "next/server";
import { logoutSupabaseUser } from "@/src/lib/api/supabase";

export async function POST() {
  // TODO: add error handling in here
  await logoutSupabaseUser();
  return NextResponse.json({ success: true });
}
