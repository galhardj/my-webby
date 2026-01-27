interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const Form = ({ children, onSubmit: submitHandler }: FormProps) => {
  return (
    <form
      className="flex w-md flex-col gap-4 rounded-lg border-2 bg-white p-12"
      onSubmit={submitHandler}
      noValidate
    >
      {children}
    </form>
  );
};

export default Form;
