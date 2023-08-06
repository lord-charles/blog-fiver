import { useEffect, useState } from "react";

const useOpacity = () => {
  const [Opacity, setOpacity] = useState(false);
  //to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setOpacity("0");
      } else {
        setOpacity("1");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return Opacity;
};

export default useOpacity;
