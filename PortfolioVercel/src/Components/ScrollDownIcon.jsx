import Lottie from "lottie-react";
import scrollDownAnimation from "@projects/Media/scrolldown.json"; // Adjust the path as needed

const ScrollDownIcon = () => {
  const style = {
    height: "2.5rem", // Adjust the height
    width: "2.5rem", // Adjust the width
    margin: "0 auto", // Center the icon
  };

  return (
    <div className="absolute bottom-2 right-0">
      <Lottie animationData={scrollDownAnimation} loop={true} style={style} />
      {/* <p style={{ marginTop: "10px", fontSize: "34px", color: "white" }}>
        Scroll down
      </p> */}
    </div>
  );
};

export default ScrollDownIcon;
