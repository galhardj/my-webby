import Image, { ImageProps } from "next/image";

type AppImage = Omit<ImageProps, "src"> & {
  src: string;
};

// TODO: consider; div wrapping, 'sizes' att
const ImageNext = ({ ...props }: AppImage) => {
  return <Image fill unoptimized={props.src.endsWith(".gif")} {...props} />;
};

export default ImageNext;
