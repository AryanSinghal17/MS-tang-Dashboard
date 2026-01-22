import './Hero.css'
import { useNavigate } from 'react-router-dom' // STEP 1: Import useNavigate
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  const navigate = useNavigate(); // STEP 2: Initialize the navigate function

  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className='hero-explore'>
        <p>Explore the features</p>
        {/* STEP 3: Use the correct URL path */}
        <img onClick={() => navigate('/explore')} src={arrow_btn} alt="Explore button" style={{cursor: 'pointer'}} />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <li  onClick={() =>setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li  onClick={() =>setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li  onClick={() =>setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
      </div>
    </div>
  )
}

export default Hero