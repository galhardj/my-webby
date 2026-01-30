"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/src/components/common/Forms/InputWithLabel";
import Button from "@/src/components/common/Button";
import Form from "@/src/components/common/Forms/Form";
import ImageNext from "@/src/components/common/ImageNext";
import { getLoginUserData } from "@/src/lib/api/login";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const userEmail = emailRef.current?.value;
    const userPassword = passwordRef.current?.value;

    if (!userEmail || !userPassword) {
      setError("Empty email or password");
      return;
    } else if (!emailRef.current?.checkValidity()) {
      setError("Incorrect email format");
      return;
    }
    setError("");

    try {
      await getLoginUserData(userEmail, userPassword);

      // TODO: /dashboard page
      // TODO: have the login header link replaced with logout
      router.push("/about");
    } catch (err) {
      console.error("Login request failed:", err);
      setError(`Unexpected error, with message: ${(err as Error).message}`);
    }
  };

  return (
    <div className="relative h-screen">
      <ImageNext
        src="/images/mountain-view.avif"
        alt="Login screen"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex w-1/2 items-center justify-center">
        <Form onSubmit={submitHandler}>
          <Input
            id="login-username"
            type="email"
            label="Username or email"
            onChange={() => setError("")}
            ref={emailRef}
            required
          />
          <Input
            id="login-password"
            type={showPass ? "text" : "password"}
            label="Password"
            onChange={() => setError("")}
            ref={passwordRef}
            required
            iconEmbeded
          >
            <Button
              style="icon"
              styleType="password"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowPass((p) => !p)}
            >
              {showPass ? <Eye /> : <EyeOff />}
            </Button>
          </Input>

          {error && <p className="text-red-400">{error}</p>}
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
