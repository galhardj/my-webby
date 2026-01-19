import Input from "./Input";
import ContentBlock from "@/src/components/common/ContentBlock";
import Button from "@/src/components/common/Button";

const LoginForm = () => {
  return (
    <ContentBlock width="center">
      <form className="flex flex-col gap-4 rounded-lg border-2 p-12">
        <Input
          id={"login-username"}
          type={"text"}
          label={"Username or email"}
        />
        <Input id={"login-password"} type={"text"} label={"Password"} />
        <Button>Login</Button>
      </form>
    </ContentBlock>
  );
};

export default LoginForm;
