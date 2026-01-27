import { LoginResponse } from "@/src/type/auth";

export const getLoginUserData = async (
  userEmail: string,
  userPassword: string,
): Promise<LoginResponse> => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error ?? "Login failed");
  }

  return data;
};
