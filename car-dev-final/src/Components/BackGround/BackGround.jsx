import "./BackGround.css";
import Video1 from "../../assets/Video1.mp4";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3a.jpg";

const BackGround = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={Video1} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={img1} className='background fade-in' alt="" />;
  }
  else if (heroCount === 1) {
    return <img src={img2} className='background fade-in' alt="" />;
  }
  else if (heroCount === 2) {
    return <img src={img3} className='background fade-in' alt="" />;
  }
};

export default BackGround;
