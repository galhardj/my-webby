import { StringToString } from "@/src/type/common";

const BLOCK_WIDTH: StringToString = {
  wide: "max-w-7xl xl:w-5xl",
  center: "w-sm",
};

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
