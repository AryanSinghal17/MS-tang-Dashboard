import "../BackGround/BackGround";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3a.jpg";  

const ImageBackground = ({ heroCount }) => {
  if (heroCount === 0) {
    return <img src={img1} className="background fade-in" alt="Background 1" />;
  } else if (heroCount === 1) {
    return <img src={img2} className="background fade-in" alt="Background 2" />;
  } else if (heroCount === 2) {
    return <img src={img3} className="background fade-in" alt="Background 3" />;
  }
};

export default ImageBackground;
