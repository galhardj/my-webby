import Input from "./Input";
import ContainerBlock from "@/src/components/common/ContainerBlock";
import Button from "@/src/components/common/Button";

const LoginForm = () => {
  return (
    <ContainerBlock type="screen-centered">
      <form className="flex flex-col gap-4 rounded-lg border-2 p-12">
        <Input
          id={"login-username"}
          type={"text"}
          label={"Username or email"}
        />
        <Input id={"login-password"} type={"text"} label={"Password"} />
        <Button>Login</Button>
      </form>
    </ContainerBlock>
  );
};

export default LoginForm;
