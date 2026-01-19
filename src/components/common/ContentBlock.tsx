import { BLOCK_WIDTH } from "@/src/constants/styles";

const ContentBlock = ({
  width = "wide",
  children,
}: {
  width: "wide" | "center";
  children: React.ReactNode;
}) => {
  return (
    <div className="my-8 px-4 sm:px-6 lg:px-10">
      <div className={`mx-auto w-full ${BLOCK_WIDTH[width]}`}>{children}</div>
    </div>
  );
};

export default ContentBlock;
