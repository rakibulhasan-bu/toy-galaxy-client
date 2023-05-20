import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {isVisible && (
        <div
          className="fixed bottom-20 right-7 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-500 to-blue-800 text-xl text-white shadow-2xl"
          onClick={goToBtn}
        >
          <FaArrowUp className="icon" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
