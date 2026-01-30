import { useMediaQuery } from "usehooks-ts";

export const useIsMobile = () => {
  //   console.log("useIsMobile; 767px");
  return useMediaQuery("(max-width: 767px)");
};

export const useIsTablet = () => {
  //   console.log("useIsTablet; 768px - 1279px");
  return useMediaQuery("(min-width: 768px) and (max-width: 1279px)");
};

// useMediaQuery("(max-width: 1279px)");
// useMediaQuery("(min-width: 768px) and (max-width: 1279px)");

export const useIsDesktop = () => {
  //   console.log("useIsDesktop; 1280px");
  return useMediaQuery("(min-width: 1280px)");
};

// export { useIsTablet, useIsDesktop };
