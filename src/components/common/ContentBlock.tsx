const ContentBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-8 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-7xl xl:w-5xl">{children}</div>
    </div>
  );
};

export default ContentBlock;
