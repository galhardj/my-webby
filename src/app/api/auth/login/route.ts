import { NextResponse } from "next/server";
import { supabase } from "@/src/lib/client/supabase";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { user: data.user, session: data.session },
      { status: 200 },
    );
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Unexpected error during login" },
      { status: 500 },
    );
  }
}
