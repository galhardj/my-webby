import Image, { ImageProps } from "next/image";

const AppImage = ({ ...props }: ImageProps) => {
  return <Image {...props} fill />;
};

export default AppImage;
