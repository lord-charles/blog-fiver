import { useEffect, useState } from "react";

const useBackground = () => {
  const [Background, setBackground] = useState(false);
  //to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setBackground("linear-gradient(to right, #68d391, #5856d6, #7f42c1)");
      } else {
        setBackground("");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return Background;
};

export default useBackground;
// background-image: linear-gradient(to right, #68d391, #5856d6, #7f42c1);
// background-image: linear-gradient(to right, rgba(104, 211, 145, 0.7), #5856d6, #7f42c1)
