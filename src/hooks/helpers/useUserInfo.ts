import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useUserInfo = () => {
  const location: any = useLocation();

  const { currentCode } = useMemo(() => {
    const parts = location;
    console.log(parts, "parts");

    return {
      currentCode: parts,
    };
  }, [location]);

  return {
    currentCode,
  };
};

export default useUserInfo;
