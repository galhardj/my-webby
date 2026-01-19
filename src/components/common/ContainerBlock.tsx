import { cn } from "@/src/lib/utils/mergeTailwind";
import { ContainerBlockProps } from "@/src/type/props";

const ContainerBlock = ({ children, type }: ContainerBlockProps) => {
  return (
    <div className="my-8 px-4 sm:px-6 lg:px-10">
      <div
        className={cn(
          `mx-auto w-full`,
          type === "standard-block" && `max-w-7xl xl:w-5xl`,
          type === "screen-centered" &&
            `flex h-screen max-w-7xl flex-col justify-center lg:w-sm`,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ContainerBlock;
