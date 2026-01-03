import { useEffect, Dispatch, SetStateAction } from "react";

const useKeydownTrigger = <T>(
  keydownType: "Escape" | "Enter",
  setState: Dispatch<SetStateAction<T>>,
  updatedState: T,
) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === keydownType) {
        setState(updatedState);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);
};

export { useKeydownTrigger };
